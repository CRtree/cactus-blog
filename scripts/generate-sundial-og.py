#!/usr/bin/env python3
"""Generate the Sundial Open Graph / X (Twitter) card images.

The link preview that appears when someone pastes https://samuelzuo.me/sundial/
into X (or Slack, iMessage, LinkedIn, …) is rendered by that platform's crawler
from the page's <meta> tags. BaseHead already emits twitter:card,
summary_large_image plus og:image/twitter:image — this script produces the
1200x630 artwork those tags point at.

Output:
    public/og/sundial-en.png
    public/og/sundial-zh.png

The images are committed, so the site build never needs to run this. It is kept
here so the cards can be regenerated if the branding or copy changes.

Requires macOS system fonts (New York/Georgia + Songti) and Pillow + numpy:

    python3 -m pip install pillow numpy
    python3 scripts/generate-sundial-og.py
"""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "src" / "assets" / "sundial"
OUT_DIR = ROOT / "public" / "og"

# Render everything at 2x and downscale at the end for crisp, anti-aliased text.
SS = 2
W, H = 1200, 630

# ------------------------------------------------------------------- palette
PAPER = (247, 244, 238)
INK = (28, 33, 26)
INK_SOFT = (65, 75, 58)
MUTED = (109, 117, 97)
EMBER = (194, 85, 42)
OLIVE = (94, 117, 68)

# --------------------------------------------------------------------- fonts
FONT_LATIN_SERIF = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
FONT_LATIN_SERIF_REG = "/System/Library/Fonts/Supplemental/Georgia.ttf"
FONT_LATIN_SANS = "/System/Library/Fonts/HelveticaNeue.ttc"
FONT_CJK_SERIF = "/System/Library/Fonts/Supplemental/Songti.ttc"
CJK_BOLD_INDEX = 1  # Songti SC Bold
CJK_REG_INDEX = 6  # Songti SC Regular

CONTENT = {
    "en": {
        "headline": ["A limit should feel", "like a sundial."],
        "desc": [
            "Daily app limits that shield, a reason that stays,",
            "and 30 days of history in one heatmap.",
        ],
        "sub": "SCREEN TIME FOR iPHONE",
        "headline_latin": True,
    },
    "zh": {
        "headline": ["限额应该像日晷，", "而不是秒表。"],
        "desc": [
            "为 iPhone 打造的每日 App 限额——真正能屏蔽、",
            "会说明理由，还有 30 天历史。",
        ],
        "sub": "IPHONE 屏幕时间应用",
        "headline_latin": False,
    },
}
URL_TEXT = "samuelzuo.me/sundial"


def font(path: str, size: int, index: int = 0) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size, index=index)


def radial_glow(size, center, radius, color, peak_alpha):
    w, h = size
    yy, xx = np.ogrid[0:h, 0:w]
    dist = np.sqrt((xx - center[0]) ** 2 + (yy - center[1]) ** 2)
    t = np.clip(dist / radius, 0, 1)
    alpha = ((1 - t) ** 2 * peak_alpha).astype(np.uint8)
    layer = np.zeros((h, w, 4), dtype=np.uint8)
    layer[..., 0], layer[..., 1], layer[..., 2] = color
    layer[..., 3] = alpha
    return Image.fromarray(layer, "RGBA")


def horizontal_gradient(size, left, right):
    w, h = size
    ramp = np.linspace(0, 1, w, dtype=np.float32)[None, :, None]
    l = np.array(left, dtype=np.float32)[None, None, :]
    r = np.array(right, dtype=np.float32)[None, None, :]
    row = (l + (r - l) * ramp).astype(np.uint8)
    return Image.fromarray(np.repeat(row, h, axis=0), "RGB")


def draw_tracked(draw, x, y, text, fnt, fill, tracking):
    """Draw text with extra letter-spacing, returning the end x."""
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill, anchor="lm")
        x += draw.textlength(ch, font=fnt) + tracking
    return x


def cover_resize(img, box_w, box_h):
    """Scale + center-crop an image to exactly fill box_w x box_h."""
    src_ratio = img.width / img.height
    box_ratio = box_w / box_h
    if src_ratio > box_ratio:
        new_h = box_h
        new_w = round(box_h * src_ratio)
    else:
        new_w = box_w
        new_h = round(box_w / src_ratio)
    img = img.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - box_w) // 2
    top = (new_h - box_h) // 2
    return img.crop((left, top, left + box_w, top + box_h))


def build_phone():
    """Return an RGBA phone mockup showing the Today screen, rotated slightly."""
    screen = Image.open(ASSETS / "screen-today.webp").convert("RGB")

    sw, sh = 232 * SS, 503 * SS  # screen size
    bezel = 11 * SS
    pw, ph = sw + bezel * 2, sh + bezel * 2
    screen = cover_resize(screen, sw, sh)

    phone = Image.new("RGBA", (pw, ph), (0, 0, 0, 0))
    d = ImageDraw.Draw(phone)
    # Body.
    d.rounded_rectangle([0, 0, pw - 1, ph - 1], radius=44 * SS, fill=(13, 15, 13, 255))
    # Inner rim highlight for a metallic edge.
    d.rounded_rectangle(
        [2 * SS, 2 * SS, pw - 2 * SS, ph - 2 * SS],
        radius=42 * SS,
        outline=(70, 74, 68, 90),
        width=2 * SS,
    )
    # Screen.
    mask = Image.new("L", (sw, sh), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, sw - 1, sh - 1], radius=34 * SS, fill=255)
    phone.paste(screen, (bezel, bezel), mask)
    return phone.rotate(-4, resample=Image.BICUBIC, expand=True)


def compose(locale: str) -> Image.Image:
    cfg = CONTENT[locale]
    canvas = Image.new("RGBA", (W * SS, H * SS), PAPER + (255,))

    # Soft colour washes, echoing the landing page's ember/olive glows.
    canvas = Image.alpha_composite(
        canvas, radial_glow(canvas.size, (1140 * SS, -60 * SS), 720 * SS, EMBER, 78)
    )
    canvas = Image.alpha_composite(
        canvas, radial_glow(canvas.size, (120 * SS, 640 * SS), 680 * SS, OLIVE, 46)
    )

    # Faint paper grain.
    rng = np.random.default_rng(7)
    base = np.asarray(canvas).astype(np.int16)
    base[..., :3] += rng.normal(0, 2.4, (H * SS, W * SS, 1)).astype(np.int16)
    canvas = Image.fromarray(np.clip(base, 0, 255).astype(np.uint8), "RGBA")

    # ---- phone mockup (right side) -------------------------------------
    phone = build_phone()
    px = 1130 * SS - phone.width
    py = (H * SS - phone.height) // 2
    cx, cy = px + phone.width // 2, py + phone.height // 2

    # Warm glow + drop shadow behind the device.
    canvas = Image.alpha_composite(
        canvas, radial_glow(canvas.size, (cx, cy), 330 * SS, EMBER, 60)
    )
    pad = 260 * SS
    shadow = Image.new("RGBA", (phone.width + pad * 2, phone.height + pad * 2), (0, 0, 0, 0))
    silhouette = phone.split()[3]
    shadow.paste((18, 14, 8, 165), (pad, pad), silhouette)
    shadow = shadow.filter(ImageFilter.GaussianBlur(26 * SS))
    canvas.alpha_composite(shadow, (px - pad, py - pad + 16 * SS))
    canvas.alpha_composite(phone, (px, py))

    # ---- text column (left side) ---------------------------------------
    draw = ImageDraw.Draw(canvas)
    mx = 80 * SS

    # App icon with a soft shadow.
    icon = Image.open(ASSETS / "icon.webp").convert("RGB")
    ico = 78 * SS
    icon = cover_resize(icon, ico, ico)
    icon_mask = Image.new("L", (ico, ico), 0)
    ImageDraw.Draw(icon_mask).rounded_rectangle([0, 0, ico - 1, ico - 1], radius=20 * SS, fill=255)
    icon_shadow = Image.new("RGBA", (ico + 40 * SS, ico + 40 * SS), (0, 0, 0, 0))
    icon_shadow.paste((18, 14, 8, 110), (20 * SS, 20 * SS), icon_mask)
    icon_shadow = icon_shadow.filter(ImageFilter.GaussianBlur(10 * SS))
    ico_top = 80 * SS
    canvas.alpha_composite(icon_shadow, (mx - 20 * SS, ico_top - 20 * SS + 6 * SS))
    canvas.paste(icon, (mx, ico_top), icon_mask)

    # Wordmark "Sundial 晷".
    center_y = ico_top + ico // 2
    word_font = font(FONT_LATIN_SERIF, 38 * SS)
    wx = mx + ico + 22 * SS
    draw.text((wx, center_y), "Sundial", font=word_font, fill=INK, anchor="lm")
    wx += draw.textlength("Sundial", font=word_font) + 10 * SS
    draw.text(
        (wx, center_y + 3 * SS),
        "晷",
        font=font(FONT_CJK_SERIF, 27 * SS, CJK_BOLD_INDEX),
        fill=MUTED,
        anchor="lm",
    )

    # Kicker, sitting under the wordmark (not the icon).
    if cfg["headline_latin"]:
        sub_font = font(FONT_LATIN_SANS, 12 * SS)
        sub_tracking = 2.6 * SS
    else:
        sub_font = font(FONT_CJK_SERIF, 13 * SS, CJK_REG_INDEX)
        sub_tracking = 2.2 * SS
    draw_tracked(
        draw,
        mx + ico + 23 * SS,
        center_y + 33 * SS,
        cfg["sub"],
        sub_font,
        MUTED,
        sub_tracking,
    )

    # Headline.
    if cfg["headline_latin"]:
        head_font = font(FONT_LATIN_SERIF, 60 * SS)
    else:
        head_font = font(FONT_CJK_SERIF, 60 * SS, CJK_BOLD_INDEX)
    head_top = 246 * SS
    line_h = 68 * SS
    for i, line in enumerate(cfg["headline"]):
        draw.text((mx, head_top + i * line_h), line, font=head_font, fill=INK)

    # Supporting copy.
    body_font = font(FONT_LATIN_SANS, 20 * SS)
    if not cfg["headline_latin"]:
        # Keep the CJK body on a serif face for consistency.
        body_font = font(FONT_CJK_SERIF, 20 * SS, CJK_REG_INDEX)
    body_top = head_top + len(cfg["headline"]) * line_h + 26 * SS
    for i, line in enumerate(cfg["desc"]):
        draw.text((mx, body_top + i * 32 * SS), line, font=body_font, fill=INK_SOFT)

    # Ember rule + URL.
    rule_y = 528 * SS
    draw.rounded_rectangle(
        [mx, rule_y, mx + 64 * SS, rule_y + 4 * SS], radius=2 * SS, fill=EMBER
    )
    draw.text(
        (mx, rule_y + 30 * SS),
        URL_TEXT,
        font=font(FONT_LATIN_SANS, 17 * SS),
        fill=MUTED,
    )

    # Thin brand bar along the top edge.
    bar = horizontal_gradient((W * SS, 5 * SS), OLIVE, EMBER)
    canvas.paste(bar, (0, 0))

    return canvas.convert("RGB").resize((W, H), Image.LANCZOS)


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for locale in CONTENT:
        img = compose(locale)
        out = OUT_DIR / f"sundial-{locale}.png"
        img.save(out, "PNG", optimize=True)
        print(f"wrote {out.relative_to(ROOT)} ({img.width}x{img.height})")


if __name__ == "__main__":
    main()
