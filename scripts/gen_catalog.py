#!/usr/bin/env python
"""Generate the SunGene Industrial IoT product catalog PDF.
English only (core fonts are latin-1). No supplier / third-party brand text.
Product pages are generated from lib/products.ts (via scripts/dump_products.mts),
so the catalog always matches the live site catalog."""
import json
import os
import subprocess
from fpdf import FPDF

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "public", "products")
OUT = os.path.join(ROOT, "public", "catalog", "sungene-industrial-iot-catalog.pdf")

# Pull the current product data straight out of lib/products.ts
dump = subprocess.run(
    ["node", "--experimental-strip-types", os.path.join(ROOT, "scripts", "dump_products.mts")],
    capture_output=True, text=True, encoding="utf-8", check=True,
)
DATA = json.loads(dump.stdout)

# Core PDF fonts are latin-1; map the few non-latin-1 chars used in EN copy.
LAT1_MAP = {
    **{chr(0x2080 + i): str(i) for i in range(10)},  # subscript digits (CO2, O3, ...)
    "–": "-",   # en dash
    "—": "-",   # em dash
    "→": "->",
    "↔": "<->",
    "Φ": "dia. ",  # phi used for caliber
    "‘": "'", "’": "'", "“": '"', "”": '"',
    " ": " ",
}
def lat(s):
    s = "".join(LAT1_MAP.get(ch, ch) for ch in s)
    return s.encode("latin-1", "replace").decode("latin-1")

NAVY = (15, 23, 42)
BLUE = (30, 58, 138)
BLUE_LT = (37, 99, 235)
GRAY = (90, 96, 110)
LIGHT = (243, 244, 246)

class PDF(FPDF):
    def header(self):
        if self.page_no() == 1:
            return
        self.set_y(8)
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(*BLUE)
        self.cell(0, 6, "SunGene Industrial IoT", align="L")
        self.set_font("Helvetica", "", 8)
        self.set_text_color(*GRAY)
        self.cell(0, 6, "sungeneiot.com", align="R", new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(*LIGHT)
        self.line(15, 18, 195, 18)

    def footer(self):
        if self.page_no() == 1:
            return
        self.set_y(-14)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(*GRAY)
        self.cell(0, 6, "contact@sungeneiot.com  |  Remote Monitoring & Data Acquisition  |  Page %d" % self.page_no(), align="C")

def section_title(pdf, kicker, title):
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(*BLUE_LT)
    pdf.cell(0, 6, kicker.upper(), new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(*NAVY)
    pdf.cell(0, 11, title, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(3)

def bullet(pdf, head, body):
    pdf.set_font("Helvetica", "B", 12)
    pdf.set_text_color(*BLUE)
    pdf.cell(0, 7, head, new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(*GRAY)
    pdf.multi_cell(0, 5.5, body)
    pdf.ln(3)

pdf = PDF(orientation="P", unit="mm", format="A4")
pdf.set_auto_page_break(auto=True, margin=18)
pdf.set_margins(15, 15, 15)

# ---- Cover ----
pdf.add_page()
pdf.set_fill_color(*NAVY)
pdf.rect(0, 0, 210, 297, "F")
pdf.set_fill_color(*BLUE)
pdf.rect(0, 95, 210, 70, "F")
pdf.set_y(60)
pdf.set_text_color(255, 255, 255)
pdf.set_font("Helvetica", "B", 13)
pdf.set_text_color(150, 180, 255)
pdf.cell(0, 8, "SUNGENE INDUSTRIAL IOT", align="C", new_x="LMARGIN", new_y="NEXT")
pdf.ln(6)
pdf.set_text_color(255, 255, 255)
pdf.set_font("Helvetica", "B", 30)
pdf.multi_cell(0, 13, "Remote Monitoring &\nData Acquisition", align="C")
pdf.ln(4)
pdf.set_font("Helvetica", "", 13)
pdf.set_text_color(210, 220, 245)
pdf.multi_cell(0, 7, "Remote monitoring solutions for water, energy\nand industrial equipment", align="C")
pdf.ln(10)
pdf.set_font("Helvetica", "B", 11)
pdf.set_text_color(170, 195, 255)
pdf.cell(0, 7, "LoRaWAN   .   NB-IoT   .   RS485   .   Modbus   .   4G LTE", align="C", new_x="LMARGIN", new_y="NEXT")
pdf.set_y(255)
pdf.set_font("Helvetica", "", 11)
pdf.set_text_color(220, 228, 248)
pdf.cell(0, 6, "sungeneiot.com   |   contact@sungeneiot.com", align="C", new_x="LMARGIN", new_y="NEXT")
pdf.set_font("Helvetica", "", 9)
pdf.set_text_color(150, 165, 200)
pdf.cell(0, 6, "Product Catalog 2026  -  Edition v2", align="C")

# ---- Solutions ----
pdf.add_page()
section_title(pdf, "Solutions", "Remote monitoring, by scenario")
bullet(pdf, "Water Monitoring", "Tank level monitoring, water leak detection and pump monitoring for water utilities, industrial facilities and agriculture - using LoRa / NB-IoT wireless sensors and gateways.")
bullet(pdf, "Energy Monitoring", "Smart metering, energy data collection and solar site monitoring to spot loss, downtime and underperformance in time, across energy, solar and telecom sites.")
bullet(pdf, "Equipment Monitoring", "Temperature monitoring, RS485 / Modbus data acquisition and alarm notification for remote equipment and industrial assets - pushed to operators, not discovered on the next site visit.")
bullet(pdf, "Environmental Monitoring", "Weather stations, air quality, soil and rainfall sensing for agriculture, smart cities and ecological monitoring - solar-powered and wireless options for off-grid sites.")

# ---- Applications ----
pdf.add_page()
section_title(pdf, "Applications", "Where customers start their search")
apps = [
    ("Tank Level Monitoring", "Continuous remote level readings for tanks and reservoirs."),
    ("Pump Monitoring", "Run status, faults and alarms for remote pumps."),
    ("Solar Site Monitoring", "Production and asset data from distributed solar sites."),
    ("Remote Meter Reading", "Automated meter reads over RS485 / wireless."),
    ("Equipment Alarm Notification", "Temperature and status alarms pushed in real time."),
]
for h, b in apps:
    bullet(pdf, h, b)

# ---- Products (generated from lib/products.ts) ----
def product_page(pdf, cat_en, name, tagline, img, specs):
    pdf.add_page()
    section_title(pdf, "Product - " + cat_en, lat(name))
    pdf.set_font("Helvetica", "I", 10)
    pdf.set_text_color(*GRAY)
    pdf.multi_cell(0, 5.5, lat(tagline))
    pdf.ln(3)
    top = pdf.get_y()
    img_path = os.path.join(IMG, img.lstrip("/").replace("products/", "", 1))
    if os.path.exists(img_path):
        pdf.image(img_path, x=15, y=top, w=78)
    pdf.set_xy(100, top)
    for spec in specs:
        pdf.set_x(100)
        pdf.set_font("Helvetica", "B", 9.5)
        pdf.set_text_color(*NAVY)
        pdf.cell(34, 6.5, lat(spec["label"]))
        pdf.set_font("Helvetica", "", 9.5)
        pdf.set_text_color(*GRAY)
        pdf.multi_cell(61, 6.5, lat(spec["value"]))
    pdf.set_y(max(top + 82, pdf.get_y() + 8))
    pdf.set_font("Helvetica", "I", 10)
    pdf.set_text_color(*BLUE_LT)
    pdf.cell(0, 6, "Request a quote: contact@sungeneiot.com", new_x="LMARGIN", new_y="NEXT")

for cat in DATA["categories"]:
    items = [p for p in DATA["products"] if p["category"] == cat["key"]]
    for p in items:
        product_page(pdf, cat["en"], p["name"], p["tagline"], p["image"], p["specs"])

# ---- Partners / OEM ----
pdf.add_page()
section_title(pdf, "Partners", "Build your Industrial IoT business with SunGene")
bullet(pdf, "Distributor Program", "Resell SunGene gateways, sensors and controllers in your region with distributor pricing and stock support.")
bullet(pdf, "System Integrator Program", "Specify and integrate our devices into your monitoring projects with technical and documentation support.")
bullet(pdf, "OEM / Private Label Program", "Put your brand on proven hardware with flexible MOQ and ODM/OEM customization.")
pdf.ln(2)
pdf.set_font("Helvetica", "B", 12); pdf.set_text_color(*NAVY)
pdf.cell(0, 7, "Why partner with SunGene", new_x="LMARGIN", new_y="NEXT")
pdf.set_font("Helvetica", "", 11); pdf.set_text_color(*GRAY)
pdf.multi_cell(0, 6, "Taiwan-based service  .  China manufacturing network  .  Fast OEM support  .  Low MOQ  .  English communication  .  Export experience")

# ---- Contact ----
pdf.add_page()
section_title(pdf, "Contact", "Let's talk")
pdf.set_font("Helvetica", "", 12); pdf.set_text_color(*NAVY)
for line in [
    "Email:     contact@sungeneiot.com",
    "WhatsApp:  +86 181 4413 2078",
    "WeChat:    +86 181 4413 2078",
    "LinkedIn:  linkedin.com/company/108298466",
    "Web:       sungeneiot.com",
]:
    pdf.cell(0, 9, line, new_x="LMARGIN", new_y="NEXT")
pdf.ln(6)
pdf.set_font("Helvetica", "I", 10); pdf.set_text_color(*GRAY)
pdf.multi_cell(0, 6, "SunGene Co., Ltd.  -  Taiwan-based Industrial IoT partner with an ODM/OEM network and China supply chain, serving distributors, system integrators and industrial customers worldwide.")

os.makedirs(os.path.dirname(OUT), exist_ok=True)
pdf.output(OUT)
print("written:", OUT, os.path.getsize(OUT), "bytes,", pdf.page_no(), "pages")
