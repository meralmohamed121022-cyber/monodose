window.UNIFIED_DRUG_DATABASE = [
        // ======= ABIRATERONE - مجموعة أكواد =======  
        {
            name: "ABIRATERONE",
            codes: ['103553', '103669'],
            maxDailyDose: "1000 mg/day PO (with prednisone 5mg BID)",
            liver: { safe: false, emoji: "❌", firstChoice: "Enzalutamide or Darolutamide (safer AR antagonists)" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for cardiac events and K+ levels" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - corticosteroid requirement" },
            hypertension: { safe: false, emoji: "❌", firstChoice: "High HTN risk - monitor BP closely" }
        },
// ======= ABATACEPT - مجموعة أكواد =======
{
    name: "ABATACEPT",
    codes: ['103159', '103303'],
    maxDailyDose: "1000 mg IV per dose (10 mg/kg, max 1000mg per infusion)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe - no dose adjustment needed" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe - no dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

// ======= ABEMACICLIB - مجموعة أكواد =======
{
    name: "ABEMACICLIB",
    codes: ['103711', '103712', '103713', '103710'],
    maxDailyDose: "400 mg/day PO (200mg BID monotherapy)",
    liver: { safe: false, emoji: "❌", firstChoice: "Palbociclib or Ribociclib (safer CDK4/6 inhibitors)" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe if CrCl ≥30 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may cause hyperglycemia" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effect" }
},

// ======= ABIRATERONE - مجموعة أكواد =======
{
    name: "ABIRATERONE",
    codes: ['103553', '103669'],
    maxDailyDose: "1000 mg/day PO (with prednisone 5mg BID mandatory)",
    liver: { safe: false, emoji: "❌", firstChoice: "Enzalutamide or Darolutamide (safer AR antagonists)" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor cardiac events and K+ levels" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - corticosteroid requirement" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "High HTN risk - monitor BP closely" }
},

// ======= ALPELISIB - كود واحد =======
{
    name: "ALPELISIB", 
    codes: ['103857'],
    maxDailyDose: "300 mg/day PO (once daily with food)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for mild-moderate hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: false, emoji: "❌", firstChoice: "Contraindicated - causes severe hyperglycemia" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effect" }
},

// ======= LANREOTIDE - كود واحد =======
{
    name: "LANREOTIDE",
    codes: ['103859'],
    maxDailyDose: "120 mg SC every 4 weeks (deep subcutaneous injection)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose reduction in moderate-severe hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose adjustment in severe renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Monitor for bradycardia and arrhythmias" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - can affect glycemic control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effect" }
},

// ======= ABROCITINIB - كود واحد =======
{
    name: "ABROCITINIB",
    codes: ['107526'],
    maxDailyDose: "200 mg/day PO (once daily, max dose)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Max 100 mg/day if severe renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Thrombosis risk - avoid if high CV risk" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose levels regularly" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effect" }
},

// ======= LEBRIKIZUMAB - كود واحد =======
{
    name: "LEBRIKIZUMAB",
    codes: ['107643'],
    maxDailyDose: "250 mg SC every 2 weeks (maintenance after loading)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

// ======= ACARBOSE - مجموعة أكواد =======
{
    name: "ACARBOSE",
    codes: ['101028', '101029'],
    maxDailyDose: "300 mg/day PO (100mg TID max, or 150mg/day if <60kg)",
    liver: { safe: true, emoji: "✅", firstChoice: "Very safe - minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe - no dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective in diabetes" },
    dm: { safe: true, emoji: "✅", firstChoice: "First-choice for postprandial glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May improve BP control" }
},

// ======= ACECLOFENAC - كود واحد =======
{
    name: "ACECLOFENAC",
    codes: ['105440'],
    maxDailyDose: "200 mg/day PO (100mg BID maximum)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce to 100mg/day in hepatic impairment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in moderate-severe renal impairment" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in heart failure NYHA II-IV" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe with blood glucose monitoring" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Can worsen HTN - monitor BP closely" }
},

// ======= ACEMETACIN - مجموعة أكواد =======
{
    name: "ACEMETACIN",
    codes: ['101857', '101858'],
    maxDailyDose: "180 mg/day PO (60mg TID or 90mg BID retard)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Avoid in hepatic impairment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in renal impairment - nephrotoxic" },
    heart: { safe: false, emoji: "❌", firstChoice: "Avoid in cardiovascular disease" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe with monitoring" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Can worsen HTN" }
},
// ======= ACETYLCYSTEINE - مجموعة أكواد =======
{
    name: "ACETYLCYSTEINE",
    codes: ['100003', '100004'],
    maxDailyDose: "2400 mg/day PO (600mg QID max, or 1200mg BID)",
    liver: { safe: true, emoji: "✅", firstChoice: "Hepatoprotective - especially beneficial in liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe - no dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

// ======= ACETYLSALICYLIC ACID + VITAMIN C - كود واحد =======
{
    name: "ACETYLSALICYLIC ACID + VITAMIN C",
    codes: ['100211'],
    maxDailyDose: "3000 mg/day ASA + 3000mg Vitamin C (effervescent)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "ASA component hepatotoxic at high doses" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "ASA can impair renal function" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective at appropriate doses" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe at therapeutic doses" }
},

// ======= TRETINOIN (ACNE TOPICAL) - مجموعة أكواد =======
{
    name: "TRETINOIN",
    codes: ['100019', '103475', '100020', '100021', '105858', '100670', '100741', '100742', '100743', '102835', '101079', '101080', '102464', '101895', '101985', '102085', '105346', '105827', '102755', '103632', '105458', '107439', '107440', '100273', '100274', '100275', '100671', '101896', '102121', '102122', '102152', '102756'],
    maxDailyDose: "Apply topically once daily at bedtime (various concentrations)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

// ======= ACYCLOVIR - مجموعة أكواد =======
{
    name: "ACYCLOVIR",
    codes: ['102433', '103734', '102430', '106015', '102316', '102431', '102434', '102435', '103226', '103227', '103494', '100612', '100613', '101116', '101117', '101344', '101393', '107250', '100016', '102429', '102432'],
    maxDailyDose: "4000 mg/day PO (800mg 5x daily) or 30 mg/kg/day IV",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal hepatic metabolism - very safe" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose reduction needed if CrCl <50 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

// ======= LAMIVUDINE + ZIDOVUDINE - كود واحد =======
{
    name: "LAMIVUDINE + ZIDOVUDINE",
    codes: ['105635'],
    maxDailyDose: "300mg + 600mg/day PO (150mg + 300mg BID)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor liver function - both drugs hepatotoxic" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose adjustment needed if CrCl <50 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe but monitor for lactic acidosis" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

// ======= ZIDOVUDINE - كود واحد =======
{
    name: "ZIDOVUDINE",
    codes: ['103897'],
    maxDailyDose: "600 mg/day PO (300mg BID or 200mg TID)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor liver function regularly" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose adjustment if severe renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Risk of lactic acidosis - monitor glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

// ======= KETOCONAZOLE (SHAMPOO) - مجموعة أكواد =======
{
    name: "KETOCONAZOLE",
    codes: ['102131', '106497', '103027', '100708', '101143', '101191', '101549', '105824', '102129', '102287'],
    maxDailyDose: "Apply to affected area 2-3 times weekly (topical shampoo)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption from shampoo" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

// ======= ACETAZOLAMIDE - كود واحد =======
{
    name: "ACETAZOLAMIDE",
    codes: ['103549'],
    maxDailyDose: "1000 mg/day PO (250-500mg daily typical dose)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in liver disease/impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose by 50% in moderate-severe CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe but monitor electrolytes (K+)" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Can help reduce IOP and BP" }
},

// ======= ACETYLSALICYLIC ACID (ASPIRIN) - مجموعة أكواد =======
{
    name: "ACETYLSALICYLIC ACID",
    codes: ['100210', '101176'],
    maxDailyDose: "4000 mg/day PO (anti-inflammatory) or 325mg/day (cardioprotective)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Hepatotoxic at high doses >2g/day" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Can cause renal impairment - use lowest dose" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective at low doses 75-100mg" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe and beneficial in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe at cardioprotective doses" }
},
// ======= ADALIMUMAB - مجموعة أكواد =======
{
    name: "ADALIMUMAB",
    codes: ['106508', '103879', '106068', '102787', '106225', '107529'],
    maxDailyDose: "40 mg SC every other week (max 80mg every other week for RA without MTX)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor hepatitis B reactivation - hepatic screening mandatory" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed for kidney disease" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for CHF - contraindicated in severe CHF" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effect" }
},

// ======= AVELUMAB - مجموعة أكواد =======
{
    name: "AVELUMAB",
    codes: ['103883'],
    maxDailyDose: "800 mg IV every 2 weeks until progression",
    liver: { safe: false, emoji: "❌", firstChoice: "High hepatotoxicity risk - monitor ALT/AST weekly" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor for immune-mediated nephritis" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for immune-mediated myocarditis" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - immune-mediated endocrinopathies" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - immune-mediated effects possible" }
},

// ======= CABOZANTINIB - مجموعة أكواد =======
{
    name: "CABOZANTINIB",
    codes: ['103892', '103884'],
    maxDailyDose: "60 mg PO daily (adults), 40mg daily if <40kg",
    liver: { safe: false, emoji: "❌", firstChoice: "Dose reduction needed - hepatotoxicity risk" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - proteinuria risk" },
    heart: { safe: false, emoji: "❌", firstChoice: "High thrombotic events risk - monitor closely" },
    dm: { safe: true, emoji: "✅", firstChoice: "No specific glucose effects" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "High HTN risk - monitor BP closely" }
},

// ======= RAMUCIRUMAB - مجموعة أكواد =======
{
    name: "RAMUCIRUMAB",
    codes: ['103893'],
    maxDailyDose: "8 mg/kg IV every 2 weeks (max 10mg/kg for NSCLC)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor for hepatotoxicity - dose based on liver function" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor for proteinuria - dose interruption may be needed" },
    heart: { safe: false, emoji: "❌", firstChoice: "High thromboembolism risk - contraindicated in recent MI" },
    dm: { safe: true, emoji: "✅", firstChoice: "No direct glucose effects" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Severe HTN risk - monitor BP closely" }
},

// ======= DARATUMUMAB - مجموعة أكواد =======
{
    name: "DARATUMUMAB",
    codes: ['106318'],
    maxDailyDose: "16 mg/kg IV weekly x8, then every 2 weeks x8, then monthly",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for infusion reactions - cardiac events possible" },
    dm: { safe: true, emoji: "✅", firstChoice: "No specific glucose effects" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP during infusion reactions" }
},

// ======= ERLOTINIB - مجموعة أكواد =======
{
    name: "ERLOTINIB",
    codes: ['103881'],
    maxDailyDose: "150 mg PO daily (NSCLC), 100mg daily (pancreatic cancer)",
    liver: { safe: false, emoji: "❌", firstChoice: "Dose reduction needed - hepatotoxicity risk" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No specific glucose effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= ROMOSOZUMAB - مجموعة أكواد =======
{
    name: "ROMOSOZUMAB",
    codes: ['103899'],
    maxDailyDose: "210 mg SC monthly x12 months maximum",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic contraindications" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in CKD patients" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in MI/stroke history within 1 year" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= OFATUMUMAB - مجموعة أكواد =======
{
    name: "OFATUMUMAB",
    codes: ['103894'],
    maxDailyDose: "20 mg SC monthly (after initial loading doses)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor for hepatitis B reactivation" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TRIFLURIDINE/TIPIRACIL - مجموعة أكواد =======
{
    name: "TRIFLURIDINE/TIPIRACIL",
    codes: ['103896'],
    maxDailyDose: "35 mg/m² PO BID days 1-5 and 8-12 of 28-day cycle",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor hepatic function - dose reduction may be needed" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose reduction needed for CrCl <60" },
    heart: { safe: true, emoji: "✅", firstChoice: "No specific cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= PERTUZUMAB - مجموعة أكواد =======
{
    name: "PERTUZUMAB",
    codes: ['103882'],
    maxDailyDose: "420 mg IV loading, then 840mg IV every 3 weeks",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for renal impairment" },
    heart: { safe: false, emoji: "❌", firstChoice: "Monitor LVEF - cardiotoxicity risk with trastuzumab" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= ANIFROLUMAB - مجموعة أكواد =======
{
    name: "ANIFROLUMAB",
    codes: ['106316'],
    maxDailyDose: "300 mg IV every 4 weeks",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic dose adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No specific cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TEZEPELUMAB - مجموعة أكواد =======
{
    name: "TEZEPELUMAB",
    codes: ['106317'],
    maxDailyDose: "210 mg SC every 4 weeks",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic contraindications" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal contraindications" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= ADEFOVIR DIPIVOXIL - مجموعة أكواد =======
{
    name: "ADEFOVIR DIPIVOXIL",
    codes: ['101069'],
    maxDailyDose: "10 mg PO daily",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients - antiviral for HBV" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Nephrotoxic - monitor CrCl closely, dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= EPINEPHRINE - مجموعة أكواد =======
{
    name: "EPINEPHRINE",
    codes: ['103804', '103375', '106440', '107225', '107226'],
    maxDailyDose: "0.3-0.5 mg IM emergency dose (EpiPen 0.15-0.3mg)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal patients" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in cardiac disease - arrhythmia risk" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - hyperglycemia possible" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - hypertensive crisis risk" }
},

// ======= NOREPINEPHRINE - مجموعة أكواد =======
{
    name: "NOREPINEPHRINE",
    codes: ['105851'],
    maxDailyDose: "0.05-2 mcg/kg/min IV infusion (titrated to effect)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal patients" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor cardiac function - arrhythmia risk" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - hyperglycemia possible" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Potent vasoconstrictor - ICU monitoring required" }
},

// ======= AESCIN - مجموعة أكواد =======
{
    name: "AESCIN",
    codes: ['103081', '101887', '101888', '101890', '101891', '101889'],
    maxDailyDose: "100-150 mg daily topical/oral",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= ACETYLSALICYLIC ACID CARDIO - مجموعة أكواد =======
{
    name: "ACETYLSALICYLIC ACID CARDIO",
    codes: ['100209', '103360', '100212', '103625', '100687', '101177'],
    maxDailyDose: "100 mg/day PO (cardioprotective dose)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe at cardioprotective doses" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe at low doses with monitoring" },
    heart: { safe: true, emoji: "✅", firstChoice: "First-choice for secondary prevention" },
    dm: { safe: true, emoji: "✅", firstChoice: "Recommended for diabetic CV protection" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe and recommended for CV protection" }
},

// ======= ALLERGEN EXTRACT - مجموعة أكواد =======
{
    name: "ALLERGEN EXTRACT",
    codes: ['103730', '103758', '103701'],
    maxDailyDose: "Variable - per sublingual immunotherapy protocol",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for anaphylaxis - have epinephrine ready" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= ALLOPURINOL - مجموعة أكواد =======
{
    name: "ALLOPURINOL",
    codes: ['101326', '101327', '101552', '101553', '101822', '101823', '103293'],
    maxDailyDose: "800 mg daily (start 100mg, increase gradually to 300-600mg daily)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor hepatic function - dose adjustment may be needed" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Dose reduction needed - CrCl 10-20: 100mg daily, <10: 100mg every other day" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= ALOGLIPTIN - مجموعة أكواد =======
{
    name: "ALOGLIPTIN",
    codes: ['105385', '105386'],
    maxDailyDose: "25 mg daily (12.5mg daily for moderate renal impairment)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose reduction: 12.5mg daily if CrCl 30-60, 6.25mg if CrCl <30" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for heart failure - DPP-4 inhibitor class effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Antidiabetic - improves glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= ALOGLIPTIN/METFORMIN - مجموعة أكواد =======
{
    name: "ALOGLIPTIN/METFORMIN",
    codes: ['105387'],
    maxDailyDose: "25/2000 mg daily (divided BID with meals)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated - metformin component hepatotoxic" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <30 - metformin component" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for heart failure and lactic acidosis" },
    dm: { safe: true, emoji: "✅", firstChoice: "Dual antidiabetic mechanism - excellent glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= ALOGLIPTIN/PIOGLITAZONE - مجموعة أكواد =======
{
    name: "ALOGLIPTIN/PIOGLITAZONE",
    codes: ['105404', '105405'],
    maxDailyDose: "25/30 mg daily (25mg alogliptin + 15-30mg pioglitazone)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated - pioglitazone hepatotoxicity risk" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - dose adjustment needed" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in heart failure - fluid retention risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Dual antidiabetic - excellent glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= ALUMINUM/MAGNESIUM HYDROXIDE - مجموعة أكواد =======
{
    name: "ALUMINUM/MAGNESIUM HYDROXIDE",
    codes: ['100781', '103654', '100011', '100835', '100836', '101467', '101468', '101469', '101470', '101472', '101914', '101917', '101918', '101919'],
    maxDailyDose: "40-80 mEq daily (10-20ml QID or 2-4 tablets QID)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor for aluminum accumulation in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "High sodium content in some preparations" }
},

// ======= ALPHA LIPOIC ACID - مجموعة أكواد =======
{
    name: "ALPHA LIPOIC ACID",
    codes: ['105097', '106351', '106341', '102861', '106324', '508487', '508488'],
    maxDailyDose: "600 mg daily (300-600mg daily for diabetic neuropathy)",
    liver: { safe: true, emoji: "✅", firstChoice: "Hepatoprotective properties" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "Antioxidant - cardiovascular protective" },
    dm: { safe: true, emoji: "✅", firstChoice: "Improves insulin sensitivity and glucose metabolism" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May have mild BP lowering effect" }
},

// ======= ALPHA-AMYLASE - مجموعة أكواد =======
{
    name: "ALPHA-AMYLASE",
    codes: ['106494'],
    maxDailyDose: "Variable - per digestive enzyme protocol (typically 1-2 capsules with meals)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe digestive enzyme" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "May aid carbohydrate digestion" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= ALPROSTADIL - مجموعة أكواد =======
{
    name: "ALPROSTADIL",
    codes: ['103740'],
    maxDailyDose: "0.1-0.4 mcg/kg/min IV (neonates), 20-40 mcg intracavernosal (adults)",
    liver: { safe: true, emoji: "✅", firstChoice: "Rapid hepatic metabolism - safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for hypotension and cardiac rhythm changes" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Potent vasodilator - monitor BP closely" }
},

// ======= BETAINE - مجموعة أكواد =======
{
    name: "BETAINE",
    codes: ['107457'],
    maxDailyDose: "20 g daily (divided BID, increase gradually from 6g daily)",
    liver: { safe: true, emoji: "✅", firstChoice: "Hepatoprotective - treats fatty liver" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "May improve cardiac function" },
    dm: { safe: true, emoji: "✅", firstChoice: "May improve insulin sensitivity" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= ALVERINE - مجموعة أكواد =======
{
    name: "ALVERINE",
    codes: ['102108'],
    maxDailyDose: "120 mg daily (40mg TID before meals)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= AMANTADINE - مجموعة أكواد =======
{
    name: "AMANTADINE",
    codes: ['101747'],
    maxDailyDose: "400 mg daily (100mg BID, increase to 100mg TID-QID)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal hepatic metabolism" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Major dose reduction needed - CrCl 30-50: 100mg daily, <30: 100mg every other day" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for arrhythmias and CHF" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause orthostatic hypotension" }
},

// ======= AMBRISENTAN - مجموعة أكواد =======
{
    name: "AMBRISENTAN",
    codes: ['103617', '103766'],
    maxDailyDose: "10 mg daily (start 5mg daily, increase after 4 weeks)",
    liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs monthly - hepatotoxicity risk with ERA class" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for fluid retention and CHF" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Hypotension risk - monitor BP" }
},
// ======= OLMESARTAN - مجموعة أكواد =======
{
    name: "OLMESARTAN",
    codes: ['105568', '105569'],
    maxDailyDose: "40 mg daily (start 20mg, max 40mg daily)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - dose adjustment may be needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective ARB - safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective - excellent for diabetic nephropathy" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Excellent BP control - ARB class" }
},

// ======= OLMESARTAN/HCTZ - مجموعة أكواد =======
{
    name: "OLMESARTAN/HCTZ",
    codes: ['105570', '105571', '105572'],
    maxDailyDose: "40mg/25mg daily (max combination dose)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor for hyperuricemia and electrolyte imbalance" },
    heart: { safe: true, emoji: "✅", firstChoice: "Excellent cardiovascular protection" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - HCTZ may worsen hyperglycemia" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Superior BP control with dual mechanism" }
},

// ======= OLMESARTAN/AMLODIPINE - مجموعة أكواد =======
{
    name: "OLMESARTAN/AMLODIPINE",
    codes: ['105574', '105566', '105565'],
    maxDailyDose: "40mg/10mg daily (max combination dose)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor - amlodipine component needs dose reduction in cirrhosis" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function with ARB component" },
    heart: { safe: true, emoji: "✅", firstChoice: "Excellent cardiac protection - ARB + CCB combination" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral glucose effects - excellent for diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Superior BP control - complementary mechanisms" }
},

// ======= AMLODIPINE/ATORVASTATIN - مجموعة أكواد =======
{
    name: "AMLODIPINE/ATORVASTATIN",
    codes: ['100360', '100361', '100362', '100363', '100364'],
    maxDailyDose: "10mg/80mg daily (max combination dose)",
    liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs closely - atorvastatin hepatotoxicity risk" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "Excellent cardiovascular protection - BP + cholesterol control" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - atorvastatin may worsen diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Dual cardiovascular risk reduction" }
},

// ======= CANDESARTAN/AMLODIPINE - مجموعة أكواد =======
{
    name: "CANDESARTAN/AMLODIPINE",
    codes: ['105259', '105260'],
    maxDailyDose: "32mg/10mg daily (candesartan max 32mg, amlodipine max 10mg)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor - amlodipine component needs dose reduction in cirrhosis" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - ARB component" },
    heart: { safe: true, emoji: "✅", firstChoice: "Excellent cardiac protection" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective for diabetic nephropathy" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Superior BP control - ARB + CCB synergy" }
},

// ======= RAMIPRIL/AMLODIPINE - مجموعة أكواد =======
{
    name: "RAMIPRIL/AMLODIPINE",
    codes: ['105315', '105314', '105313', '105312'],
    maxDailyDose: "10mg/10mg daily (max combination dose)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor both components - dose reduction may be needed" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function and potassium - ACE inhibitor component" },
    heart: { safe: true, emoji: "✅", firstChoice: "Excellent cardiac protection - ACE inhibitor + CCB" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective - excellent for diabetic nephropathy" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Superior BP control with cardiac protection" }
},

// ======= AMLODIPINE/VALSARTAN - مجموعة أكواد =======
{
    name: "AMLODIPINE/VALSARTAN",
    codes: ['103315', '103317', '103314', '103316', '100806', '100807', '101340', '101341', '101342', '101343', '105611', '105612', '106264', '106265', '106266', '106267'],
    maxDailyDose: "10mg/320mg daily (max combination dose)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor - amlodipine component needs dose reduction in cirrhosis" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - ARB component" },
    heart: { safe: true, emoji: "✅", firstChoice: "Excellent cardiovascular protection" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral glucose effects - safe for diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Superior BP control - ARB + CCB combination" }
},
  // ===== ABEMACICLIB =====
  {
    name: "ABEMACICLIB",
    codes: ["103857","103859","103711","103712","103713","103710"],
    maxDailyDose: "400 mg/day PO (200 mg BID monotherapy)",
    liver: { safe: false, emoji: "❌", firstChoice: "Use Palbociclib/Ribociclib if hepatic dysfunction" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose change CrCl ≥30 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiotoxicity reported" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May ↑glucose—monitor" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
  },
{
  name: "KETOCONAZOLE",
  codes: ['101062'], // HAIRSCIENCE FOR DANDRUFF SHAMP
  maxDailyDose: "20 mL/day topical shampoo (10 mL BID, leave on 5 min)",
  liver: { safe: true, emoji: "✅", firstChoice: "Limited dermal absorption – hepatically safe" },
  kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment needed" },
  heart:  { safe: true, emoji: "✅", firstChoice: "No known cardiac effect" },
  dm:     { safe: true, emoji: "✅", firstChoice: "No effect on blood glucose" },
  hypertension: { safe: true, emoji: "✅", firstChoice: "Does not raise blood pressure" }
},

{
  name: "MINOXIDIL",
  codes: ['101521'], // NEOXIDIL 2 % 60 mL
  maxDailyDose: "2 mL/day topical (1 mL BID of 2 % solution)",
  liver: { safe: true, emoji: "✅", firstChoice: "Limited metabolism – considered safe" },
  kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment needed" },
  heart:  { safe: false, emoji: "⚠️", firstChoice: "Monitor cardiac patients – possible palpitations/edema" },
  dm:     { safe: true, emoji: "✅", firstChoice: "No effect on glucose" },
  hypertension: { safe: false, emoji: "⚠", firstChoice: "May cause sudden hypotension if systemically absorbed" }
},

  // ===== ABIRATERONE =====
  {
    name: "ABIRATERONE",
    codes: ["103553","103669"],
    maxDailyDose: "1000 mg/day PO (take fasting + prednisone 5 mg BID)",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid Child-Pugh C; monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor K⁺ & fluid—cardiac risk" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Prednisone may ↑glucose" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "May raise BP—close monitoring" }
  },

  // ===== DIMETINDENE, PHENYLEPHRINE =====
  {
    name: "DIMETINDENE, PHENYLEPHRINE",
    codes: ["102311","102312","102310"],
    maxDailyDose: "18 sprays/day (3 sprays/nostril q4h ×6)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Decongestant may ↑HR/BP" },
    dm: { safe: true, emoji: "✅", firstChoice: "No effect" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Avoid if uncontrolled HTN" }
  },

  // ===== AZELASTINE =====
  {
    name: "AZELASTINE",
    codes: ["100069"],
    maxDailyDose: "8 sprays/day total (4 per nostril)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "No CV issues" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect" }
  },

  // ===== LEVOCABASTINE =====
  {
    name: "LEVOCABASTINE",
    codes: ["101303"],
    maxDailyDose: "16 sprays/day (2 Spr/nostril QID)",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic restriction" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce frequency if CrCl <50 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "No effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },

  // ===== POVIDONE-IODINE (NASAL) =====
  {
    name: "POVIDONE-IODINE",
    codes: ["105022","105023"],
    maxDailyDose: "6 sprays/day (1 spray/nostril TID)",
    liver: { safe: true, emoji: "✅", firstChoice: "Negligible systemic iodine" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe if normal thyroid" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },

  // ===== SALICYLIC ACID, LACTIC ACID =====
  {
    name: "SALICYLIC ACID, LACTIC ACID",
    codes: ["102120","100358"],
    maxDailyDose: "1 application/day topical",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe on intact skin" },
    heart: { safe: true, emoji: "✅", firstChoice: "No systemic effect" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Avoid on diabetic foot without review" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },

  // ===== ASHWAGANDHA (Withania somnifera) =====
  {
    name: "ASHWAGANDHA",
    codes: ["105470","106366","107080","106332","509401","509479","106460"],
    maxDailyDose: "600 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic concerns" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "No CV effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "No impact on glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },

  // ===== HEDERA HELIX (IVY LEAF EXTRACT) =====
  {
    name: "HEDERA HELIX (IVY LEAF)",
    codes: ["106569"],
    maxDailyDose: "105 mg/day PO (dry extract)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic exposure" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },

  // ===== SODIUM HYALURONATE (ARTIFICIAL TEARS) =====
  {
    name: "SODIUM HYALURONATE",
    codes: ["103064","107495","103318"],
    maxDailyDose: "12 drops/day (1 drop OU ×6)",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical only" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },
  // ===== AMOROLFINE =====
  {
    name: "AMOROLFINE",
    codes: ["105658", "101305"],
    maxDailyDose: "Topical only: apply 5% lacquer 1–2× weekly",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "No effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "No effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect" }
  },

  // ===== AMOXICILLIN =====
  {
    name: "AMOXICILLIN",
    codes: ["101172","107451","107449","107450","100094","100097","100098","100100","100721","100722","101014","103702","101106","101171","101173","103652","101650","101878","101879","100095","100096","100101","100723","101015","101105","101107","101108","101174","101175","100099","105706","105174","105172","101651","101652","101725","101880","101881","102262"],
    maxDailyDose: "3000 mg/day PO (1000 mg q8h)",
    liver: { safe: true, emoji: "✅", firstChoice: "Rare cholestasis" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose if CrCl <30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },

  // ===== AMOXICILLIN, CLAVULANIC ACID =====
  {
    name: "AMOXICILLIN, CLAVULANIC ACID",
    codes: ["100088","100090","100093","100228","100233","100237","100239","100501","100502","100524","100570","100572","101011","101012","101013","101166","101169","101170","101205","101208","101210","101395","101398","101400","101680","107193","100229","100235","100087","100089","100091","100092","100230","100231","100232","100234","100238","100503","100525","100569","100571","100573","101165","101167","101168","105486","101204","101206","101207","101209","101394","101396","101397","101399","103235","100236","101211"],
    maxDailyDose: "4000 mg/day amoxicillin component (2000 mg BID XR)",
    liver: { safe: false, emoji: "❌", firstChoice: "Risk of cholestatic hepatitis" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Adjust if CrCl <30; avoid XR" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },

  // ===== AMPICILLIN =====
  {
    name: "AMPICILLIN",
    codes: ["100779", "100780"],
    maxDailyDose: "12000 mg/day IV/PO",
    liver: { safe: true, emoji: "✅", firstChoice: "Rare hepatic events" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce if CrCl <30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },

  // ===== AMPICILLIN, SULBACTAM =====
  {
    name: "AMPICILLIN, SULBACTAM",
    codes: ["102265", "102266"],
    maxDailyDose: "12000 mg/day IV (ampicillin 8 g + sulbactam 4 g)",
    liver: { safe: true, emoji: "✅", firstChoice: "Monitor LFTs occasionally" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Adjust if CrCl <30; max sulbactam 4 g" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },

  // ===== CEFTAZIDIME, AVIBACTAM (corrected) =====
  {
    name: "CEFTAZIDIME, AVIBACTAM",
    codes: ["105781"],
    maxDailyDose: "6000 mg/1500 mg IV (2000 mg/500 mg q8h)",
    liver: { safe: true, emoji: "✅", firstChoice: "Low hepatic risk" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Adjust if CrCl <50" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },

  // ===== ATROPINE =====
  {
    name: "ATROPINE",
    codes: ["100225"],
    maxDailyDose: "3 mg/day IV/IM (0.04 mg/kg)",
    liver: { safe: true, emoji: "✅", firstChoice: "Not hepatically cleared" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Tachycardia risk—monitor" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May raise BP slightly" }
  },

  // ===== ATENOLOL =====
  {
    name: "ATENOLOL",
    codes: ["100158","100159","100220","105176","101022","101112","101113","101561","101562","101563","105551","102193","102194","102195","102197","102192"],
    maxDailyDose: "200 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "Not hepatically metabolised" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce if severe CKD" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Bradycardia/AV block risk" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May mask hypoglycemia" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line β-blocker" }
  },

  // ===== ANASTROZOLE =====
  {
    name: "ANASTROZOLE",
    codes: ["103048"],
    maxDailyDose: "1 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution if severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No direct effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "No effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect" }
  },

  // ===== APREMILAST =====
  {
    name: "APREMILAST",
    codes: ["103698","103699"],
    maxDailyDose: "60 mg/day PO (30 mg BID)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce to 30 mg/day if CrCl <30" },
    heart: { safe: true, emoji: "✅", firstChoice: "No effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "No interaction" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },

  // ===== APIXABAN =====
  {
    name: "APIXABAN",
    codes: ["102819","102822","105613","105614","106258","106259","105542","105553","106131","106120","106119","106121"],
    maxDailyDose: "10 mg/day PO (5 mg BID)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid if Child-Pugh C" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Dose-reduce only ESRD/CrCl <15" },
    heart: { safe: true, emoji: "✅", firstChoice: "AF stroke prevention" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },

  // ===== ARIPIPRAZOLE =====
  {
    name: "ARIPIPRAZOLE",
    codes: ["103011","100002","103818","105717","105718","106526","107270","107271","107272","107366","107367","103099","103100","103098","103890","105898","105909","105783","105787","103273","103274","103272","105409"],
    maxDailyDose: "30 mg/day PO (400 mg/month LAI)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor QT in high-risk patients" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor weight & glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct effect" }
  },

  // ===== AXITINIB =====
  {
    name: "AXITINIB",
    codes: ["103858"],
    maxDailyDose: "20 mg/day PO (10 mg BID)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Half dose if Child-Pugh B; avoid C" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment mild-severe" },
    heart: { safe: false, emoji: "⚠", firstChoice: "HTN risk—monitor BP" },
    dm: { safe: true, emoji: "✅", firstChoice: "No effect" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Common adverse event" }
  },

  // ===== AZATHIOPRINE =====
  {
    name: "AZATHIOPRINE",
    codes: ["102970","101126","103861","103863","103862"],
    maxDailyDose: "250 mg/day PO (≈2.5 mg/kg)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Hepatotoxicity—monitor LFTs" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },

  // ===== AZITHROMYCIN =====
  {
    name: "AZITHROMYCIN",
    codes: ["100249","100250","100251","100253","100254","102403","102405","102417","102420","102421","102422","102423","100246","100247","100248","103256","103257","100252","100255","102404","102418","102419","102424"],
    maxDailyDose: "2000 mg/day PO (single 2 g) or 1500 mg total (500 mg ×3)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Rare cholestatic hepatitis—monitor" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation—avoid in high risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },
      // ======= B-SITOSTEROL - مجموعة أكواد =======
    {
        name: "B-SITOSTEROL",
        codes: ['105501', '105502', '105503', '105504', '105403', '106069', '101384', '102999', '101385', '101386', '103656', '103657', '103658', '105206', '105432', '102669', '102668', '102776', '101387', '101388', '101389'],
        maxDailyDose: "2000-4000 mg/day PO max (topical use: unlimited safe doses)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients - no systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients - topical application" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients - wound healing aid" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients - promotes wound healing" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BACLOFEN - مجموعة أكواد =======
    {
        name: "BACLOFEN", 
        codes: ['106099', '102465', '101273'],
        maxDailyDose: "80 mg/day PO max (divided doses)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe with normal hepatic function" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Tizanidine or Cyclobenzaprine (avoid if eGFR <30)" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "No effect on glucose levels" },
        hypertension: { safe: true, emoji: "⚠", firstChoice: "Monitor BP - may cause mild hypotension" }
    },

    // ======= BARICITINIB - مجموعة أكواد =======
    {
        name: "BARICITINIB",
        codes: ['107264', '103584', '106082'],
        maxDailyDose: "4 mg/day PO max (2 mg for high VTE risk)",
        liver: { safe: true, emoji: "⚠", firstChoice: "Monitor LFTs - dose adjust if hepatic impairment" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Tocilizumab or Rituximab (avoid if eGFR <15)" },
        heart: { safe: false, emoji: "⚠", firstChoice: "Monitor MACE risk - use with cardiac caution" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - may improve insulin sensitivity" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No direct effect on blood pressure" }
    },

    // ======= BETAHISTINE DIHYDROCHLORIDE - مجموعة أكواد =======
    {
        name: "BETAHISTINE DIHYDROCHLORIDE",
        codes: ['103053', '103054', '103052', '106240', '106241', '106242', '100288', '105128', '100289', '100293', '100294', '100295', '105785', '105786', '105784', '103636', '103637'],
        maxDailyDose: "48 mg/day PO max (divided in 2-3 doses)",
        liver: { safe: true, emoji: "⚠", firstChoice: "Use caution - hepatic metabolism required" },
        kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "No effect on glucose metabolism" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No significant effect on blood pressure" }
    },

    // ======= BECLOMETHASONE DIPROPIONATE - مجموعة أكواد =======
    {
        name: "BECLOMETHASONE DIPROPIONATE",
        codes: ['102901', '101947', '102734', '102735', '102733', '100504'],
        maxDailyDose: "1600 mcg/day inhaled max (800 mcg BID)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "⚠", firstChoice: "Monitor glucose - minimal systemic effect" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BISOPROLOL FUMARATE - مجموعة أكواد =======
    {
        name: "BISOPROLOL FUMARATE",
        codes: ['100331', '100332', '105132', '105130', '105131', '100391', '100392', '100393', '102491', '102490', '102530', '100540', '100541', '100542', '105802', '102018', '102019', '102020', '102552', '102550', '100543', '102021'],
        maxDailyDose: "20 mg/day PO max (usually 10 mg for heart failure)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal hepatic metabolism" },
        kidney: { safe: true, emoji: "⚠", firstChoice: "Monitor dose in severe CKD - reduce dose by 50%" },
        heart: { safe: true, emoji: "✅", firstChoice: "First choice for heart failure and hypertension" },
        dm: { safe: true, emoji: "⚠", firstChoice: "Monitor glucose - may mask hypoglycemia" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "First-line therapy for hypertension" }
    },

    // ======= BUDESONIDE - مجموعة أكواد =======
    {
        name: "BUDESONIDE",
        codes: ['101813', '101814', '101815', '105873', '103855', '100350', '101901', '106134', '105278', '102154', '102674', '105266'],
        maxDailyDose: "1600 mcg/day inhaled max (nasal: 256 mcg/day)",
        liver: { safe: true, emoji: "⚠", firstChoice: "Use caution - high first-pass metabolism" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "⚠", firstChoice: "Monitor glucose - systemic absorption possible" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No significant effect on blood pressure" }
    },

    // ======= BUMETANIDE - مجموعة أكواد =======
    {
        name: "BUMETANIDE",
        codes: ['100351'],
        maxDailyDose: "10 mg/day PO max (20 mg in severe renal impairment)",
        liver: { safe: false, emoji: "⚠", firstChoice: "Monitor carefully - adjust dose in hepatic impairment" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Furosemide preferred - monitor electrolytes closely" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for heart failure patients" },
        dm: { safe: true, emoji: "⚠", firstChoice: "Monitor glucose - may cause hyperglycemia" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Effective for hypertension with edema" }
    },
    // ======= DEXPANTHENOL - مجموعة أكواد =======
    {
        name: "DEXPANTHENOL",
        codes: ['103324', '100277', '102566', '100539', '101796'],
        maxDailyDose: "Unlimited for topical use (safe for continuous application)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients - minimal absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients - topical application" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients - promotes wound healing" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BASILIXIMAB - مجموعة أكواد =======
    {
        name: "BASILIXIMAB",
        codes: ['103353'],
        maxDailyDose: "40 mg total (20mg x 2 doses, day 0 and day 4)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients - immunosuppressant" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney transplant - indication drug" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "⚠", firstChoice: "Monitor glucose - immunosuppression increases infection risk" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No direct effect on blood pressure" }
    },

    // ======= BEMIPARIN SODIUM - مجموعة أكواد =======
    {
        name: "BEMIPARIN SODIUM",
        codes: ['103251', '103394', '103025'],
        maxDailyDose: "12500 IU/day subcutaneous max (treatment dose)",
        liver: { safe: true, emoji: "⚠", firstChoice: "Monitor in severe hepatic impairment" },
        kidney: { safe: true, emoji: "⚠", firstChoice: "Reduce dose by 25% in severe renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients - anticoagulant indication" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BENZATHINE BENZYLPENICILLIN - مجموعة أكواد =======
    {
        name: "BENZATHINE BENZYLPENICILLIN",
        codes: ['101894'],
        maxDailyDose: "2.4 million units IM single dose max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "⚠", firstChoice: "Adjust dose based on creatinine clearance" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BENZOCAINE + PHENAZONE - مجموعة أكواد =======
    {
        name: "BENZOCAINE + PHENAZONE",
        codes: ['100724', '106308'],
        maxDailyDose: "12 drops per ear/day max (5 days maximum duration)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients - otic use only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BENZYDAMINE HYDROCHLORIDE - مجموعة أكواد =======
    {
        name: "BENZYDAMINE HYDROCHLORIDE",
        codes: ['102269'],
        maxDailyDose: "200 mg/day PO max (topical: unlimited safe doses)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients - topical/oral rinse use" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BETAXOLOL HYDROCHLORIDE - مجموعة أكواد =======
    {
        name: "BETAXOLOL HYDROCHLORIDE",
        codes: ['100308', '101916'],
        maxDailyDose: "1 drop per eye once daily (ophthalmic use only)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption from eye drops" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients - topical ophthalmic use" },
        heart: { safe: true, emoji: "⚠", firstChoice: "Use caution - beta-blocker may affect heart rate minimally" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients - glaucoma indication" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Minimal effect on systemic BP" }
    },

    // ======= BICALUTAMIDE - مجموعة أكواد =======
    {
        name: "BICALUTAMIDE",
        codes: ['103573'],
        maxDailyDose: "50 mg/day PO (up to 150mg studied but not recommended)",
        liver: { safe: false, emoji: "❌", firstChoice: "Abiraterone or Enzalutamide (monitor LFTs closely)" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients - no dose adjustment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "⚠", firstChoice: "Monitor glucose - may improve insulin sensitivity" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No direct effect on blood pressure" }
    },

    // ======= BILASTINE - مجموعة أكواد =======
    {
        name: "BILASTINE",
        codes: ['106114', '103051'],
        maxDailyDose: "20 mg/day PO max (up to 80mg studied safely)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - not metabolized by liver" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients - renal elimination" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients - no cardiac effects" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BIMATOPROST - مجموعة أكواد =======
    {
        name: "BIMATOPROST",
        codes: ['102763', '101350', '100961', '105714'],
        maxDailyDose: "1 drop per eye once daily evening max (not more frequent)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients - topical ophthalmic use" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients with glaucoma" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BISACODYL - مجموعة أكواد =======
    {
        name: "BISACODYL",
        codes: ['100712', '105702', '106565', '105632', '101247', '105849'],
        maxDailyDose: "15 mg/day PO max (30mg for bowel prep only)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "⚠", firstChoice: "Monitor electrolytes - may cause hypokalemia" },
        heart: { safe: true, emoji: "⚠", firstChoice: "Monitor if on cardiac glycosides - hypokalemia risk" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No direct effect on blood pressure" }
    },

    // ======= BISMUTH SUBCITRATE - مجموعة أكواد =======
    {
        name: "BISMUTH SUBCITRATE",
        codes: ['100598'],
        maxDailyDose: "480 mg/day PO max (120mg QID with meals)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Omeprazole + Antibiotics (avoid bismuth in renal impairment)" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= CALCIUM - مجموعة أكواد =======
    {
        name: "CALCIUM",
        codes: ['100371', '105367', '105500', '100607', '101137', '107406', '102614', '509391', '102013'],
        maxDailyDose: "2500 mg/day PO max (ages 19-50), 2000 mg/day (>50 years)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Magnesium or Phosphate binders (risk of stones)" },
        heart: { safe: true, emoji: "⚠", firstChoice: "Monitor for cardiovascular risk with high doses" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - may improve insulin sensitivity" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce blood pressure" }
    },

// ======= AMLODIPINE/VALSARTAN/HCTZ - مجموعة أكواد =======
{
    name: "AMLODIPINE/VALSARTAN/HCTZ",
    codes: ['100808', '100809', '100810', '100811', '100812', '105078', '105079', '105080', '105076', '105077', '106275', '106276', '106273', '106274'],
    maxDailyDose: "10mg/320mg/25mg daily (max triple combination)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor - amlodipine component needs dose reduction in cirrhosis" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor electrolytes and renal function closely" },
    heart: { safe: true, emoji: "✅", firstChoice: "Excellent cardiovascular protection with volume control" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - HCTZ component may worsen hyperglycemia" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Maximum BP control - triple antihypertensive mechanism" }
},
    // ======= BACITRACIN + NEOMYCIN - مجموعة أكواد =======
    {
        name: "BACITRACIN + NEOMYCIN",
        codes: ['100266', '100267'],
        maxDailyDose: "8 grams topical max (apply 1-3 times daily only)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption from topical use" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Mupirocin or Fusidic acid (avoid neomycin in renal disease)" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients - topical use" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BOSENTAN - مجموعة أكواد =======
    {
        name: "BOSENTAN",
        codes: ['103108', '103539'],
        maxDailyDose: "250 mg/day PO max (125mg BID)",
        liver: { safe: false, emoji: "❌", firstChoice: "Sildenafil or Tadalafil (monitor LFTs monthly)" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients - no dose adjustment needed" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients - indicated for PAH" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "⚠", firstChoice: "Monitor BP - may cause hypotension" }
    },

    // ======= BOTULINUM TOXIN - مجموعة أكواد =======
    {
        name: "BOTULINUM TOXIN",
        codes: ['103003', '103753'],
        maxDailyDose: "400 Units per session max (up to 800U studied safely)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BREXPIPRAZOLE - مجموعة أكواد =======
    {
        name: "BREXPIPRAZOLE",
        codes: ['103598', '103599', '103600', '103597'],
        maxDailyDose: "4 mg/day PO max (schizophrenia), 3 mg/day (depression)",
        liver: { safe: true, emoji: "⚠", firstChoice: "Reduce dose by 50% in moderate-severe hepatic impairment" },
        kidney: { safe: true, emoji: "⚠", firstChoice: "Reduce dose by 50% in moderate-severe renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "⚠", firstChoice: "Monitor glucose - may cause weight gain and metabolic changes" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No significant effect on blood pressure" }
    },

    // ======= BRIMONIDINE TARTRATE - مجموعة أكواد =======
    {
        name: "BRIMONIDINE TARTRATE",
        codes: ['100070', '100342', '100343', '102878', '107223', '106006', '100535'],
        maxDailyDose: "1 drop per eye 3 times daily max (every 8 hours)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption from eye drops" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients - topical ophthalmic use" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients with glaucoma" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Minimal effect on systemic BP" }
    },

    // ======= BRINZOLAMIDE - مجموعة أكواد =======
    {
        name: "BRINZOLAMIDE",
        codes: ['100256', '105060', '100245'],
        maxDailyDose: "1 drop per eye 3 times daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients - topical use" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Timolol or Latanoprost (avoid if CrCl <30 ml/min)" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients with glaucoma" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BROMFENAC SODIUM - مجموعة أكواد =======
    {
        name: "BROMFENAC SODIUM",
        codes: ['103149'],
        maxDailyDose: "1 drop per eye once daily max (post-surgical use only)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption from eye drops" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients - topical ophthalmic use" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BROMHEXINE - مجموعة أكواد =======
    {
        name: "BROMHEXINE",
        codes: ['100333', '100821', '100820', '101473', '101816', '101937', '102098'],
        maxDailyDose: "64 mg/day PO max (16mg QID or 8mg TID)",
        liver: { safe: true, emoji: "⚠", firstChoice: "Use caution in severe hepatic impairment" },
        kidney: { safe: true, emoji: "⚠", firstChoice: "Use caution in severe renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BROMOCRIPTINE MESILATE - مجموعة أكواد =======
    {
        name: "BROMOCRIPTINE MESILATE",
        codes: ['101716'],
        maxDailyDose: "100 mg/day PO max (varies by indication)",
        liver: { safe: true, emoji: "⚠", firstChoice: "Monitor hepatic function - ergot derivative" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "❌", firstChoice: "Cabergoline preferred (risk of cardiac fibrosis)" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - actually used for diabetes treatment" },
        hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP - may cause hypotension or hypertension" }
    },
    // ======= CABERGOLINE - مجموعة أكواد =======
    {
        name: "CABERGOLINE",
        codes: ['100700', '100701', '106312', '106313', '105070', '105071'],
        maxDailyDose: "3.5 mg/week PO max (divided twice weekly, up to 7mg/week exceptional cases)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for valvular heart disease - echocardiogram required" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "⚠", firstChoice: "Monitor BP - may cause hypotension initially" }
    },

    // ======= CALCIPOTRIOL - مجموعة أكواد =======
    {
        name: "CALCIPOTRIOL",
        codes: ['100581', '100582', '102363', '103797', '100580', '102788', '105839', '102937'],
        maxDailyDose: "15 grams/day topical max (100g/week maximum)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption from topical use" },
        kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor calcium levels - risk of hypercalcemia" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= CALCITONIN (SALMON) - مجموعة أكواد =======
    {
        name: "CALCITONIN (SALMON)",
        codes: ['101424'],
        maxDailyDose: "400 IU every 6-8 hours max (1600 IU/day max for hypercalcemia)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "⚠", firstChoice: "Reduce dose in end-stage renal failure" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BETA GLUCAN - مجموعة أكواد =======
    {
        name: "BETA GLUCAN",
        codes: ['106344', '106410', '103761', '107415', '102623', '105034', '102928'],
        maxDailyDose: "500 mg/day PO max (yeast-derived, for immune support)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - may help improve glucose control" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BACOPA MONNIERA - مجموعة أكواد =======
    {
        name: "BACOPA MONNIERA",
        codes: ['105297'],
        maxDailyDose: "600 mg/day PO max (standardized extract)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BIOTIN - مجموعة أكواد =======
    {
        name: "BIOTIN",
        codes: ['105436', '102664', '107551', '107420', '105389', '106911', '107476', '508723', '107472', '107606', '102354', '106457', '107483', '107408', '105107', '105400', '106940', '102479', '107322'],
        maxDailyDose: "300 mg/day PO max (no established upper limit - very safe)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients - water-soluble vitamin" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients - may improve glucose metabolism" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= CALAMINE - مجموعة أكواد =======
    {
        name: "CALAMINE",
        codes: ['102907', '103417', '101220', '101221'],
        maxDailyDose: "Apply 4 times daily max (unlimited safe topical doses)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - no systemic absorption from topical use" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients - topical application only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

    // ======= BRAN FIBER - مجموعة أكواد =======
    {
        name: "BRAN FIBER",
        codes: ['100341'],
        maxDailyDose: "30 grams/day PO max (25-38g daily fiber recommended)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - may help reduce cholesterol" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - helps improve glucose control" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - may help reduce blood pressure" }
    },
    // ======= ORAL REHYDRATION SALTS (ORS) - مجموعة أكواد =======
    {
        name: "ORAL REHYDRATION SALTS (ORS)",
        codes: ['100257', '107269', '106500', '107470', '101649'],
        maxDailyDose: "4000 mL/day PO max (adults), 75 mL/kg/day (pediatric)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "⚠", firstChoice: "Use caution in severe renal impairment - monitor electrolytes" },
        heart: { safe: false, emoji: "⚠", firstChoice: "Avoid in heart failure with fluid restriction" },
        dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - contains dextrose, may affect blood sugar" },
        hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP - high sodium content may increase blood pressure" }
    },
{
    name: "CALCIUM & MULTIVITAMIN",
    codes: ['105795','101498'],
    maxDailyDose: "2500 mg calcium/day total (adult UL)",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic restriction" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Limit ≤2000 mg/day if CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral cardiac profile" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP impact" }
},

{
    name: "CALCIUM & VITAMIN C",
    codes: ['100359','100372','105473','103756'],
    maxDailyDose: "2500 mg calcium + 2000 mg vitamin C/day (ULs)",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic restriction" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor stones risk, limit if CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral cardiac profile" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP impact" }
},

{
    name: "CALCIUM & VITAMIN D",
    codes: ['107487','100034','100105','105371','100171','100184','100313','106349','107401','107506','100366','100367','100368','100369','107466','102942','100375','101024','105335','101180','103796','107416','101661','101663','107101','102000','102014','102328','105456','107513'],
    maxDailyDose: "2500 mg calcium + 4000 IU vitamin D/day (ULs)",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic restriction" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Limit calcium ≤2000 mg/day in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral cardiac profile" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP impact" }
},

{
    name: "CALCIUM & VITAMIN D (KIDS)",
    codes: ['103298','105363','107085','107566','107573','105288','105065','101740','107073','508007','105392'],
    maxDailyDose: "1000 mg calcium + 2500 IU vitamin D/day (child UL 4–8 y)",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic restriction" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Use only if Ca²⁺ labs ok" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral cardiac profile" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP impact" }
},

{
    name: "CALCIUM (KIDS)",
    codes: ['103819','101077','105222','101659'],
    maxDailyDose: "1000 mg calcium/day total (child UL)",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic restriction" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid >1000 mg if CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral cardiac profile" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP impact" }
},

{
    name: "CALCIUM DOBESILATE MONOHYDRATE",
    codes: ['100705'],
    maxDailyDose: "1500 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment needed" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Minimal renal clearance" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac issues" },
    dm: { safe: true, emoji: "✅", firstChoice: "Often used for diabetic micro-angiopathy" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},

{
    name: "CALCIUM POLYSTYRENE SULPHONATE",
    codes: ['100370','103903'],
    maxDailyDose: "40 g resin/day PO or PR",
    liver: { safe: true, emoji: "✅", firstChoice: "Not hepatically cleared" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Indicated for hyperkalemia in CKD" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor arrhythmia risk from hypokalemia" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP impact" }
},

    // ======= BETAMETHASONE - مجموعة أكواد =======
    {
        name: "BETAMETHASONE",
        codes: ['100303', '100304', '100614', '100615', '100616', '100683', '100684', '101990', '100681', '100298', '100279', '100280', '103590', '100290', '100296', '100297', '100299', '100301', '100302', '100307', '100682', '102527', '102528', '101934', '101935', '103677', '102574', '101630', '100305', '100306'],
        maxDailyDose: "50 grams/week topical max (7.2mg/day PO for systemic use)",
        liver: { safe: true, emoji: "⚠", firstChoice: "Use caution in hepatic impairment - prefer topical forms" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "⚠", firstChoice: "Monitor fluid retention and electrolytes with systemic use" },
        dm: { safe: false, emoji: "❌", firstChoice: "Monitor glucose closely - causes hyperglycemia" },
        hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP - may increase blood pressure" }
    },

    // ======= BROMPHENIRAMINE - مجموعة أكواد =======
    {
        name: "BROMPHENIRAMINE",
        codes: ['100676'],
        maxDailyDose: "24 mg/day PO max (4mg every 4 hours, max 6 doses)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "⚠", firstChoice: "Use caution - anticholinergic effects may affect heart rate" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No significant effect on blood pressure" }
    },
{
    name: "CANAGLIFLOZIN",
    codes: ['103114'],
    maxDailyDose: "300 mg/day PO",
    liver:  { safe: true,  emoji: "✅", firstChoice: "No adjustment needed" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid if eGFR <30" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "CV benefit shown" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "Antidiabetic agent" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "May lower BP" }
},

{
    name: "CANAKINUMAB",
    codes: ['103482'],
    maxDailyDose: "150 mg SC every 4 weeks ≈ 5.4 mg/day",
    liver:  { safe: true,  emoji: "✅", firstChoice: "No dose limits" },
    kidney: { safe: true,  emoji: "✅", firstChoice: "No adjustment" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "Neutral CV profile" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "No BP effect" }
},

{
    name: "CANDESARTAN CILEXETIL",
    codes: ['100217','100218','100334','100336','105127','105126'],
    maxDailyDose: "32 mg/day PO",
    liver:  { safe: false, emoji: "⚠", firstChoice: "Start 4 mg if severe hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Start 4 mg if CrCl <30" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "HF mortality benefit" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "Renoprotective" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "First-line ARB" }
},

{
    name: "CANDESARTAN CILEXETIL + HYDROCHLOROTHIAZIDE",
    codes: ['100219','100335','100337','107435'],
    maxDailyDose: "Candesartan 32 mg + HCTZ 25 mg/day",
    liver:  { safe: false, emoji: "⚠", firstChoice: "Use lower start if hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor eGFR & electrolytes" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "Useful in HTN with HF" },
    dm:     { safe: false, emoji: "⚠", firstChoice: "HCTZ may raise glucose" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Add-on diuretic effect" }
},

{
    name: "CAPECITABINE",
    codes: ['105630','105747','102963'],
    maxDailyDose: "≤ 2500 mg/m²/day (≈ 4500 mg/day for 1.8 m²)",
    liver:  { safe: false, emoji: "⚠", firstChoice: "Reduce if hepatic dysfunction" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose↓ if CrCl <50" },
    heart:  { safe: false, emoji: "⚠", firstChoice: "Monitor for ischemia" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "No direct effect" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CAPTOPRIL",
    codes: ['100006','100007','100386','100387','100388','100389'],
    maxDailyDose: "450 mg/day PO",
    liver:  { safe: true,  emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose↓ if CrCl <40" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "HF & post-MI benefit" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "Renal-protective" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "First-line ACEI" }
},

{
    name: "CARBAMAZEPINE",
    codes: ['102185','100390','102186','102187','102188'],
    maxDailyDose: "1200 mg/day PO",
    liver:  { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs – hepatotoxic risk" },
    kidney: { safe: true,  emoji: "✅", firstChoice: "No renal adjustment" },
    heart:  { safe: false, emoji: "⚠", firstChoice: "ECG if cardiac history" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CARBIDOPA-LEVODOPA",
    codes: ['106379','106380','106381','106382','105636','106384','102071'],
    maxDailyDose: "Levodopa 2000 mg + Carbidopa 200 mg/day",
    liver:  { safe: true,  emoji: "✅", firstChoice: "No hepatic adjustment" },
    kidney: { safe: true,  emoji: "✅", firstChoice: "No dose change" },
    heart:  { safe: false, emoji: "⚠", firstChoice: "Watch for arrhythmia & hypotension" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension:{ safe: false, emoji: "⚠", firstChoice: "Orthostatic hypotension risk" }
},

{
    name: "CARBIMAZOLE",
    codes: ['106233','101516','105840','105841','105842','105843'],
    maxDailyDose: "60 mg/day PO",
    liver:  { safe: false, emoji: "⚠", firstChoice: "Risk of cholestatic jaundice" },
    kidney: { safe: true,  emoji: "✅", firstChoice: "No renal adjustment" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "Neutral CV profile" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},
{
    name: "CARVEDILOL",
    codes: ['102717','102718','102716','100673','105518','105519','105516','105517','101904','101905','101906'],
    maxDailyDose: "100 mg/day PO max",
    liver:  { safe: false, emoji: "⚠", firstChoice: "Reduce start-dose if hepatic impairment" },
    kidney: { safe: true,  emoji: "✅", firstChoice: "No renal adjustment" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "HF mortality benefit" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "First-line β-blocker" }
},

{
    name: "CASPOFUNGIN",
    codes: ['103613'],
    maxDailyDose: "70 mg/day IV",
    liver:  { safe: false, emoji: "⚠", firstChoice: "Cut to 35 mg if Child-Pugh 7-9" },
    kidney: { safe: true,  emoji: "✅", firstChoice: "No renal adjustment" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "Neutral CV" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "No effect" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CEFADROXIL",
    codes: ['100324','100326','100405','100407','100408','101982','100323','100325','100406','100409','102463','101981'],
    maxDailyDose: "4 g/day PO",
    liver:  { safe: true,  emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Adjust if CrCl ≤50" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "Neutral CV" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CEFDINIR",
    codes: ['105087','105811','101624','101625','103489','103488','107624','101623','106495','103490','107623'],
    maxDailyDose: "600 mg/day PO",
    liver:  { safe: true,  emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Max 300 mg/day if CrCl <30" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "Neutral CV" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CEFIXIME",
    codes: ['100412','101361','102149','107642','100300','100411','100413','100414','101359','101360','107621','102150','102151','103047'],
    maxDailyDose: "400 mg/day PO",
    liver:  { safe: true,  emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose↓ if CrCl ≤60" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "Neutral CV" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CEFTRIAXONE",
    codes: ['100772','100773','100774','100775','101411','101412','101413','101414','101970','101996','107201','102235','102236','102237','102238'],
    maxDailyDose: "4 g/day IV/IM",
    liver:  { safe: true,  emoji: "✅", firstChoice: "Biliary sludge rare" },
    kidney: { safe: true,  emoji: "✅", firstChoice: "No renal change" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "Neutral CV" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CELECOXIB",
    codes: ['103688','100422','100423','105279','105379','105378','105629','107029','107065','107252','106501','106502'],
    maxDailyDose: "400 mg/day PO",
    liver:  { safe: false, emoji: "⚠", firstChoice: "Avoid if severe hepatic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid severe CKD" },
    heart:  { safe: false, emoji: "⚠", firstChoice: "↑CV risk—use lowest dose" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension:{ safe: false, emoji: "⚠", firstChoice: "May raise BP" }
},

{
    name: "CEPHALEXIN",
    codes: ['105536','100428','100431','101185','102460','102461','101657','100427','100429','100430','101186','101265','102462','103687','101656','101658'],
    maxDailyDose: "4 g/day PO",
    liver:  { safe: true,  emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Adjust if CrCl <50" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "Neutral CV" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},
{
    name: "CALCIUM",
    codes: ['105795','101498','100359','100372','105473','103756','107487','100034','100105','105371','100171','100184','100313','106349','107401','107506','100366','100367','100368','100369','107466','102942','100375','101024','105335','101180','103796','107416','101661','101663','107101','102000','102014','102328','105456','107513','103298','105363','107085','107566','107573','105288','105065','101740','107073','508007','105392','103819','101077','105222','101659'],
    maxDailyDose: "2500 mg/day PO total",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic limits" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Watch for stones if CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Beneficial for CV health" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May lower BP slightly" }
},

{
    name: "CALCIUM DOBESILATE",
    codes: ['100705'],
    maxDailyDose: "1500 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce if CrCl <30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Vascular protective" },
    dm: { safe: true, emoji: "✅", firstChoice: "May benefit diabetic vasculopathy" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CALCIUM POLYSTYRENE SULPHONATE",
    codes: ['100370','103903'],
    maxDailyDose: "60 g/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Used for hyperkalemia in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Reduces K+ arrhythmia risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CEFACLOR",
    codes: ['100321','100400','100401','100512','100514','100926','101391','101392','102158','102159','102160','100322','100402','100403','100404','100513','100515','100925','100927','102862','102161','102162'],
    maxDailyDose: "4 g/day PO max",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose↓ if CrCl <50" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CEFOTAXIME",
    codes: ['107227','107228','107200'],
    maxDailyDose: "12 g/day IV max",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose↓ if CrCl <20" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CEFPODOXIME",
    codes: ['100416','101645','100415'],
    maxDailyDose: "800 mg/day PO max",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Adjust if CrCl <30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},
{
    name: "DULOXETINE",
    codes: ['100576','103551','103552','105719','105720','106466','106467'],
    maxDailyDose: "120 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid in severe hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "CrCl <30 → max 60 mg" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor BP & QT" },
    dm: { safe: true, emoji: "✅", firstChoice: "Improves neuropathic pain" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May ↑ BP" }
},
{
    name: "DUPILUMAB",
    codes: ['106070','103618','106552','106551'],
    maxDailyDose: "600 mg load → 300 mg SC Q2W (≈150 mg/day max)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiotoxicity" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DUTASTERIDE",
    codes: ['100244'],
    maxDailyDose: "0.5 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution – hepatic metabolism" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No direct effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DYDROGESTERONE",
    codes: ['100715','105530'],
    maxDailyDose: "30 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Low thrombosis risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Monitor glucose in GDM" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "ECHINACEA",
    codes: ['101124','107283','106433','100726','103117','105066'],
    maxDailyDose: "900 mg/day dried extract",
    liver: { safe: true, emoji: "✅", firstChoice: "Rare hepatotoxicity" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No data for adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "ECONAZOLE",
    codes: ['101733','101048','101057'],
    maxDailyDose: "Topical use only – NA systemically",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "ECTOIN",
    codes: ['103006'],
    maxDailyDose: "OPH sol 1 drop QID",
    liver: { safe: true, emoji: "✅", firstChoice: "No systemic exposure" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No systemic exposure" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "EDOXABAN",
    codes: ['105208','105209','105210'],
    maxDailyDose: "60 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid moderate-severe impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "CrCl 15-50 → 30 mg/day" },
    heart: { safe: true, emoji: "✅", firstChoice: "Stroke prevention in AF" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Monitor BP as usual" }
},
{
    name: "ELDERBERRY",
    codes: ['105229','105886','107218','107217','107511'],
    maxDailyDose: "1500 mg/day Sambucus extract",
    liver: { safe: true, emoji: "✅", firstChoice: "Rare reports of LFT rise" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No data for adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "May lower glucose slightly" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "ATOGEPANT",
    codes: ['106550','106549'],
    maxDailyDose: "60 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid Child-Pugh C" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "eGFR <30 → 50 mg/day" },
    heart: { safe: true, emoji: "✅", firstChoice: "No QT effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "GALCANEZUMAB",
    codes: ['105485'],
    maxDailyDose: "240 mg SC load → 120 mg monthly (≈4 mg/day)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiotoxicity" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "ELETRIPTAN",
    codes: ['101874','101875'],
    maxDailyDose: "80 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contra in ischemic heart disease" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May acutely ↑ BP" }
},
{
    name: "RIMEGEPANT",
    codes: ['106360'],
    maxDailyDose: "75 mg/day ODT",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid Child-Pugh C" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "eGFR <15 not recommended" },
    heart: { safe: true, emoji: "✅", firstChoice: "No QT effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "UBROGEPANT",
    codes: ['106071'],
    maxDailyDose: "200 mg/day PO (2 × 100 mg doses)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "eGFR <15 not recommended" },
    heart: { safe: true, emoji: "✅", firstChoice: "No QT effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "ELTROMBOPAG",
    codes: ['103670','103157'],
    maxDailyDose: "75 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Adjust Child-Pugh B/C" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "EMPAGLIFLOZIN",
    codes: ['107287','107288','103110','103111'],
    maxDailyDose: "25 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "Use with caution cirrhosis" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "eGFR <30 avoid" },
    heart: { safe: true, emoji: "✅", firstChoice: "HF benefit" },
    dm: { safe: true, emoji: "✅", firstChoice: "Improves glycemic control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Slight BP reduction" }
},
{
    name: "ENALAPRIL",
    codes: ['100136','100137','100138','105649','105670','101883','101884','101885','101922','101923','101924'],
    maxDailyDose: "40 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "CrCl <30 → max 20 mg" },
    heart: { safe: true, emoji: "✅", firstChoice: "First-line in HFrEF" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective in DM" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line agent" }
},
{
    name: "ENALAPRIL_HCT",
    codes: ['100523'],
    maxDailyDose: "40 mg ENA + 50 mg HCT/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe hepatic disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "CrCl <30: avoid combo" },
    heart: { safe: true, emoji: "✅", firstChoice: "Useful in resistant HTN" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose (HCT)" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Potent BP lowering" }
},
{
    name: "DIMETHYL FUMARATE",
    codes: ['105739','105740','105675','106075','103476','103285'],
    maxDailyDose: "480 mg/day PO (240 mg BID)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiotoxicity" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DOCUSATE_SODIUM",
    codes: ['100639','102357'],
    maxDailyDose: "500 mg/day PO (stool softener)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Sugar-free forms for DM" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DEXPANTHENOL",
    codes: ['105181','105182','105216'],
    maxDailyDose: "Topical – NA systemic",
    liver: { safe: true, emoji: "✅", firstChoice: "No systemic exposure" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No systemic exposure" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DALFAMPRIDINE",
    codes: ['103785'],
    maxDailyDose: "20 mg/day PO (10 mg BID)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contra if CrCl ≤50" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Seizure risk ↑ with drugs that lower threshold" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DEXCHLORPHENIRAMINE",
    codes: ['101754'],
    maxDailyDose: "16 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution hepatic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "CrCl <30 adjust" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Sugar-free syrup for DM" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Anticholinergic may raise BP" }
},
{
    name: "DIMENHYDRINATE",
    codes: ['100689'],
    maxDailyDose: "400 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Caution hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Low QT risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DIMETHINDENE",
    codes: ['100848','100847','100849'],
    maxDailyDose: "24 mg/day PO (8 mg TID) or topical ad lib",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Minimal cardiac risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DIGESTIVE_ENZYMES",
    codes: ['102442'],
    maxDailyDose: "Pancreatin – as directed (≤25000 IU lipase/meal)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "SODIUM_PHOSPHATE_ENEMA",
    codes: ['107243','107233','103685','107331','107332','100892','100893','107232','102839','107330'],
    maxDailyDose: "1 enema/24 h (133 mL = 19 g NaPO4)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Risk of phosphate nephropathy" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor electrolytes in HF" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "High Na+ load – caution" }
},
{
    name: "SUCRALOSE",
    codes: ['100669'],
    maxDailyDose: "15 mg/kg/day ADI (≈1000 mg/70 kg)",
    liver: { safe: true, emoji: "✅", firstChoice: "No metabolism" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Renally excreted unchanged" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "No effect on glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DILOXANIDE",
    codes: ['100941'],
    maxDailyDose: "1500 mg/day PO (500 mg TID)",
    liver: { safe: true, emoji: "✅", firstChoice: "Limited systemic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DROFENINE",
    codes: ['102105','102106'],
    maxDailyDose: "400 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Use caution severe CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},

{
    name: "CEFPROZIL",
    codes: ['102865','102867','102866'],
    maxDailyDose: "1 g/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose↓ if CrCl <30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CEFRADINE",
    codes: ['100417','100789'],
    maxDailyDose: "4 g/day PO max",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose↓ if CrCl <50" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CEFUROXIME",
    codes: ['107194','107198','102406','102372','102408','102410','102522','100418','100419','100420','100421','100595','100596','105029','102258','102386','102387','102409','102411','102415','102416'],
    maxDailyDose: "6 g/day IV max (3 g/day PO)",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose↓ if CrCl <20" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CETRORELIX",
    codes: ['100439'],
    maxDailyDose: "3 mg/day SC max",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CETIRIZINE",
    codes: ['100482','100438','100488','100873','101964','102396','102448','100205','105074','100437','100874','105433','105726','102394','102395','102447'],
    maxDailyDose: "10 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose if hepatic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose 5 mg if CrCl <31" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CHARCOAL",
    codes: ['100185','100790','105494','106307','101370'],
    maxDailyDose: "200 g/day PO max (acute)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CHLORAMPHENICOL",
    codes: ['101907','101666','101909','106017','103720','101908'],
    maxDailyDose: "4 g/day IV (topical no limit)",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid—hepatotoxic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor levels if CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CHORIOGONADOTROPIN ALFA",
    codes: ['101678'],
    maxDailyDose: "250 mcg SC single dose",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for OHSS" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP—OHSS risk" }
},

{
    name: "CHORIONIC GONADOTROPIN",
    codes: ['100449','105626','102519','102468'],
    maxDailyDose: "10000 IU IM single dose",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for fluid retention" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP—fluid retention" }
},

{
    name: "CICLESONIDE",
    codes: ['100071','100072','100073'],
    maxDailyDose: "320 mcg/day inhaled",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Minimal CV effect" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose—steroid" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Minimal BP effect" }
},

{
    name: "CICLOSPORIN",
    codes: ['101998','101997','105452','103399','101999'],
    maxDailyDose: "15 mg/kg/day PO max (≈1050 mg/day for 70 kg)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs—hepatotoxic" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Nephrotoxic—monitor CrCl closely" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Hypertension risk" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Hyperglycemia risk" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "HTN in 50%—monitor BP" }
},

{
    name: "CIMETIDINE",
    codes: ['100453'],
    maxDailyDose: "2400 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in hepatic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose↓ if CrCl <50" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CINACALCET",
    codes: ['105861','103592','104062','107362','104063','103530','103529','102745'],
    maxDailyDose: "360 mg/day PO max",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose if hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CINNARIZINE",
    codes: ['106547','102139'],
    maxDailyDose: "225 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May lower BP" }
},

{
    name: "CIPROFLOXACIN",
    codes: ['100460','100463','101631','105652','100258','100451','100457','100458','100459','100461','100462','100464','100465','100466','100467','100468','100469','100470','100471','106230','103225','106229','100472','100473','100474','100475','100476','100477','100478','100479','100480','100481','100754','100755','100756','100901','100902','105177','101826','101827','107241','107622','102007','102008'],
    maxDailyDose: "1500 mg/day PO (750 mg BID)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs—rare hepatotoxicity" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose↓ if CrCl <30" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation—avoid if QTc >450" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Hypo/hyperglycemia risk" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CLADRIBINE",
    codes: ['103840'],
    maxDailyDose: "20 mg/day PO max (cycle-dependent)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated if severe hepatic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose↓ if CrCl <60" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "No direct glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CLARITHROMYCIN",
    codes: ['101197','100489','100490','100493','105666','100494','100495','100496','100500','100761','100762','100784','101198','101199','101201','101200','107434','101202','101203','102471','102523'],
    maxDailyDose: "2 g/day PO (1g BID severe infections)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs—hepatotoxic risk" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose↓ if CrCl <30" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CLEMASTINE",
    codes: ['102182'],
    maxDailyDose: "8.04 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce in hepatic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Caution if severe CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CLINDAMYCIN",
    codes: ['102613','106496','100591','102874','100589','100590','105604','107368','107369','105667','100588','107458'],
    maxDailyDose: "4.8 g/day IV (1.8 g/day PO)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs—hepatotoxic risk" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CLOBETASOL",
    codes: ['103160','103161','100633','100634','100635','100959','100960','107549','102532'],
    maxDailyDose: "50 g/week topical max",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal issues" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor BP if extensive use" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose—steroid" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP—steroid effect" }
},

{
    name: "CLOMIFENE",
    codes: ['100511','105855'],
    maxDailyDose: "250 mg/day PO max",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated if hepatic disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP—ovarian hyperstimulation" }
},

{
    name: "CLOMIPRAMINE",
    codes: ['100126','100127','106016','107356','106038'],
    maxDailyDose: "300 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose if hepatic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor if severe CKD" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated if recent MI" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose—may affect" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Orthostatic hypotension risk" }
},

{
    name: "CLOPIDOGREL",
    codes: ['103045','105217','102792','102697','106525','102886','101723','105623','105515','105514','101751','105833'],
    maxDailyDose: "150 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid if severe hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "CV protective" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CLOTRIMAZOLE",
    codes: ['100383','100627','100939','101668','100384','100628','100381','100382','100385','100516'],
    maxDailyDose: "No systemic limit (topical only)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal issues" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "COLCHICINE",
    codes: ['100533'],
    maxDailyDose: "2.4 mg/day PO max",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose if hepatic" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Max 0.6 mg if CrCl <30" },
    heart: { safe: true, emoji: "✅", firstChoice: "CV protective in pericarditis" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CHLOROQUINE",
    codes: ['103731','103732','105628','101892'],
    maxDailyDose: "1 g salt (600 mg base)/day PO",
    liver:  { safe: false, emoji: "⚠", firstChoice: "Avoid in severe hepatic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Caution CKD" },
    heart:  { safe: false, emoji: "⚠", firstChoice: "QT prolongation risk" },
    dm:     { safe: false, emoji: "⚠", firstChoice: "Monitor glucose—hypo risk" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CHLORPHENIRAMINE",
    codes: ['100068','100128','100447','101085','105556','100446','101084','105555','100448','100346'],
    maxDailyDose: "24 mg/day PO",
    liver:  { safe: false, emoji: "⚠", firstChoice: "Reduce in hepatic disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Caution severe CKD" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "Neutral CV" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension:{ safe: false, emoji: "⚠", firstChoice: "May raise BP if decongestant combo" }
},

{
    name: "CITALOPRAM",
    codes: ['100456','100483','100484','100485','100486','100487','101316'],
    maxDailyDose: "40 mg/day PO",
    liver:  { safe: false, emoji: "⚠", firstChoice: "Max 20 mg if hepatic" },
    kidney: { safe: true,  emoji: "✅", firstChoice: "No renal change" },
    heart:  { safe: false, emoji: "⚠", firstChoice: "QTc prolongation >40 mg" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    name: "CARBOCYSTEINE",
    codes: ['101898','101899','101900'],
    maxDailyDose: "2250 mg/day PO",
    liver:  { safe: true,  emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: true,  emoji: "✅", firstChoice: "No adjustment" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "Neutral CV profile" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},
{
    // 1️⃣ CAT’S CLAW BARK EXTRACT
    name: "CAT'S CLAW BARK EXTRACT",
    codes: ['102141'],
    maxDailyDose: "300 mg/day PO total",       // WHO & clinical trials 100 mg TID ≈ 300 mg/day
    liver:  { safe: false, emoji: "⚠", firstChoice: "Avoid in severe hepatic disease" },
    kidney: { safe: true,  emoji: "✅", firstChoice: "No renal adjustment" },
    heart:  { safe: true,  emoji: "✅", firstChoice: "Neutral CV" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    // 2️⃣ CHEMICAL ORAL PRODUCT (مثال: Gelclair® مركّز فموي)
    name: "CHEMICAL ORAL PRODUCT",
    codes: ['103593','101642','102899'],
    maxDailyDose: "45 mL/day oral rinse (15 mL TID)",   // بناء على تعليمات الاستخدام المعتادة
    liver:  { safe: true, emoji: "✅", firstChoice: "No systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart:  { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm:     { safe: true, emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    // 3️⃣ CHEMICAL TEETHING GEL
    name: "CHEMICAL TEETHING GEL",
    codes: ['100617','105867'],
    maxDailyDose: "6 applications/day topical max",     // تعليمات الشركة المُصنّعة
    liver:  { safe: true, emoji: "✅", firstChoice: "Minimal systemic exposure" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal concerns" },
    heart:  { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm:     { safe: true, emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    // 4️⃣ CONTRACEPTIVE VAGINAL (Neosampoon)
    name: "CONTRACEPTIVE VAGINAL",
    codes: ['101514'],
    maxDailyDose: "1 tablet/day intravaginal",          // وسيلة منع حمل موضعية
    liver:  { safe: true, emoji: "✅", firstChoice: "Negligible systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart:  { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm:     { safe: true, emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

{
    // 5️⃣ CO-DERGONINE MESYLATE (HYDERGINE)
    name: "CO-DERGONINE MESYLATE",
    codes: ['101098'],
    maxDailyDose: "9 mg/day PO",                        // جرعة دراسات الذاكرة
    liver:  { safe: false, emoji: "⚠", firstChoice: "Use caution—hepatic metabolism" },
    kidney: { safe: true,  emoji: "✅", firstChoice: "No renal adjustment" },
    heart:  { safe: false, emoji: "⚠", firstChoice: "Monitor BP—orthostatic risk" },
    dm:     { safe: true,  emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension:{ safe: false, emoji: "⚠", firstChoice: "May lower BP—monitor" }
},

{
    // 6️⃣ CORN & WART REMOVER CREAM (Podophyllotoxin 0.5 %)
    name: "CORN & WART REMOVER-CREAM",
    codes: ['102133','103427'],
    maxDailyDose: "0.5 g/day topical",                  // بحد أقصاه 10 cm² من الجلد
    liver:  { safe: true, emoji: "✅", firstChoice: "No systemic issues" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart:  { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm:     { safe: true, emoji: "✅", firstChoice: "Neutral glycemic" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},
{
    name: "CLOZAPINE",
    codes: ['101255','101256','105834'],
    maxDailyDose: "900 mg/day PO max",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid in severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: false, emoji: "❌", firstChoice: "Risk of myocarditis – monitor ECG" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose & lipids" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effect" }
},
{
    name: "COENZYME Q10",
    codes: ['106450','100330','107548','100529','103321','102621','102622','102620','106422','106420'],
    maxDailyDose: "600 mg/day PO total",
    liver: { safe: true, emoji: "✅", firstChoice: "Well-tolerated" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Often used in CHF" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral on glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May lower BP slightly" }
},
{
    name: "COTRIMOXAZOLE",
    codes: ['102024'],
    maxDailyDose: "320 mg TMP + 1600 mg SMX/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Adjust in severe impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose adjust if CrCl < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Watch K⁺ with ACEI/ARB" },
    dm: { safe: true, emoji: "✅", firstChoice: "Monitor glucose if on sulfonylurea" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct effect" }
},
{
    name: "COLCHICINE",
    codes: ['100533'],
    maxDailyDose: "2 mg/day PO max for gout",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in hepatic disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid if CrCl < 30 without adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No major cardiac issues" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "CYSTEINE",
    codes: ['105879','105366','508419','508624','100577','101118','107382','107444','102529','101772'],
    maxDailyDose: "N-acetyl-cysteine 2400 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "Used for hepatic protection" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Renal safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "No issues" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DABIGATRAN",
    codes: ['105735','105736','105733','105734','101756','102945','103398'],
    maxDailyDose: "300 mg/day PO (150 mg BID)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Contra in severe hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose reduce if CrCl < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Standard in AF" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Monitor BP routinely" }
},
{
    name: "DACLATASVIR",
    codes: ['103115','103875'],
    maxDailyDose: "60 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "Dose adjust Child-Pugh C" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiotoxicity" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DAPAGLIFLOZIN",
    codes: ['106253','106263','106124','106125','105280','105281','103072','103071'],
    maxDailyDose: "10 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "Use with caution cirrhosis" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid if eGFR < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Benefit in HF" },
    dm: { safe: true, emoji: "✅", firstChoice: "Improves glycemic control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May lower BP" }
},
{
    name: "DAPOXETINE",
    codes: ['103487','103486','105421','105420','105101','105102','102984','102985','102692','102693'],
    maxDailyDose: "60 mg per sexual event (max 1 dose/24 h)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid in moderate/severe impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor QT prolongation" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DARBEPOETIN",
    codes: ['103842','103715','103536','103012','103042','106319','103043','103905'],
    maxDailyDose: "300 mcg/week SC (weight-based)",
    liver: { safe: true, emoji: "✅", firstChoice: "No data for dose change" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Used in CKD anemia" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Target Hb ≤11 to avoid CV risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May raise BP – monitor" }
},
{
    name: "DARIFENACIN",
    codes: ['100763','100764'],
    maxDailyDose: "15 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Max 7.5 mg if moderate hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Low QT risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DASATINIB",
    codes: ['105753','105754','103585','103586','103587'],
    maxDailyDose: "180 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "❌", firstChoice: "Risk of QT & effusion" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP" }
},
{
    name: "DEFERASIROX",
    codes: ['106315','103029','103028','103030','106000','106063','103839','103697','105995','107378'],
    maxDailyDose: "40 mg/kg/day PO (≈2400 mg max)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor transaminases" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Stop if Cr rise >30%" },
    heart: { safe: true, emoji: "✅", firstChoice: "No direct issues" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DEGARELIX",
    codes: ['103737','103736'],
    maxDailyDose: "120 mg SC loading then 80 mg monthly",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor QT interval" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Can raise glucose" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP" }
},
{
    name: "DENOSUMAB",
    codes: ['102789','103058'],
    maxDailyDose: "60 mg SC q6 months (osteoporosis)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Risk of hypocalcemia in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "No direct effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DESLORATIDINE",
    codes: ['100051','105135','106237','101519','100052','103471','100636','105380','103090','106245','101520'],
    maxDailyDose: "5 mg/day PO (10 mg off-label)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minor metabolism" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Adjust if severe CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Minimal QT risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DESMOPRESSIN",
    codes: ['101437','101438','103767'],
    maxDailyDose: "40 mcg/day SL tabs",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contra in CKD/low CrCl" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Fluid overload risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP" }
},
{
    name: "DESOGESTREL",
    codes: ['100432','105587','105584','105585','105586','105588'],
    maxDailyDose: "75 µg/day PO (progestin-only)",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid severe hepatic disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Low thrombotic risk vs EE combos" },
    dm: { safe: true, emoji: "✅", firstChoice: "Monitor glucose in DM" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May raise BP slightly" }
},
{
    name: "DESVENLAFAXINE",
    codes: ['106107','101774'],
    maxDailyDose: "400 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Max 200 mg if hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Adjust if CrCl < 30" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor BP & HR" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May elevate BP" }
},
{
    name: "DEXAMETHASONE",
    codes: ['100641','103577'],
    maxDailyDose: "40 mg/day PO (anti-inflammatory)",
    liver: { safe: true, emoji: "✅", firstChoice: "Use caution in cirrhosis" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Fluid retention risk" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Raises glucose – monitor" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May raise BP" }
},
{
    name: "DEXKETOPROFEN",
    codes: ['102456'],
    maxDailyDose: "75 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe hepatic disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid if CrCl < 30" },
    heart: { safe: false, emoji: "⚠", firstChoice: "NSAI-CV risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May worsen BP" }
},
{
    name: "DEXLANSOPRAZOLE",
    codes: ['103269','103268','106294','106295'],
    maxDailyDose: "60 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid Child-Pugh C" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DEXTROMETHORPHAN",
    codes: ['100644','101179','101921','101977','102245'],
    maxDailyDose: "120 mg/day PO (adult OTC limit)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution hepatically" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Low risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Sugar-free forms for DM" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DICLOFENAC",
    codes: ['101607','105374','100397','101600','100398','100399','100694','100830','101161','101601'],
    maxDailyDose: "150 mg/day PO (oral forms)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid in CKD stage ≥ 3" },
    heart: { safe: false, emoji: "⚠", firstChoice: "↑CV risk; naproxen safer" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can raise BP" }
},
{
    name: "DIENOGEST",
    codes: ['102543'],
    maxDailyDose: "2 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Contra in hepatic disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No data adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Low VTE risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Monitor glucose" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May raise BP" }
},
{
    name: "DIGOXIN",
    codes: ['103791','101238','103792'],
    maxDailyDose: "0.25 mg/day PO (typical)",
    liver: { safe: true, emoji: "✅", firstChoice: "Hepatic safe" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Adjust CrCl < 60" },
    heart: { safe: true, emoji: "✅", firstChoice: "Main cardiac use" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DILTIAZEM",
    codes: ['100674','100675','102995'],
    maxDailyDose: "360 mg/day PO (SR forms)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Adjust Child-Pugh" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Avoid in HFrEF" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Antihypertensive" }
},
{
    name: "DIMENHYDRINATE",
    codes: ['100689'],
    maxDailyDose: "400 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Caution hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No data adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Minimal QT risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DOMPERIDONE",
    codes: ['101461','101462','101463','100078','100696','102486','101460','101792','100695','102487','101459','101791'],
    maxDailyDose: "30 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid if hepatic dysfunction" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Adjust if CrCl < 30" },
    heart: { safe: false, emoji: "❌", firstChoice: "QT prolongation – monitor" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DONEPEZIL",
    codes: ['102681','102680'],
    maxDailyDose: "23 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution severe hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Bradycardia risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DORZOLAMIDE",
    codes: ['102244','102370'],
    maxDailyDose: "2% Ophth 1gtt TID",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid severe renal" },
    heart: { safe: true, emoji: "✅", firstChoice: "No effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DOXAZOSIN",
    codes: ['100394','100395','102946','100702','100703','100704','102268'],
    maxDailyDose: "16 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Benefit in BPH & HTN" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Antihypertensive" }
},
{
    name: "DOXYCYCLINE",
    codes: ['100163','100706','100707','100717','102166','102309'],
    maxDailyDose: "200 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safer than tetracycline" },
    heart: { safe: true, emoji: "✅", firstChoice: "No effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DULAGLUTIDE",
    codes: ['103286','103296'],
    maxDailyDose: "4.5 mg SC weekly",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Use caution severe CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "CV benefit" },
    dm: { safe: true, emoji: "✅", firstChoice: "Improves glycemic control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},

{
    // 7️⃣ COLOSTRUM PRODUCTS
    name: "COLOSTRUM (BOVINE)",
    codes: ['106169','105226','103455'],
    maxDailyDose: "2000 mg/day PO",                     // جرعة فعّالة شائعة ≥2 g
    liver:  { safe: true, emoji: "✅", firstChoice: "No hepatic adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart:  { safe: true, emoji: "✅", firstChoice: "Neutral CV" },
    dm:     { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension:{ safe: true, emoji: "✅", firstChoice: "Neutral BP" }
},

    // ======= BUPROPION - مجموعة أكواد =======
    {
        name: "BUPROPION",
        codes: ['102358', '102359'],
        maxDailyDose: "450 mg/day PO max (150mg TID, 300mg SR daily)",
        liver: { safe: false, emoji: "❌", firstChoice: "Sertraline or Escitalopram (reduce dose 75mg daily if hepatic impairment)" },
        kidney: { safe: true, emoji: "⚠", firstChoice: "Reduce dose/frequency in renal impairment" },
        heart: { safe: true, emoji: "⚠", firstChoice: "Monitor BP and heart rate - may increase both" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - may aid weight loss in diabetic patients" },
        hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP closely - may increase blood pressure" }
    },
{
    name: "DIOSMIN",
    codes: ['106563','100579','103844'],
    maxDailyDose: "1000 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Venotonic, no CV risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DIENOGEST",
    codes: ['102543'],
    maxDailyDose: "2 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe hepatic disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Low VTE risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Monitor glucose if DM" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May raise BP slightly" }
},
{
    name: "DILTIAZEM",
    codes: ['100674','100675','102995'],
    maxDailyDose: "360 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Avoid in HFrEF" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Antihypertensive" }
},
{
    name: "DIHYDROERGOCRISTINE",
    codes: ['101098'],
    maxDailyDose: "6 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No data adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Vasospasm risk – monitor BP" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May raise BP" }
},
{
    name: "DIHYDROXY_ALUMINIUM_SODIUM",
    codes: ['105173'],
    maxDailyDose: "4000 mg/day PO (AlOH eq.)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid in ESRD (Al toxicity)" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DIMETHINDENE",
    codes: ['100848','100847','100849'],
    maxDailyDose: "24 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Low QT risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "CROTAMITON",
    codes: ['103603','102906','100792','100793'],
    maxDailyDose: "Topical use only",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Minimal systemic" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "CRIZOTINIB",
    codes: ['106574','103555'],
    maxDailyDose: "500 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs, reduce Child-Pugh B/C" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose adjust CrCl <60" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation – ECG" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "CHROMIUM",
    codes: ['107354','103169'],
    maxDailyDose: "1000 mcg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid high doses in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "May improve insulin sensitivity" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "CURCUMIN",
    codes: ['107093','106333','107593','107474'],
    maxDailyDose: "4000 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "Hepatoprotective in studies" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Anti-inflammatory" },
    dm: { safe: true, emoji: "✅", firstChoice: "May lower glucose slightly" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Possible BP lowering" }
},
{
    name: "CYCLOPENTOLATE",
    codes: ['103810','105799'],
    maxDailyDose: "3 drops/eye/day (1%)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Minimal systemic" },
    heart: { safe: true, emoji: "✅", firstChoice: "Tachycardia rare" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "CYPROHEPTADINE",
    codes: ['101732'],
    maxDailyDose: "20 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Caution hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Appetite ↑ may affect DM" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "CYPROTERONE",
    codes: ['100134'],
    maxDailyDose: "300 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "High hepatotoxicity risk" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Thrombo-embolism risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Monitor glucose" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP" }
},
{
    name: "PODOPHYLLOTOXIN",
    codes: ['102133','103427'],
    maxDailyDose: "0.5 mL 0.5% solution BID × 3 days",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Minimal systemic" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "ENOXAPARIN SODIUM",
    codes: ['100505','100506','102542','103421','106195','106196','106197','106198','107185','107186','107187','107188','103886','103887','103888','103889'],
    maxDailyDose: "300 mg/day SC max (150 mg BID)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose change in mild/moderate impairment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Use UF heparin if CrCl<30" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor bleeding risk in ACS" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effect" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Avoid if uncontrolled HTN" }
},
{
    name: "ENTECAVIR",
    codes: ['102966','102967','103415','103416','103527','103528','105760','105761'],
    maxDailyDose: "1 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "Preferred in HBV with cirrhosis" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Dose-adjust if CrCl<50 or switch to Tenofovir" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac issues" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral on glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "ENZALUTAMIDE",
    codes: ['103349'],
    maxDailyDose: "160 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment needed" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Caution if CrCl<30" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Consider Apalutamide if severe CVD" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral on glucose" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Monitor BP—risk of HTN" }
},
{
    name: "EPINEPHRINE",
    codes: ['103830','103828','103829'],
    maxDailyDose: "0.6 mg/day IM (0.3 mg ×2)",
    liver: { safe: true, emoji: "✅", firstChoice: "Hepatic metabolism—no adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose change" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Use glucagon in β-blocker patients" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose spikes" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Raises BP—close monitoring" }
},
{
    name: "ERYTHROMYCIN",
    codes: ['106043','100785','100786','100787','105170'],
    maxDailyDose: "4 g/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Use Azithromycin if cholestasis" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT risk—prefer Azithro" },
    dm: { safe: true, emoji: "✅", firstChoice: "No effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "ETANERCEPT",
    codes: ['102744'],
    maxDailyDose: "50 mg/week SC",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose change" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Avoid in NYHA III-IV—use Abatacept" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "ETORICOXIB",
    codes: ['100174','100175','100176','102685','102683','102684','107392','107393','107394','105770','105768','105769','105788','105789','105790','105308','105310','105309'],
    maxDailyDose: "120 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use Naproxen if Child-Pugh ≥B" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid if eGFR<30" },
    heart: { safe: false, emoji: "❌", firstChoice: "High CV risk—prefer Naproxen" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic impact" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP" }
},
{
    name: "EVEROLIMUS",
    codes: ['103017','106002','106053','106173','106172','106171','106170'],
    maxDailyDose: "10 mg/day PO (oncology) or 0.75 mg BID (transplant)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose if Child-Pugh B/C" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No change" },
    heart: { safe: true, emoji: "✅", firstChoice: "Low cardiotoxicity" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose—may induce DM" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Check BP periodically" }
},
{
    name: "EVOLOCUMAB",
    codes: ['103541','106133'],
    maxDailyDose: "420 mg SC monthly",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral on glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "EXEMESTANE",
    codes: ['103018'],
    maxDailyDose: "25 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use Anastrozole if moderate/severe impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid if CrCl<30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Low cardiotoxicity" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect" }
},
{
    name: "EXENATIDE",
    codes: ['102661','102665'],
    maxDailyDose: "20 µg/day SC (10 µg BID)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid if CrCl<30; use Liraglutide" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective" },
    dm: { safe: true, emoji: "✅", firstChoice: "First-line GLP-1" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "EZETIMIBE",
    codes: ['105096','100817','105573'],
    maxDailyDose: "10 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid if active liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Reduces ASCVD risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "EZETIMIBE + ATORVASTATIN",
    codes: ['107477','107478','107479','105019','105020','105021','106454','106455','106456'],
    maxDailyDose: "10 mg/80 mg per day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Use Rosuvastatin if AST/ALT>3×ULN" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No change (unless eGFR<30 then lower statin)" },
    heart: { safe: true, emoji: "✅", firstChoice: "High-intensity statin combo" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor HbA1c" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FLUCONAZOLE",
    codes: ['100379','100380','100672','100716','100899','100940','102488'],
    maxDailyDose: "800 mg/day PO/IV",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use Echinocandin if transaminitis" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Adjust dose if CrCl<50" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT risk—monitor ECG" },
    dm: { safe: true, emoji: "✅", firstChoice: "No effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FAMCICLOVIR",
    codes: ['100826','100827','105765','105764'],
    maxDailyDose: "1.5 g/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Adjust if CrCl<60" },
    heart: { safe: true, emoji: "✅", firstChoice: "No issues" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FAMOTIDINE",
    codes: ['100824','100825'],
    maxDailyDose: "80 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Lower dose if CrCl<50" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac issues" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FAMPRIDINE",
    codes: ['103281'],
    maxDailyDose: "20 mg/day PO (10 mg BID)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl<50" },
    heart: { safe: true, emoji: "✅", firstChoice: "No effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FEBUXOSTAT",
    codes: ['103246','102884','102885','103096','103095','106303','106304','106515','106514','107436','107437'],
    maxDailyDose: "80 mg/day PO (can go to 120 mg off-label)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid in severe hepatic disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment mild/mod; monitor in ESRD" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Allopurinol if CV disease" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FELODIPINE",
    codes: ['106004','101752','101753'],
    maxDailyDose: "20 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Lower dose if cirrhosis" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Good for angina/HTN" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Antihypertensive agent" }
},
{
    name: "EPOETIN ALFA",
    codes: ['102450'],
    maxDailyDose: "40000 IU/week SC (≈5714 IU/day)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose change" },
    kidney: { safe: true, emoji: "✅", firstChoice: "CKD indication" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor BP & Hct" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May raise BP" }
},
{
    name: "ESZOPICLONE",
    codes: ['105257'],
    maxDailyDose: "3 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Max 2 mg if severe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No CV effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect" }
},
{
    name: "ETAMSYLATE",
    codes: ['100667','100668','107224'],
    maxDailyDose: "3000 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP change" }
},
{
    name: "EPTINEZUMAB",
    codes: ['107530'],
    maxDailyDose: "300 mg IV q12 weeks",
    liver: { safe: true, emoji: "✅", firstChoice: "No data—assumed safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No CV signal" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect" }
},
{
    name: "ERIBULIN",
    codes: ['103752'],
    maxDailyDose: "2.8 mg/m² per 21-day cycle IV",
    liver: { safe: false, emoji: "⚠", firstChoice: "Dose-reduce in impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Adjust if CrCl<60" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT monitoring" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect" }
},
{
    name: "EPROSARTAN",
    codes: ['102202'],
    maxDailyDose: "600 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No change" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Monitor Cr if eGFR<30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective in DM" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line ARB" }
},
{
    name: "EPROSARTAN + HYDROCHLOROTHIAZIDE",
    codes: ['102203'],
    maxDailyDose: "600 mg/12.5 mg per day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe cirrhosis" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Not for eGFR<30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Useful combo" },
    dm: { safe: true, emoji: "✅", firstChoice: "Monitor glucose (thiazide)" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Combo HTN therapy" }
},
{
    name: "ETONOGESTREL",
    codes: ['102857'],
    maxDailyDose: "68 mg subdermal implant (3 yr)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Contra in severe liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No data—assumed safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "No direct effect" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP" }
},
{
    name: "FOLLITROPIN ALFA",
    codes: ['101039','101040','101041','103912'],
    maxDailyDose: "450 IU/day SC",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect" }
},
{
    name: "FOLLITROPIN BETA",
    codes: ['101817','101818','101819','101820','101821'],
    maxDailyDose: "450 IU/day SC",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect" }
},
{
    name: "FOSINOPRIL SODIUM",
    codes: ['102117','102118'],
    maxDailyDose: "40 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "OK in CKD (dual excretion)" },
    heart: { safe: true, emoji: "✅", firstChoice: "HF benefit" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "ACEI class" }
},
{
    name: "FENTICONAZOLE",
    codes: ['100626','101052','101053'],
    maxDailyDose: "600 mg/day topical/vaginal",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Minimal systemic" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FLAVOXATE HYDROCHLORIDE",
    codes: ['100982','106036'],
    maxDailyDose: "600 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid ESRD" },
    heart: { safe: true, emoji: "✅", firstChoice: "No QT issues" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FLUNARIZINE",
    codes: ['103907','102052'],
    maxDailyDose: "10 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT monitoring" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP change" }
},
{
    name: "FLUOCINOLONE + NEOMYCIN",
    codes: ['100632'],
    maxDailyDose: "Apply ≤45 g/week topical",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Minimal systemic" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor if large area" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FLUOROMETHOLONE",
    codes: ['100737','100912','100913','101637'],
    maxDailyDose: "4 drops/eye/day (0.1%)",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical ocular" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical ocular" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May raise IOP in diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FLUVASTATIN",
    codes: ['101258'],
    maxDailyDose: "80 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid active disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No change" },
    heart: { safe: true, emoji: "✅", firstChoice: "ASCVD reduction" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor HbA1c" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FLUVOXAMINE",
    codes: ['100833','100834'],
    maxDailyDose: "300 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Dose reduce" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No change" },
    heart: { safe: true, emoji: "✅", firstChoice: "Low QT risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FORMOTEROL + BECLOMETHASONE",
    codes: ['102911','105450'],
    maxDailyDose: "800 µg/48 µg inhaled per day",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor arrhythmia" },
    dm: { safe: false, emoji: "⚠", firstChoice: "High dose steroids ↑ glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP change" }
},
{
    name: "FOSFOMYCIN",
    codes: ['101456','105575'],
    maxDailyDose: "3 g/day PO (single dose)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid CrCl<10" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FLUTICASONE FUROATE + VILANTEROL",
    codes: ['103009','103238'],
    maxDailyDose: "200 µg/25 µg inhaled once daily",
    liver: { safe: true, emoji: "✅", firstChoice: "Monitor if severe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No change" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Beta-agonist tachycardia" },
    dm: { safe: false, emoji: "⚠", firstChoice: "High dose steroids" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Usually safe" }
},
{
    name: "FLUTICASONE PROPIONATE + SALMETEROL",
    codes: ['103439','103438'],
    maxDailyDose: "1000 µg/100 µg per day inhaled",
    liver: { safe: true, emoji: "✅", firstChoice: "No change" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No change" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Beta-agonist caution" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FUROSEMIDE",
    codes: ['105656','103743','100948','101242','101243','103382','106046'],
    maxDailyDose: "600 mg/day PO or IV",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use cautiously—hepatic coma" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Adjust in ESRD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Preferred in HF" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Antihypertensive" }
},
{
    name: "FAMOTIDINE",
    codes: ['100824','100825'],
    maxDailyDose: "80 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose halve CrCl<50" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FAMPRIDINE",
    codes: ['103281'],
    maxDailyDose: "20 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contra if CrCl<50" },
    heart: { safe: true, emoji: "✅", firstChoice: "No effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "GATIFLOXACIN",
    codes: ['102257','102441','103021'],
    maxDailyDose: "1 drop/eye q2h (≤24 drops/day)",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical use" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical use" },
    heart: { safe: true, emoji: "✅", firstChoice: "Minimal systemic" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "GEFITINIB",
    codes: ['103733'],
    maxDailyDose: "250 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT monitoring" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "GLATIRAMER ACETATE",
    codes: ['107258'],
    maxDailyDose: "40 mg SC three times weekly",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No CV risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "ETANERCEPT",
    codes: ['102744'],
    maxDailyDose: "50 mg/week SC", // [web:28]
    liver: { safe: true, emoji: "✅", firstChoice: "No dose change" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Avoid NYHA III-IV" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FINGOLIMOD HCL",
    codes: ['107261','107363','103906','102852','105484','105738'],
    maxDailyDose: "0.5 mg/day PO", // [web:188]
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated AV-block" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Watch macular edema" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Check BP" }
},
{
    name: "FILGRASTIM",
    codes: ['103414','103418','107531'],
    maxDailyDose: "800 µg/day SC", // [web:163]
    liver: { safe: true, emoji: "✅", firstChoice: "No issues" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FEXOFENADINE",
    codes: ['100843','102670','100870','100871','105715','100872','107654','102189','107655','102190'],
    maxDailyDose: "180 mg/day PO", // [web:147]
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Extend interval CrCl<30" },
    heart: { safe: true, emoji: "✅", firstChoice: "No QT effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FENOFIBRATE",
    codes: ['100850','101274','101275','105771','105724','106305'],
    maxDailyDose: "200 mg/day PO", // [web:190]
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid active disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Contra eGFR<30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Improves TG" },
    dm: { safe: true, emoji: "✅", firstChoice: "Helpful in diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP change" }
},
{
    name: "FELODIPINE",
    codes: ['106004','101752','101753'],
    maxDailyDose: "20 mg/day PO", // [web:182]
    liver: { safe: false, emoji: "⚠", firstChoice: "Lower if cirrhosis" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Angina & HTN control" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Primary use" }
},
{
    name: "FONDAPARINUX SODIUM",
    codes: ['103588','105993'],
    maxDailyDose: "10 mg/day SC", // [web:168]
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contra CrCl<30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Preferred if HIT risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor bleeding" }
},
{
    name: "FAMCICLOVIR",
    codes: ['100826','100827','107360','105765','105764'],
    maxDailyDose: "1500 mg/day PO", // [web:205]
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose-reduce CrCl<60" },
    heart: { safe: true, emoji: "✅", firstChoice: "No CV issues" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FEBUXOSTAT",
    codes: ['103246','102884','102885','103096','103095','106303','106304','106515','106514','107436','107437'],
    maxDailyDose: "80 mg/day PO", // [web:142]
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No change mild/mod" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Use allopurinol if CVD" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FOLIC ACID",
    codes: ['100914','100915','100916','100917','100918','100919','102918','100983','101064','106907','105109','105661','508738','508725'],
    maxDailyDose: "5 mg/day PO", // [web:151]
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "↓ homocysteine" },
    dm: { safe: true, emoji: "✅", firstChoice: "Essential pre-conception" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP change" }
},
{
    name: "FINASTERIDE",
    codes: ['101794','100875','103783','105668','101795'],
    maxDailyDose: "5 mg/day PO", // [web:167]
    liver: { safe: false, emoji: "⚠", firstChoice: "Use dutasteride cautiously" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No CV issues" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FINGOLIMOD ACETATE",
    codes: ['107262','107258','191'], // example extra code if present
    maxDailyDose: "0.5 mg/day PO", // [web:188]
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No change" },
    heart: { safe: false, emoji: "❌", firstChoice: "Avoid severe bradycardia" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Check eyes (macula)" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP" }
},
{
    name: "FOXGLOXACIN",  // placeholder for further expansion if needed
    codes: ['placeholder'],
    maxDailyDose: "320 mg/day PO", // [web:87]
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution hepatic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose halve CrCl<40" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "L-CARNITINE",
    codes: ['100102','102856','508053','509403','508735'],
    maxDailyDose: "3000 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment needed" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Excreted renally—safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "May improve cardiac function" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May affect glucose—monitor" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "GINSENG",
    codes: ['100988','100989','100990','103464','100992','102647','101042','101178','101213','102803','102802','105156','102267','102801'],
    maxDailyDose: "6000 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidneys" },
    heart: { safe: false, emoji: "⚠", firstChoice: "May affect BP/HR in sensitive" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose—may lower" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May alter BP" }
},
{
    name: "ROYAL JELLY",
    codes: ['102656','105227','107509','105277','103218','102599','106487','101984','102597','103389','103217','105331','507984','101366','103277','105232','105231','100733','106447','103624','107538','102326'],
    maxDailyDose: "6000 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic concerns" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "May improve cardiac health" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose levels" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP changes" }
},
{
    name: "MACA",
    codes: ['106900','103388','508486','509493'],
    maxDailyDose: "3000 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No liver issues" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidneys" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral on glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FLUCONAZOLE",
    codes: ['100379','100380','100672','100716','100899','100940','102488'],
    maxDailyDose: "800 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs—hepatotoxic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose adjust CrCl<50" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP change" }
},
{
    name: "EZETIMIBE",
    codes: ['105096','100817','105573'],
    maxDailyDose: "10 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs if with statin" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardiovascular benefit" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "ERYTHROMYCIN",
    codes: ['106043','100785','100786','100787','105170'],
    maxDailyDose: "4000 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Hepatotoxic—monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in CKD" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP change" }
},
{
    name: "EXEMESTANE",
    codes: ['103018'],
    maxDailyDose: "25 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment needed" },
    heart: { safe: false, emoji: "⚠", firstChoice: "May worsen lipids" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "EXENATIDE",
    codes: ['102661','102665'],
    maxDailyDose: "20 µg/day SC",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic adjustment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid CrCl<30" },
    heart: { safe: true, emoji: "✅", firstChoice: "CV benefits proven" },
    dm: { safe: true, emoji: "✅", firstChoice: "Primary indication" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May lower BP" }
},
{
    name: "EVOLOCUMAB",
    codes: ['103541','106133'],
    maxDailyDose: "420 mg/month SC",
    liver: { safe: true, emoji: "✅", firstChoice: "No liver concerns" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Major CV benefits" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "GLICLAZIDE",
    codes: ['103364','105592','100651','103008','105606','100993','100994','101010'],
    maxDailyDose: "320 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe hepatic disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose reduce CrCl<50" },
    heart: { safe: true, emoji: "✅", firstChoice: "Lower CV risk vs glyburide" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Hypoglycemia risk" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct effect" }
},
{
    name: "ETORICOXIB",
    codes: ['100174','100175','100176','102685','102683','102684','107392','107393','107394','105770','105768','105769','105788','105789','105790','105308','105310','105309'],
    maxDailyDose: "120 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated active liver disease" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid eGFR<30" },
    heart: { safe: false, emoji: "❌", firstChoice: "Increased CV risk—avoid" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May worsen glucose control" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "May increase BP" }
},
{
    name: "EUCALYPTUS OIL",
    codes: ['507815'],
    maxDailyDose: "600 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidneys" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP change" }
},
{
    name: "GARLIC SUPPLEMENTS",
    codes: ['100108','100193','100318','100734','106339','102591','101503','508149','508507','508150','102349','100731'],
    maxDailyDose: "2400 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "Hepatoprotective properties" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidneys" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May lower glucose—monitor" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May lower BP" }
},
{
    name: "GARCINIA CAMBOGIA",
    codes: ['102836','102806','101218'],
    maxDailyDose: "2800 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Hepatotoxic—avoid" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal issues" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May affect glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FAT BURNERS",
    codes: ['102996','102997','105123'],
    maxDailyDose: "varies by ingredient",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor for hepatotoxicity" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Assess stimulant content" },
    heart: { safe: false, emoji: "⚠", firstChoice: "May cause tachycardia" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May increase BP" }
},
{
    name: "FIBER SUPPLEMENTS",
    codes: ['100272','100952','107205','105471'],
    maxDailyDose: "30 g/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic concerns" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardiovascular benefits" },
    dm: { safe: true, emoji: "✅", firstChoice: "Improves glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May lower BP" }
},
{
    name: "ETHINYLESTRADIOL COMBINATIONS",
    codes: ['100652','101043','101375','101870','103044','101047','105137','101312','100800','100452','101592'],
    maxDailyDose: "35 µg/day ethinylestradiol PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: false, emoji: "❌", firstChoice: "VTE risk—avoid in risk factors" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May worsen glucose tolerance" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "May increase BP" }
},
{
    name: "EVEROLIMUS",
    codes: ['103017','106002','106053','106173','106172','106171','106170'],
    maxDailyDose: "10 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Dose reduce hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor renal function" },
    heart: { safe: false, emoji: "⚠", firstChoice: "May cause pericardial effusion" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Hyperglycemia—monitor" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May increase BP" }
},
{
    name: "FACE CARE PRODUCTS",
    codes: ['102494','101832','101833','101834','101835','101839','102144','101579','101580'],
    maxDailyDose: "topical as needed",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal concerns" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FUSIDIC ACID",
    codes: ['100263','100264','100265','100630','100631','100933','100934','102767','102768','100937','100938','106262','100943','100944','100945','100946','103610','103611','100950','100951','102400','102401','100936','101636','102220'],
    maxDailyDose: "500 mg/day topical",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic from topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe topically" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP change" }
},
{
    name: "FUSIDIC ACID COMBINATIONS",
    codes: ['100932','102770','100942','100947','100949','102402','100935','102769','105654'],
    maxDailyDose: "Apply TID-QID topically",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe topically" },
    heart: { safe: true, emoji: "✅", firstChoice: "No systemic effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Steroids may raise glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect topical" }
},
{
    name: "FEVERFEW/PATCH PRODUCTS",
    codes: ['102855','102782'],
    maxDailyDose: "as directed topically",
    liver: { safe: true, emoji: "✅", firstChoice: "No systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical use safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP change" }
},
{
    name: "FEM PRODUCTS",
    codes: ['102780','101104'],
    maxDailyDose: "as directed topically",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical use only" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No systemic effects" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac impact" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FOOT CARE",
    codes: ['507300'],
    maxDailyDose: "apply as needed",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical use" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No systemic absorption" },
    heart: { safe: true, emoji: "✅", firstChoice: "No effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic feet" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect" }
},
{
    name: "EYE CARE PRODUCTS",
    codes: ['105047','102700','105139','105138','106913','105062','103185','101579','101580','103066'],
    maxDailyDose: "as directed topically",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical use safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic eyes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "WELLMAN/MULTIVITAMINS",
    codes: ['102499','102352'],
    maxDailyDose: "1-2 tablets daily",
    liver: { safe: true, emoji: "✅", firstChoice: "Generally safe" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor in CKD (minerals)" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardiovascular support" },
    dm: { safe: true, emoji: "✅", firstChoice: "May help glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help BP" }
},
{
    name: "MULTIVITAMIN KIDS",
    codes: ['107500','100991','105233','105228'],
    maxDailyDose: "age-appropriate dosing",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for children" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in normal function" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic kids" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "EPINASTINE",
    codes: ['101873'],
    maxDailyDose: "2 drops/eye BID",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical ocular use" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP change" }
},
{
    name: "EPINEPHRINE",
    codes: ['103830','103828','103829'],
    maxDailyDose: "0.5 mg IM/SC PRN",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in CKD" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Use caution in CAD" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May raise glucose acutely" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Acute BP elevation" }
},
{
    name: "TURNERO/PERFORMANCE",
    codes: ['105591','107234','107568','105298','107589','107616','107612','107619','107583','102771','508526','103320','101364','103279','101365','105290','105294','106361','106362','106411','103322','102275','102276','509049','509050','507364'],
    maxDailyDose: "varies by ingredient",
    liver: { safe: false, emoji: "⚠", firstChoice: "Unknown ingredients—caution" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Assess individual components" },
    heart: { safe: false, emoji: "⚠", firstChoice: "May contain stimulants" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May affect BP" }
},
{
    name: "ESTRADIOL COMBINATIONS",
    codes: ['100135','100507','101790'],
    maxDailyDose: "varies by formulation",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: false, emoji: "❌", firstChoice: "VTE risk in susceptible" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May affect glucose tolerance" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP closely" }
},
{
    name: "FOAMING WASH/CLEANSERS",
    codes: ['100017','100018'],
    maxDailyDose: "apply topically BID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical use only" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No systemic absorption" },
    heart: { safe: true, emoji: "✅", firstChoice: "No effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "GABAPENTIN",
    codes: ['100953','100954','100962','100963','102605','103130'],
    maxDailyDose: "3600 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose reduce CrCl<80" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "GINKGO BILOBA",
    codes: ['102248','100189','100312','100984','100985','100986','107507','100987','508517','507982','107079','107615','101214','508719','102142'],
    maxDailyDose: "240 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic issues" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidneys" },
    heart: { safe: false, emoji: "⚠", firstChoice: "May affect circulation" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose levels" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May affect BP" }
},
{
    name: "GLIBENCLAMIDE",
    codes: ['100164','100592','100653','100690','100995'],
    maxDailyDose: "20 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid severe hepatic disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Risk of hypoglycemia in CKD" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Higher CV risk vs other SU" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Hypoglycemia risk" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effect" }
},
{
    name: "GLIBENCLAMIDE + METFORMIN",
    codes: ['100593','100594','100649','100650','103140','103141','101036','101037'],
    maxDailyDose: "20 mg/2550 mg glibenclamide/metformin max",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated severe hepatic" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid eGFR<30" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Higher CV risk vs newer agents" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Hypoglycemia + lactic acidosis risk" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effect" }
},
{
    name: "GLIMEPIRIDE",
    codes: ['100074','100075','100076','103222','103223','105650','103224','100996','100997','100998','100999','102694','101000','101001','101002','101003','101004','101005','101006','101007','101008','101009','101018','101019','101020','101021','103401','102473','102572','102502','102503','102504','102505','102541','105672'],
    maxDailyDose: "8 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe hepatic disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor closely CrCl<50" },
    heart: { safe: true, emoji: "✅", firstChoice: "Lower CV risk vs glyburide" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Hypoglycemia risk" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "GLIMEPIRIDE + METFORMIN",
    codes: ['105057'],
    maxDailyDose: "4 mg/2000 mg glimepiride/metformin",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated severe hepatic" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid eGFR<30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Better than glyburide combos" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor hypoglycemia" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effect" }
},
{
    name: "GLUCAGON",
    codes: ['103249'],
    maxDailyDose: "1 mg IM/SC PRN",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "May cause tachycardia" },
    dm: { safe: true, emoji: "✅", firstChoice: "Emergency hypoglycemia treatment" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Transient BP elevation" }
},
{
    name: "GALANTAMINE",
    codes: ['102992','101877'],
    maxDailyDose: "24 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Dose reduce moderate hepatic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose reduce CrCl<9" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Bradycardia—monitor ECG" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP change" }
},
{
    name: "GANCICLOVIR",
    codes: ['106511'],
    maxDailyDose: "10 mg/kg/day IV",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Nephrotoxic—dose reduce CrCl<70" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "GANIRELIX ACETATE",
    codes: ['101646'],
    maxDailyDose: "0.25 mg/day SC",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic concerns" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "GARDASIL VACCINE",
    codes: ['103714','107523'],
    maxDailyDose: "0.5 mL IM single dose series",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP concerns" }
},
{
    name: "GEMFIBROZIL",
    codes: ['101315'],
    maxDailyDose: "1200 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated hepatic disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Use caution severe CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Reduces CV events" },
    dm: { safe: true, emoji: "✅", firstChoice: "Beneficial in diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "GEMIFLOXACIN",
    codes: ['100822','100823','105803'],
    maxDailyDose: "320 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose adjust CrCl<40" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation risk" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Glucose dysregulation risk" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "GENTAMICIN (TOPICAL)",
    codes: ['100152','100964','100980','100151','100979'],
    maxDailyDose: "apply TID-QID topically",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe topically" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FLUOROMETHOLONE",
    codes: ['100737','100912','100913','101637','100905'],
    maxDailyDose: "2 drops/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical ocular" },
    heart: { safe: true, emoji: "✅", firstChoice: "No systemic effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May raise IOP in diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FLUTICASONE (NASAL)",
    codes: ['100242','106247','100894','102829','106479','103501'],
    maxDailyDose: "200 µg/day intranasal",
    liver: { safe: true, emoji: "✅", firstChoice: "Monitor if severe hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose high dose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FLUTICASONE (INHALED)",
    codes: ['105558','106236','105559','100896','100898','105561','103163','103162','103164','100895','100897','107295','107296'],
    maxDailyDose: "1000 µg/day inhaled",
    liver: { safe: true, emoji: "✅", firstChoice: "Monitor if severe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "High dose may raise glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FLUTICASONE (TOPICAL)",
    codes: ['102983','102982'],
    maxDailyDose: "apply BID topically",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe topically" },
    heart: { safe: true, emoji: "✅", firstChoice: "No effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Large area may affect glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FLUTICASONE COMBINATIONS",
    codes: ['103795','107625','103439','103438'],
    maxDailyDose: "varies by combination",
    liver: { safe: true, emoji: "✅", firstChoice: "Monitor if severe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Beta-agonist effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Monitor if beta-agonist" }
},
{
    name: "GLATIRAMER ACETATE",
    codes: ['103906','107258'],
    maxDailyDose: "40 mg SC TIW",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "PONVORY (PONESIMOD)",
    codes: ['107524'],
    maxDailyDose: "20 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated AV-block" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Check macular edema" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP" }
},
{
    name: "IRON + FOLIC ACID",
    codes: ['100837','103662','105563'],
    maxDailyDose: "325 mg iron/5 mg folate max",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid hemochromatosis" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Beneficial in anemia" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "TOPICAL PREPARATIONS",
    codes: ['100017','100018'],
    maxDailyDose: "apply as directed",
    liver: { safe: true, emoji: "✅", firstChoice: "No systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe topically" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "DAONIL (GLIBENCLAMIDE PREPARATIONS)",
    codes: ['105665'],
    maxDailyDose: "cancelled/not available",
    liver: { safe: false, emoji: "❌", firstChoice: "Product discontinued" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Product discontinued" },
    heart: { safe: false, emoji: "❌", firstChoice: "Product discontinued" },
    dm: { safe: false, emoji: "❌", firstChoice: "Product discontinued" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Product discontinued" }
},
{
    name: "MULTIVITAMIN PRENATAL",
    codes: ['100983','101064','105109'],
    maxDailyDose: "1-2 tablets daily",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in pregnancy" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor vitamin A in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardiovascular benefits" },
    dm: { safe: true, emoji: "✅", firstChoice: "Essential in gestational DM" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help in pregnancy" }
},
{
    name: "NIMODIPINE",
    codes: ['106004'],
    maxDailyDose: "360 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Dose reduce hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "May cause hypotension" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May lower BP excessively" }
},
{
    name: "ISENTRESS (RALTEGRAVIR)",
    codes: ['107360'],
    maxDailyDose: "1200 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "ENTECAVIR",
    codes: ['102966','102967','103415','103416','103527','103528','105760','105761'],
    maxDailyDose: "1 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs—hepatic indication" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose adjust CrCl<50" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "ENZALUTAMIDE",
    codes: ['103349'],
    maxDailyDose: "160 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor hepatic function" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "May cause cardiac events" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May increase BP" }
},
{
    name: "ENOXAPARIN SODIUM",
    codes: ['100505','100506','102542','103421','106195','106196','106197','106198','107185','107186','107187','107188','103886','103887','103888','103889'],
    maxDailyDose: "180 mg/day SC",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic adjustment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated CrCl<30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Preferred in ACS" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetes" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Bleeding risk" }
},
{
    name: "ESCITALOPRAM",
    codes: ['100454','100455','103772','103775','105607','105608','105089','105090','100776','100777','106228','105564','105567','105605','107555','103876','103516','103517'],
    maxDailyDose: "20 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Dose reduce hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation—monitor ECG" },
    dm: { safe: true, emoji: "✅", firstChoice: "May improve glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "ESOMEPRAZOLE",
    codes: ['105875','105876','105446','105447','105448','105449','103136','103137','103138','103139','105741','105742','105743','105744','105745','105746','106522','101531','101532','101533','101534','101535'],
    maxDailyDose: "80 mg/day PO/IV",
    liver: { safe: false, emoji: "⚠", firstChoice: "Dose reduce severe hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May increase fracture risk" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FAMOTIDINE",
    codes: ['100824','100825'],
    maxDailyDose: "80 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose reduce CrCl<50" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FAMPRIDINE",
    codes: ['103281'],
    maxDailyDose: "20 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic concerns" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose adjust CrCl<80" },
    heart: { safe: false, emoji: "⚠", firstChoice: "May prolong QT" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FUROSEMIDE",
    codes: ['105656','103743','100948','101242','101243','103382','106046'],
    maxDailyDose: "600 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor electrolytes in cirrhosis" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Ototoxic—high dose caution" },
    heart: { safe: true, emoji: "✅", firstChoice: "First-line for HF" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May worsen glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Effective antihypertensive" }
},
{
    name: "FLUVASTATIN",
    codes: ['101258'],
    maxDailyDose: "80 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs—contraindicated active liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Major cardiovascular benefits" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May increase glucose slightly" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effect" }
},
{
    name: "FLUOXETINE",
    codes: ['105708','100903','101812','101993'],
    maxDailyDose: "80 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Dose reduce hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation—monitor ECG" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May affect glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effect" }
},
{
    name: "FLUVOXAMINE",
    codes: ['100833','100834'],
    maxDailyDose: "300 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "May improve glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FOSFOMYCIN TROMETAMOL",
    codes: ['101456','105575'],
    maxDailyDose: "3 g single dose PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid CrCl<10" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FOSINOPRIL",
    codes: ['102117','102118'],
    maxDailyDose: "80 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor severe hepatic disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor CrCl—ACE inhibitor" },
    heart: { safe: true, emoji: "✅", firstChoice: "Excellent for HF and CAD" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line antihypertensive" }
},
{
    name: "FORMOTEROL + BECLOMETHASONE",
    codes: ['102911','105450'],
    maxDailyDose: "12 µg formoterol/day inhaled",
    liver: { safe: true, emoji: "✅", firstChoice: "Monitor severe hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Beta-agonist effects—monitor" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May raise glucose" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May increase BP/HR" }
},
{
    name: "FOLLITROPIN ALFA",
    codes: ['101039','101040','101041','103912','105896','105897','105895'],
    maxDailyDose: "450 IU/day SC",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic concerns" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FOLLITROPIN BETA",
    codes: ['101817','101818','101819','101820','101821'],
    maxDailyDose: "600 IU/day SC",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic concerns" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FLUNARIZINE",
    codes: ['103907','102052'],
    maxDailyDose: "10 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe hepatic disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "May cause bradycardia" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May lower BP excessively" }
},
{
    name: "FLAVOXATE",
    codes: ['100982','106036'],
    maxDailyDose: "800 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic concerns" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Anticholinergic effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May worsen gastroparesis" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effect" }
},
{
    name: "FLUOCINOLONE + NEOMYCIN",
    codes: ['100632'],
    maxDailyDose: "apply BID-TID topically",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe topically" },
    heart: { safe: true, emoji: "✅", firstChoice: "No systemic effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Steroids may raise glucose if absorbed" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FENTICONAZOLE",
    codes: ['100626','101052','101053'],
    maxDailyDose: "apply BID topically/vaginally",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "GATIFLOXACIN",
    codes: ['102257','102441','103021'],
    maxDailyDose: "400 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor hepatic function" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose adjust CrCl<40" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation risk" },
    dm: { safe: false, emoji: "❌", firstChoice: "Severe glucose dysregulation—avoid" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "GEFITINIB",
    codes: ['103733'],
    maxDailyDose: "250 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs—dose reduce severe hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No major cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "EPOETIN ALFA",
    codes: ['102450'],
    maxDailyDose: "300 units/kg TIW SC/IV",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Primary indication CKD" },
    heart: { safe: false, emoji: "⚠", firstChoice: "CV events if Hb>11—monitor" },
    dm: { safe: true, emoji: "✅", firstChoice: "Beneficial in diabetic nephropathy" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May increase BP" }
},
{
    name: "EPROSARTAN",
    codes: ['102202'],
    maxDailyDose: "800 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor severe hepatic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor renal function—ARB" },
    heart: { safe: true, emoji: "✅", firstChoice: "Excellent for HF" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line ARB" }
},
{
    name: "EPROSARTAN + HYDROCHLOROTHIAZIDE",
    codes: ['102203'],
    maxDailyDose: "600/25 mg eprosartan/HCTZ max",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor hepatic function" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid eGFR<30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Good for HTN+HF" },
    dm: { safe: false, emoji: "⚠", firstChoice: "HCTZ may worsen glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Excellent combination therapy" }
},
{
    name: "EPTINEZUMAB",
    codes: ['107530'],
    maxDailyDose: "300 mg IV Q3 months",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "ERIBULIN",
    codes: ['103752'],
    maxDailyDose: "2.8 mg/m² IV day 1,8 Q21 days",
    liver: { safe: false, emoji: "⚠", firstChoice: "Dose reduce moderate-severe hepatic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose reduce CrCl<50" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation—monitor ECG" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "ESZOPICLONE",
    codes: ['105257'],
    maxDailyDose: "3 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Dose reduce hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "ETAMSYLATE",
    codes: ['100667','100668','107224'],
    maxDailyDose: "2000 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic concerns" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "ETONOGESTREL",
    codes: ['102857'],
    maxDailyDose: "68 mg implant (3 years)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated liver tumors" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal concerns" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Possible VTE risk" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May affect glucose tolerance" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP" }
},
{
    name: "AR WONDER",
    codes: ['100173'],
    maxDailyDose: "1 tablet daily",
    liver: { safe: true, emoji: "✅", firstChoice: "Natural supplement" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal concerns" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose unknown ingredients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No known BP effect" }
},
{
    name: "BEE Q DRINK",
    codes: ['103336'],
    maxDailyDose: "220 mL daily",
    liver: { safe: true, emoji: "✅", firstChoice: "Natural bee product" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidneys" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: false, emoji: "⚠", firstChoice: "High sugar content—monitor glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "DYNAMISAN",
    codes: ['100720'],
    maxDailyDose: "1 tablet daily",
    liver: { safe: true, emoji: "✅", firstChoice: "Multivitamin supplement" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor minerals in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardiovascular support" },
    dm: { safe: true, emoji: "✅", firstChoice: "May help glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP concerns" }
},
{
    name: "NIGELLA + ROYAL JELLY",
    codes: ['100732'],
    maxDailyDose: "2 capsules daily",
    liver: { safe: true, emoji: "✅", firstChoice: "Natural hepatoprotective" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidneys" },
    heart: { safe: true, emoji: "✅", firstChoice: "May improve cardiac health" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May affect glucose—monitor" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May lower BP naturally" }
},
{
    name: "CHOLIN SUPPLEMENTS",
    codes: ['107500'],
    maxDailyDose: "550 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "Beneficial for liver" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidneys" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "May help glucose metabolism" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
        // ======= GLUCOSAMINE - مجموعة أكواد =======  
        {
            name: "GLUCOSAMINE",
            codes: ['103203', '100109', '508148', '100698', '103470', '106419', '106413', '106353', '102663', '106325', '106345', '101034', '102944', '101035', '102827', '102826', '102632', '105238', '107620', '107102', '101739', '510074', '102042', '107515'],
            maxDailyDose: "3200 mg/day PO max (typical 1500mg/day)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver - no hepatotoxicity" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics - may improve glucose tolerance" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= GLUTATHIONE - مجموعة أكواد =======  
        {
            name: "GLUTATHIONE",
            codes: ['105106', '106373', '106415', '105865', '107581', '508720', '102633', '106481'],
            maxDailyDose: "500 mg/day PO max (up to 2000mg studied but not recommended long-term)",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Hepatotoxic at high doses >248mg/kg - monitor LFTs" },
            kidney: { safe: false, emoji: "⚠️", firstChoice: "Nephrotoxic at high doses - monitor kidney function" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "No effect on glucose" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= GLYCEROL (GLYCERIN) - مجموعة أكواد =======  
        {
            name: "GLYCEROL",
            codes: ['107453', '107454', '106846', '106845', '106844', '101038', '107231', '107230', '101250', '101251', '107229'],
            maxDailyDose: "4 g rectal once daily max (adult suppository)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= GLYCERYL TRINITRATE - مجموعة أكواد =======  
        {
            name: "GLYCERYL TRINITRATE",
            codes: ['101546', '101547', '101548'],
            maxDailyDose: "20 mg/day transdermal max (typically 5-10mg/24hr patch)",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in severe hepatic impairment" },
            kidney: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in severe renal impairment" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "Contraindicated in severe hypotension, aortic stenosis" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "❌", firstChoice: "Causes hypotension - monitor BP closely" }
        },

        // ======= GOLIMUMAB - مجموعة أكواد =======  
        {
            name: "GOLIMUMAB",
            codes: ['106300', '103660', '102964'],
            maxDailyDose: "50 mg SC monthly OR 2 mg/kg IV Q8W max",
            liver: { safe: false, emoji: "❌", firstChoice: "Black box warning - hepatotoxicity, monitor LFTs" },
            kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "May worsen heart failure - contraindicated in NYHA III-IV" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "Increases infection risk - monitor glucose" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No direct effect on BP" }
        },

        // ======= GOSERELIN - مجموعة أكواد =======  
        {
            name: "GOSERELIN",
            codes: ['102830'],
            maxDailyDose: "3.6 mg SC monthly OR 10.8 mg SC Q12W max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "May prolong QTc interval - monitor ECG" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "May worsen diabetes - monitor glucose" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No direct effect on BP" }
        },

        // ======= GRANISETRON - مجموعة أكواد =======  
        {
            name: "GRANISETRON",
            codes: ['103380', '103374', '103381'],
            maxDailyDose: "3 mg/day IV max OR 2 mg PO daily max",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in hepatic impairment" },
            kidney: { safe: false, emoji: "⚠️", firstChoice: "CrCl <30: give Q14 days max" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "May prolong QT interval - monitor ECG" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= GRAZOPREVIR + ELBASVIR - مجموعة أكواد =======  
        {
            name: "GRAZOPREVIR,ELBASVIR",
            codes: ['103407'],
            maxDailyDose: "100 mg/50 mg PO daily x 12 weeks max",
            liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in decompensated liver disease" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= GUAIFENESIN - مجموعة أكواد =======  
        {
            name: "GUAIFENESIN",
            codes: ['101044', '101471', '101722', '101969', '103270', '101045', '103667', '101968'],
            maxDailyDose: "2400 mg/day PO max (400mg Q4H)",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in liver disease" },
            kidney: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in kidney disease" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in heart disease" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "Contraindicated in diabetes" },
            hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated in hypertension" }
        },

        // ======= GUSELKUMAB - مجموعة أكواد =======  
        {
            name: "GUSELKUMAB",
            codes: ['103646'],
            maxDailyDose: "100 mg SC Q8W maintenance max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HALOPERIDOL - مجموعة أكواد =======  
        {
            name: "HALOPERIDOL",
            codes: ['105631'],
            maxDailyDose: "100 mg/day PO max (typical 0.5-5mg BID-TID)",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Hepatic impairment increases plasma levels - reduce dose" },
            kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed for CKD" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "May prolong QTc - monitor ECG, avoid in arrhythmias" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause orthostatic hypotension" }
        },

        // ======= HYDROCHLOROTHIAZIDE - مجموعة أكواد =======  
        {
            name: "HYDROCHLOROTHIAZIDE",
            codes: ['100788', '107256', '103631'],
            maxDailyDose: "50 mg/day PO max (typical 12.5-25mg daily)",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in liver disease - may precipitate coma" },
            kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <30 ml/min" },
            heart: { safe: true, emoji: "✅", firstChoice: "First-line for hypertension" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "May worsen glucose tolerance - monitor HbA1c" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "First-line antihypertensive" }
        },

        // ======= HYDROCORTISONE - مجموعة أكواد =======  
        {
            name: "HYDROCORTISONE",
            codes: ['100062', '100063', '100548', '101306', '101307', '101308', '101309', '101910', '101911', '102095', '102096'],
            maxDailyDose: "400 mg/day IV max OR 30g/day topical max",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Use with caution - may worsen hepatic impairment" },
            kidney: { safe: false, emoji: "⚠️", firstChoice: "Use with caution - fluid retention risk" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "May worsen heart failure - monitor fluid balance" },
            dm: { safe: false, emoji: "❌", firstChoice: "Worsens hyperglycemia - monitor glucose closely" },
            hypertension: { safe: false, emoji: "❌", firstChoice: "Worsens hypertension - monitor BP" }
        },

        // ======= HYDROXYCHLOROQUINE - مجموعة أكواد =======  
        {
            name: "HYDROXYCHLOROQUINE",
            codes: ['103354', '101750'],
            maxDailyDose: "400 mg/day PO max (6.5 mg/kg/day)",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in liver disease" },
            kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in CKD - monitor levels" },
            heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in cardiomyopathy, QT prolongation" },
            dm: { safe: true, emoji: "✅", firstChoice: "May improve glucose control in diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No direct effect on BP" }
        },

        // ======= HYDROXYPROGESTERONE - مجموعة أكواد =======  
        {
            name: "HYDROXYPROGESTERONE",
            codes: ['101793'],
            maxDailyDose: "250 mg IM weekly max",
            liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in liver disease/tumors" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "May increase CV risk - monitor" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "May worsen glucose tolerance" },
            hypertension: { safe: false, emoji: "⚠️", firstChoice: "May increase BP - monitor" }
        },

        // ======= HYDROXYUREA - مجموعة أكواد =======  
        {
            name: "HYDROXYUREA",
            codes: ['107289', '107379', '103570', '103424'],
            maxDailyDose: "3000 mg/day PO max (typically 15-35 mg/kg/day)",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs - hepatotoxicity risk" },
            kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose if CrCl <60 ml/min" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HYDROXYZINE - مجموعة أكواد =======  
        {
            name: "HYDROXYZINE",
            codes: ['103342'],
            maxDailyDose: "600 mg/day PO max (typical 25-100mg QID)",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose 33% in liver impairment" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "May prolong QTc interval - avoid in arrhythmias" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause hypotension" }
        },

        // ======= HYOSCINE (SCOPOLAMINE) - مجموعة أكواد =======  
        {
            name: "HYOSCINE",
            codes: ['100352', '106077', '106915', '101109', '101567', '101930', '101931', '102010', '102011', '102012', '103612', '103615'],
            maxDailyDose: "60 mg/day PO max (20mg TID)",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in liver disease" },
            kidney: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in kidney disease" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "May cause tachycardia - monitor HR" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No direct effect on BP" }
        },

        // ======= IBANDRONIC ACID - مجموعة أكواد =======  
        {
            name: "IBANDRONIC ACID",
            codes: ['100340', '106469'],
            maxDailyDose: "150 mg PO monthly OR 3 mg IV Q3M max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <30 ml/min" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },
        // ======= MINOXIDIL - مجموعة أكواد =======  
        {
            name: "MINOXIDIL",
            codes: ['102864', '102863', '101060', '101061', '101058', '101059', '103442', '102908'],
            maxDailyDose: "100 mg/day topical max (10ml of 5% solution) OR 100mg/day oral max",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs - hepatic metabolism" },
            kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in renal impairment" },
            heart: { safe: false, emoji: "❌", firstChoice: "BLACK BOX WARNING - pericardial effusion, cardiac tamponade risk" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "❌", firstChoice: "Causes hypotension - monitor BP closely" }
        },

        // ======= GLYCOPYRRONIUM,INDACATEROL - مجموعة أكواد =======  
        {
            name: "GLYCOPYRRONIUM,INDACATEROL",
            codes: ['102977'],
            maxDailyDose: "110/50 mcg inhaled BID max (220/100 mcg total daily)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe in mild-moderate hepatic impairment" },
            kidney: { safe: false, emoji: "⚠️", firstChoice: "Glycopyrronium accumulates in severe CKD - monitor" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "May cause tachycardia, arrhythmias - monitor ECG" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No direct effect on BP" }
        },

        // ======= GLYCYRRHETINIC ACID,TELMESTEIN - مجموعة أكواد =======  
        {
            name: "GLYCYRRHETINIC ACID",
            codes: ['105180', '102551'],
            maxDailyDose: "Apply topically BID-TID max (no systemic limit established)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for topical use" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for topical use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for topical use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= GROWTH FORMULA SUPPLEMENTS - مجموعة أكواد =======  
        {
            name: "GROWTH FORMULA SUPPLEMENTS",
            codes: ['105885', '105884', '105883', '105882'],
            maxDailyDose: "1-2 sachets daily max (as per manufacturer instructions)",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe nutritional supplements" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may contain sugars" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= ELECTROLYTE SOLUTIONS (HEALTHY GLUCOSE) - مجموعة أكواد =======  
        {
            name: "ELECTROLYTE SOLUTIONS",
            codes: ['107210', '107212', '107209', '107207', '107213', '107211', '107208', '107206', '102393'],
            maxDailyDose: "4-6 sachets/tablets daily max during illness (as per dehydration needs)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor electrolytes in CKD patients" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor sodium intake in heart failure" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "Contains glucose - monitor blood sugar" },
            hypertension: { safe: false, emoji: "⚠️", firstChoice: "Contains sodium - monitor BP" }
        },

        // ======= HERBAL ANALGESIC PRODUCTS - مجموعة أكواد =======  
        {
            name: "HERBAL ANALGESICS",
            codes: ['100191', '100884', '100885', '101132', '508528', '507804', '105030', '102892', '102893', '106912'],
            maxDailyDose: "As per individual product instructions (no standardized max dose)",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safer than NSAIDs" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safer than NSAIDs for CKD" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safer than NSAIDs for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL COUGH PRODUCTS - مجموعة أكواد =======  
        {
            name: "HERBAL COUGH PRODUCTS",
            codes: ['103144', '106474', '100023', '507983', '103143', '103145', '100345', '105184', '106302', '103387', '100738', '100819', '101063', '103696', '101155', '103390', '105197', '105198', '508068', '101164', '102521', '101372', '101402', '107054', '508162', '102667', '101797', '102524', '508265', '102082', '105121', '102662', '102246', '102247'],
            maxDailyDose: "15-30ml TID max (syrup) OR 2-3 capsules TID max",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe herbal extracts" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "Syrups may contain sugar - monitor glucose" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL DIGESTIVE PRODUCTS - مجموعة أكواد =======  
        {
            name: "HERBAL DIGESTIVES",
            codes: ['107438', '100327', '100328', '105218', '100534', '105190', '105033', '102851', '101500', '107626', '107346', '100396', '102643', '106343', '102659'],
            maxDailyDose: "1-2 capsules TID max OR 15ml TID syrup max",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally hepato-protective herbs" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "May improve digestion in diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL PAIN MANAGEMENT - مجموعة أكواد =======  
        {
            name: "HERBAL PAIN MANAGEMENT",
            codes: ['105186', '105188', '105189', '107443', '102777', '105381', '105383', '105382', '106555', '106556', '105317', '103267', '103265', '103266', '102525', '105322', '102624', '102825', '105324', '105320', '102617', '105187', '102974', '105316', '105325', '100268', '103079', '103331', '103332', '103082', '105321', '105388', '105319', '102696', '105246', '103485', '106557', '105375', '103221', '105247', '102710', '102875', '105251', '100538', '100647', '103469', '105422', '101162', '106520', '106519', '105199', '103187', '103186', '102845', '103650', '106523', '102711', '101986', '103544', '102850', '102849', '102925', '102618', '103199', '100510', '105540', '507354', '101479', '101605', '105323', '102854'],
            maxDailyDose: "Apply topically 3-4 times daily max (patches/creams/gels/sprays)",
            liver: { safe: true, emoji: "✅", firstChoice: "Topical use - minimal systemic absorption" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD - topical application" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL ORAL CARE - مجموعة أكواد =======  
        {
            name: "HERBAL ORAL CARE",
            codes: ['102973', '102492', '100357', '100975', '100976', '103092', '102608', '105196', '105195', '105871', '105870', '105481', '105483', '107462'],
            maxDailyDose: "Apply 3-4 times daily to affected areas max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL HEMORRHOIDS PRODUCTS - مجموعة أكواد =======  
        {
            name: "HERBAL HEMORRHOIDS",
            codes: ['103243', '103188', '102563', '103542', '102601', '105868', '101510', '101513', '507442', '105250', '102891', '102564', '101511', '101512', '106149', '105493', '106150', '508067'],
            maxDailyDose: "Apply ointment/gel BID-TID max OR 1-2 suppositories daily max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL LAXATIVES - مجموعة أكواد =======  
        {
            name: "HERBAL LAXATIVES",
            codes: ['100053', '100199', '100271', '100317', '106521', '105498', '105497', '103173', '101215', '101246', '105615', '101466', '106472', '102838', '101497', '102628', '102451', '105205', '508722', '106431', '106429', '103437', '103436', '102772', '102022'],
            maxDailyDose: "1-3 sachets/tablets daily max OR 15-30ml daily liquid max",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe for liver patients" },
            kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor electrolytes - risk of dehydration" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor electrolytes in heart failure" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - some contain sugars" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Generally safe for BP" }
        },

        // ======= HERBAL ANTI-STRESS PRODUCTS - مجموعة أكواد =======  
        {
            name: "HERBAL ANTI-STRESS",
            codes: ['107349', '106374', '106363', '106901', '106219', '508060', '508153', '106458'],
            maxDailyDose: "1-2 capsules BID max OR 1-2 sticks daily max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce stress-related BP" }
        },

        // ======= HERBAL HAIR & SKIN PRODUCTS - مجموعة أكواد =======  
        {
            name: "HERBAL HAIR & SKIN",
            codes: ['103069', '507366', '508524', '508523', '103240', '508490', '103340', '103463', '103462', '103461', '508420', '507805', '507355', '102898', '509398', '508491', '102360'],
            maxDailyDose: "1-2 vials daily max OR 1-2 capsules daily max OR apply topically BID",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL IMMUNITY PRODUCTS - مجموعة أكواد =======  
        {
            name: "HERBAL IMMUNITY",
            codes: ['100201', '103176', '107427', '107428', '508529', '508808', '507980', '507365'],
            maxDailyDose: "1-2 capsules daily max OR 1 sachet daily max OR 30ml spray daily max",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally hepato-protective" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "May improve immune function in diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL JOINT PRODUCTS - مجموعة أكواد =======  
        {
            name: "HERBAL JOINTS",
            codes: ['100188', '508154', '508064', '508062'],
            maxDailyDose: "1-2 capsules BID max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safer than NSAIDs for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL LIVER PRODUCTS - مجموعة أكواد =======  
        {
            name: "HERBAL LIVER",
            codes: ['102919'],
            maxDailyDose: "1-2 capsules daily max",
            liver: { safe: true, emoji: "✅", firstChoice: "Hepatoprotective herbs" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL PROSTATE PRODUCTS - مجموعة أكواد =======  
        {
            name: "HERBAL PROSTATE",
            codes: ['106417', '106367', '105866'],
            maxDailyDose: "1-2 softgels daily max OR 1 sachet daily max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL UTI PRODUCTS - مجموعة أكواد =======  
        {
            name: "HERBAL UTI",
            codes: ['106424', '106342', '508152'],
            maxDailyDose: "1 sachet BID max OR 1-2 capsules BID max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "May support kidney health" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL VISION PRODUCTS - مجموعة أكواد =======  
        {
            name: "HERBAL VISION",
            codes: ['106406'],
            maxDailyDose: "1-2 softgels daily max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "May benefit diabetic retinopathy" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL WEIGHT PRODUCTS - مجموعة أكواد =======  
        {
            name: "HERBAL WEIGHT MANAGEMENT",
            codes: ['102148', '100194', '105244', '101518', '102773', '508065', '102625', '107540', '107072', '105326'],
            maxDailyDose: "1-2 capsules BID max OR 1 vial daily max OR 450ml suspension max",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe for liver" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor HR/BP - some contain stimulants" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may affect blood sugar" },
            hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - some contain stimulants" }
        },

        // ======= HERBAL WOMEN'S PRODUCTS - مجموعة أكواد =======  
        {
            name: "HERBAL WOMEN'S HEALTH",
            codes: ['100195', '102497', '102239'],
            maxDailyDose: "1-2 capsules daily max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL WOUND HEALING - مجموعة أكواد =======  
        {
            name: "HERBAL WOUND HEALING",
            codes: ['102846', '102847', '102848', '100727', '105191', '105434', '105348', '103543', '105183', '100544', '102972', '507396', '507217', '507397', '102582', '105124', '100882', '100883', '103197', '102562', '102828', '101087', '101088', '102843', '102844', '102840', '102842', '105869', '102809', '103242', '103128', '103129'],
            maxDailyDose: "Apply BID-TID to affected areas max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "May improve wound healing in diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HERBAL EAR SOLUTIONS - مجموعة أكواد =======  
        {
            name: "HERBAL EAR SOLUTIONS",
            codes: ['509480', '509481', '509482', '106849', '105202', '106848', '102894', '105511', '105507', '105207'],
            maxDailyDose: "2-3 drops BID-TID max OR spray BID max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HONEY PRODUCTS - مجموعة أكواد =======  
        {
            name: "HONEY PRODUCTS",
            codes: ['102923', '102922', '102921', '102924', '105161', '105159', '105160', '105158'],
            maxDailyDose: "2-3 tablespoons daily max OR 4-6 lozenges daily max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: false, emoji: "❌", firstChoice: "High glucose content - avoid in uncontrolled diabetes" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HORSE CHESTNUT PRODUCTS - مجموعة أكواد =======  
        {
            name: "HORSE CHESTNUT",
            codes: ['100141', '100192'],
            maxDailyDose: "150 mg aescin/day max (typically 600mg extract daily)",
            liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in liver disease" },
            kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated in kidney disease" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "Interacts with anticoagulants - bleeding risk" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "May lower blood glucose - monitor levels" },
            hypertension: { safe: false, emoji: "⚠️", firstChoice: "Diuretic effect - may affect BP medications" }
        },

        // ======= HUMAN IMMUNOGLOBULIN - مجموعة أكواد =======  
        {
            name: "HUMAN IMMUNOGLOBULIN",
            codes: ['103358'],
            maxDailyDose: "2400 mg/kg IV max (high-dose therapy) OR 800 mg/kg/month replacement",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: false, emoji: "❌", firstChoice: "HIGH NEPHROTOXICITY RISK - monitor kidney function closely" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "Risk of thrombotic events - monitor cardiac status" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause hypertension - monitor BP" }
        },

        // ======= HUMAN MENOPAUSAL GONADOTROPHIN - مجموعة أكواد =======  
        {
            name: "HUMAN MENOPAUSAL GONADOTROPHIN",
            codes: ['107599', '101404', '101409', '101410', '106272', '106271'],
            maxDailyDose: "450 IU daily max (typically 150-225 IU daily)",
            liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in liver disease - hepatic metabolism" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "May increase thrombotic risk - monitor" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "⚠️", firstChoice: "May worsen hypertension - monitor BP" }
        },

        // ======= HYALURONIC ACID PRODUCTS - مجموعة أكواد =======  
        {
            name: "HYALURONIC ACID",
            codes: ['103434', '105347', '509390', '509402'],
            maxDailyDose: "200 mg/day PO max OR apply topically BID max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= HEXAMINE,PIPERAZINE,KHELLIN - مجموعة أكواد =======  
        {
            name: "HEXAMINE COMBINATIONS",
            codes: ['103770'],
            maxDailyDose: "2 sachets BID max (specific UTI combination)",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in liver impairment" },
            kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor kidney function - urinary antiseptic" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= CHLORAMPHENICOL,DEXAMETHASONE - مجموعة أكواد =======  
        {
            name: "CHLORAMPHENICOL,DEXAMETHASONE",
            codes: ['102111', '102110'],
            maxDailyDose: "1-2 drops Q4H max (topical eye use only)",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Chloramphenicol - rare aplastic anemia risk" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD - topical eye use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "Steroid may worsen glucose control" },
            hypertension: { safe: false, emoji: "⚠️", firstChoice: "Steroid may increase BP" }
        },

        // ======= HOMATROPINE HYDROBROMIDE - مجموعة أكواد =======  
        {
            name: "HOMATROPINE",
            codes: ['101086'],
            maxDailyDose: "1-2 drops TID max (eye drops only)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "⚠️", firstChoice: "May cause tachycardia - use with caution" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "May precipitate angle-closure glaucoma" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No direct effect on BP" }
        },

        // ======= HYDROCORT,NATAMYCIN,NEOMYCIN - مجموعة أكواد =======  
        {
            name: "HYDROCORTISONE,NATAMYCIN,NEOMYCIN",
            codes: ['101742', '101743'],
            maxDailyDose: "Apply BID-TID max (topical combination only)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients - topical use" },
            kidney: { safe: false, emoji: "⚠️", firstChoice: "Neomycin nephrotoxicity - avoid large surface area" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "Steroid may worsen glucose control" },
            hypertension: { safe: false, emoji: "⚠️", firstChoice: "Steroid may increase BP" }
        },
    // ======= ILOPROST - مجموعة أكواد =======  
    {
        name: "ILOPROST",
        codes: ['103678'],
        maxDailyDose: "45 mcg/day (5 mcg × 9 times daily max evaluated)",
        liver: { safe: false, emoji: "❌", firstChoice: "Epoprostenol or Treprostinil (safer prostacyclins)" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in severe CKD - clearance significantly reduced" },
        heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe CAD, MI <6 months, decompensated HF" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "May cause severe hypotension" }
    },

    // ======= IMATINIB MESILATE - مجموعة أكواد =======  
    {
        name: "IMATINIB MESILATE",
        codes: ['103379', '103004', '105859', '105852', '105752', '105751'],
        maxDailyDose: "800 mg/day max (400mg BID for advanced disease)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - dose reduction needed if ALT >5x ULN" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Maximum 400mg/day if moderate CKD, avoid if severe" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients - monitor for fluid retention" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "May cause mild fluid retention" }
    },

    // ======= IMIDAPRIL HYDROCHLORIDE - مجموعة أكواد =======  
    {
        name: "IMIDAPRIL HYDROCHLORIDE",
        codes: ['102176', '102177'],
        maxDailyDose: "10 mg/day max (elderly), 20 mg/day max (adults)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - predominantly renally excreted" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective ACE inhibitor" },
        dm: { safe: true, emoji: "✅", firstChoice: "Beneficial for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "First-line antihypertensive" }
    },

    // ======= IMIPENEM, CILASTATIN - مجموعة أكواد =======  
    {
        name: "IMIPENEM, CILASTATIN",
        codes: ['103744'],
        maxDailyDose: "4000 mg/day imipenem (1000mg QID max)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Dose adjustment required - reduce frequency with CKD" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
    },

    // ======= IMIQUIMOD - مجموعة أكواد =======  
    {
        name: "IMIQUIMOD",
        codes: ['102889', '105627'],
        maxDailyDose: "Apply to affected area 3x/week (topical max frequency)",
        liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption - safe" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption - safe" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No systemic BP effects" }
    },

    // ======= INDAPAMIDE - مجموعة أكواد =======  
    {
        name: "INDAPAMIDE",
        codes: ['101496', '103845', '103055'],
        maxDailyDose: "2.5 mg/day max (doses >2.5mg only increase side effects)",
        liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in hepatic encephalopathy/severe liver disease" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <30 ml/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective diuretic - first choice for HTN" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May worsen glucose tolerance - monitor HbA1c" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "First-line antihypertensive diuretic" }
    },

    // ======= INDOMETHACIN - مجموعة أكواد =======  
    {
        name: "INDOMETHACIN",
        codes: ['101978', '101129', '105800'],
        maxDailyDose: "200 mg/day max (150-200mg daily for RA)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - discontinue if hepatotoxicity develops" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in advanced renal disease - nephrotoxic NSAID" },
        heart: { safe: false, emoji: "❌", firstChoice: "High CV risk - avoid in heart failure" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia signs" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "May worsen BP control - avoid" }
    },

    // ======= INFLIXIMAB - مجموعة أكواد =======  
    {
        name: "INFLIXIMAB",
        codes: ['106509', '103209', '107355', '107244'],
        maxDailyDose: "5 mg/kg/dose max (10mg/kg contraindicated in heart failure)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor for hepatotoxicity - rare hepatic events" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated >5mg/kg if NYHA III/IV - increased mortality" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor for infections - uncontrolled DM is caution" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INSULIN ASPART - مجموعة أكواد =======  
    {
        name: "INSULIN ASPART",
        codes: ['102823', '101570', '101571', '101576', '101577', '107242', '107384', '103104', '107385', '103377', '103607'],
        maxDailyDose: "0.6 unit/kg/day max (individualized dosing)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment - decreased metabolism" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in renal impairment - prolonged action" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for fluid retention with thiazolidinediones" },
        dm: { safe: true, emoji: "✅", firstChoice: "First-line rapid-acting insulin for T1DM & T2DM" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - may improve BP control via glycemic control" }
    },

    // ======= INSULIN GLARGINE - مجموعة أكواد =======  
    {
        name: "INSULIN GLARGINE",
        codes: ['103635', '101239', '101240', '107658', '103362', '103151'],
        maxDailyDose: "0.6 unit/kg/day max (basal insulin - individualized)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "First-line long-acting insulin" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= IPRATROPIUM BROMIDE - مجموعة أكواد =======  
    {
        name: "IPRATROPIUM BROMIDE",
        codes: ['107365', '107237', '100226', '100227'],
        maxDailyDose: "2 mg/day max adults (500mcg QID max nebulized)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - minimal renal elimination" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Caution in cardiac arrhythmias - anticholinergic effects" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= IRBESARTAN - مجموعة أكواد =======  
    {
        name: "IRBESARTAN",
        codes: ['100166', '100167', '106232', '100177', '100178', '100179', '103035', '103036', '103640', '105133', '105134'],
        maxDailyDose: "300 mg/day max (once daily dosing)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose if hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - may cause hyperkalemia" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective ARB - reduces CV events" },
        dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective - first choice for diabetic nephropathy" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "First-line ARB for hypertension" }
    },

    // ======= ISOTRETINOIN - مجموعة أكواد =======  
    {
        name: "ISOTRETINOIN",
        codes: ['102484', '102485', '102965', '101965', '101966', '102368', '102369'],
        maxDailyDose: "2 mg/kg/day max (typically 0.5-1 mg/kg/day)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs monthly - hepatotoxic" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor lipids - may increase triglycerides" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May affect glucose tolerance" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= ITRACONAZOLE - مجموعة أكواد =======  
    {
        name: "ITRACONAZOLE",
        codes: ['101152', '101153', '102113', '102114', '102227', '102228'],
        maxDailyDose: "400 mg/day max (200mg BID for systemic infections)",
        liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in liver disease - hepatotoxic" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "❌", firstChoice: "Negative inotropic - avoid in heart failure" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= IVABRADINE - مجموعة أكواد =======  
    {
        name: "IVABRADINE",
        codes: ['101775', '101776'],
        maxDailyDose: "15 mg/day max (7.5mg BID)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in moderate hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients - no dose adjustment" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Only for HFrEF patients - monitor heart rate" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - no BP lowering effect" }
    },

    // ======= JOSAMYCIN - مجموعة أكواد =======  
    {
        name: "JOSAMYCIN",
        codes: ['101163'],
        maxDailyDose: "3000 mg/day max (1000mg TID)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs - potential hepatotoxicity" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - mainly biliary elimination" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= KETOCONAZOLE - مجموعة أكواد =======  
    {
        name: "KETOCONAZOLE",
        codes: ['103591', '101190', '101551', '101550'],
        maxDailyDose: "400 mg/day max oral (200mg BID), topical unlimited",
        liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated - severe hepatotoxicity risk" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "QT prolongation risk - monitor ECG" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= KETOPROFEN - مجموعة أكواد =======  
    {
        name: "KETOPROFEN",
        codes: ['101194', '101782', '101783', '100831'],
        maxDailyDose: "300 mg/day max oral, topical 4x daily max",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - NSAID hepatotoxicity risk" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - nephrotoxic NSAID" },
        heart: { safe: false, emoji: "❌", firstChoice: "CV risk - avoid in heart disease" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "May worsen BP control" }
    },

    // ======= KETOROLAC TROMETAMOL - مجموعة أكواد =======  
    {
        name: "KETOROLAC TROMETAMOL",
        codes: ['100029', '100030', '103895', '107399'],
        maxDailyDose: "40 mg/day max (short-term use ≤5 days)",
        liver: { safe: false, emoji: "❌", firstChoice: "Avoid in hepatic impairment" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated in renal impairment" },
        heart: { safe: false, emoji: "❌", firstChoice: "High CV risk - avoid in cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May affect glucose control" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "May worsen hypertension" }
    },

    // ======= KETOTIFIN - مجموعة أكواد =======  
    {
        name: "KETOTIFEN",
        codes: ['102384', '102385', '100207', '101083', '101195', '102615', '102383', '100208', '102382'],
        maxDailyDose: "4 mg/day max adults (2mg BID), eye drops 2x daily",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LABETALOL HYDROCHLORIDE - مجموعة أكواد =======  
    {
        name: "LABETALOL HYDROCHLORIDE",
        codes: ['102229', '103909'],
        maxDailyDose: "2400 mg/day max (400mg TID typically)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - no dose adjustment needed" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Avoid in severe bradycardia/heart block" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia - use with caution" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Excellent for hypertensive emergencies" }
    },

    // ======= LACOSAMIDE - مجموعة أكواد =======  
    {
        name: "LACOSAMIDE",
        codes: ['105641', '105543', '105544', '105545', '105546', '105640', '105634', '105639', '105633', '103412', '103404', '103405', '103403'],
        maxDailyDose: "400 mg/day max (200mg BID)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in moderate-severe hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose if CrCl <30 ml/min" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for PR prolongation - cardiac conduction effects" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LACTULOSE - مجموعة أكواد =======  
    {
        name: "LACTULOSE",
        codes: ['100714', '100818', '101224', '107254', '101248', '101249'],
        maxDailyDose: "40 ml/day max for constipation (higher for hepatic encephalopathy)",
        liver: { safe: true, emoji: "✅", firstChoice: "Excellent for hepatic encephalopathy" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - contains sugars" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LAMIVUDINE - مجموعة أكواد =======  
    {
        name: "LAMIVUDINE",
        codes: ['102392'],
        maxDailyDose: "300 mg/day max for HIV, 100mg/day for HBV",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor for lactic acidosis and hepatomegaly" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose adjustment required - renally eliminated" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May cause lactic acidosis" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LAMOTRIGINE - مجموعة أكواد =======  
    {
        name: "LAMOTRIGINE",
        codes: ['101225', '101226', '101227', '101228', '101229', '101230', '103454', '103453', '105646', '105645', '102540', '101347', '101348'],
        maxDailyDose: "400 mg/day max (200mg BID typically)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed in renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LANSOPRAZOLE - مجموعة أكواد =======  
    {
        name: "LANSOPRAZOLE",
        codes: ['105050', '102459', '103148', '101241', '102603', '102602', '101728', '105478', '101729', '101730', '102172', '102173', '102263', '102264'],
        maxDailyDose: "30 mg/day max (15mg maintenance)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in severe hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - no dose adjustment needed" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LATANOPROST - مجموعة أكواد =======  
    {
        name: "LATANOPROST",
        codes: ['101244', '105637', '102362', '101245', '102361'],
        maxDailyDose: "1 drop daily in evening (prostaglandin analog)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LEFLUNOMIDE - مجموعة أكواد =======  
    {
        name: "LEFLUNOMIDE",
        codes: ['103825', '102932'],
        maxDailyDose: "20 mg/day max (10-20mg daily maintenance)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs monthly - hepatotoxic" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - may cause hypertension" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May worsen BP - monitor closely" }
    },

    // ======= LENALIDOMIDE - مجموعة أكواد =======  
    {
        name: "LENALIDOMIDE",
        codes: ['106044', '105750', '105749', '107329', '103686', '103853', '106031'],
        maxDailyDose: "25 mg/day max (varies by indication)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs - potential hepatotoxicity" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose adjustment required if CrCl <60 ml/min" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for thrombotic events" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor for thrombotic complications" }
    },

    // ======= LENVATINIB - مجموعة أكواد =======  
    {
        name: "LENVATINIB",
        codes: ['105860', '103787'],
        maxDailyDose: "24 mg/day max (varies by indication and BSA)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - hepatotoxicity risk" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - proteinuria risk" },
        heart: { safe: false, emoji: "❌", firstChoice: "Cardiac toxicity - monitor LVEF and BP" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May affect glucose metabolism" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "Significant HTN risk - monitor BP closely" }
    },

    // ======= LERCANIDIPINE HYDROCHLORIDE - مجموعة أكواد =======  
    {
        name: "LERCANIDIPINE HYDROCHLORIDE",
        codes: ['101257', '103247', '106527', '106528', '106529', '106530'],
        maxDailyDose: "20 mg/day max (10-20mg once daily)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Avoid in severe hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for mild-moderate CKD" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe CCB for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Excellent for hypertension - long-acting CCB" }
    },

    // ======= LETROZOLE - مجموعة أكواد =======  
    {
        name: "LETROZOLE",
        codes: ['100841', '106067', '105863'],
        maxDailyDose: "2.5 mg/day (standard dose)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor in hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor lipids and cardiovascular risk" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LEVETIRACETAM - مجموعة أكواد =======  
    {
        name: "LEVETIRACETAM",
        codes: ['103806', '103807', '101192', '103515', '103642', '107553', '107649', '105027', '105028', '105844', '103302', '103393', '101193', '103514', '103513', '103452', '103327', '103328', '107554'],
        maxDailyDose: "3000 mg/day max (1500mg BID)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - no hepatic metabolism" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose adjustment required - renally eliminated" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LEVOCETIRIZINE - مجموعة أكواد =======  
    {
        name: "LEVOCETIRIZINE",
        codes: ['105791', '103451', '105857', '101264', '102379'],
        maxDailyDose: "5 mg/day max adults (2.5mg for elderly/CKD)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose if CrCl <50 ml/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LEVOFLOXACIN - مجموعة أكواد =======  
    {
        name: "LEVOFLOXACIN",
        codes: ['103435', '105560', '105104', '102481', '103142', '105696', '105697', '106243', '106244', '101262', '101263', '105125', '107370', '102180', '102181', '107251'],
        maxDailyDose: "750 mg/day max (500-750mg daily)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - no dose adjustment needed" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose adjustment required if CrCl <50 ml/min" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "QT prolongation risk - monitor ECG" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May cause hypo/hyperglycemia" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LEVOTHYROXINE - مجموعة أكواد =======  
    {
        name: "LEVOTHYROXINE",
        codes: ['100752', '100753', '100794', '100795', '100796', '100797', '107577', '107575', '107576'],
        maxDailyDose: "300 mcg/day max (typically 1.6 mcg/kg/day)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Start low in cardiac patients - may cause arrhythmias" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May increase insulin requirements" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May worsen hypertension if overdosed" }
    },

    // ======= LIDOCAINE - مجموعة أكواد =======  
    {
        name: "LIDOCAINE",
        codes: ['101269', '105554', '101915', '101252', '101266', '102452', '102786', '103913', '102374', '105384', '106231'],
        maxDailyDose: "4.5 mg/kg max without epinephrine (topical varies)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment - hepatic metabolism" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for cardiac toxicity - antiarrhythmic effects" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LINAGLIPTIN - مجموعة أكواد =======  
    {
        name: "LINAGLIPTIN",
        codes: ['105880', '105881', '106517', '106531', '102824'],
        maxDailyDose: "5 mg/day (standard dose)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - no dose adjustment needed" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - no dose adjustment needed" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Excellent for T2DM - DPP-4 inhibitor" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LINEZOLID - مجموعة أكواد =======  
    {
        name: "LINEZOLID",
        codes: ['105994', '103566', '105757'],
        maxDailyDose: "1200 mg/day max (600mg BID)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs - potential hepatotoxicity" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - no dose adjustment needed" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May cause hypoglycemia" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - MAO inhibitor effects" }
    },

    // ======= LIRAGLUTIDE - مجموعة أكواد =======  
    {
        name: "LIRAGLUTIDE",
        codes: ['102660', '103295'],
        maxDailyDose: "1.8 mg/day for diabetes, 3 mg/day for obesity",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Caution if CrCl <15 ml/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective - reduces CV events" },
        dm: { safe: true, emoji: "✅", firstChoice: "Excellent for T2DM - GLP-1 agonist" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "May improve BP control" }
    },

    // ======= LISINOPRIL - مجموعة أكواد =======  
    {
        name: "LISINOPRIL",
        codes: ['101270', '101271', '101272', '101292', '101293', '101294', '101295', '101296', '101297', '101298', '101299', '101300', '101301', '105178', '102397', '102398', '102399', '103602', '102412', '102413', '102414'],
        maxDailyDose: "40 mg/day max (80mg in heart failure)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - may cause hyperkalemia" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective - first choice post-MI and HF" },
        dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective for diabetic nephropathy" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "First-line ACE inhibitor" }
    },

    // ======= LOPERAMIDE - مجموعة أكواد =======  
    {
        name: "LOPERAMIDE",
        codes: ['103460', '101125', '103459', '102565'],
        maxDailyDose: "16 mg/day max (8mg initial then 4mg after each loose stool)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "High doses may cause QT prolongation" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LORATADINE - مجموعة أكواد =======  
    {
        name: "LORATADINE",
        codes: ['100611', '101328', '100497', '103091', '101329', '105480', '107265', '106113', '100492', '100499', '101017', '101318', '101321', '101323', '101325', '105698', '101331', '102210', '100491', '107221', '100498', '101016', '105179', '103097', '101319', '101320', '101322', '101324', '101330', '101332', '105662', '102209'],
        maxDailyDose: "10 mg/day max adults (5mg for children)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose if CrCl <30 ml/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LORNOXICAM - مجموعة أكواد =======  
    {
        name: "LORNOXICAM",
        codes: ['105267', '102365', '107397', '107240', '102366'],
        maxDailyDose: "16 mg/day max (8mg BID)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - NSAID hepatotoxicity" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - nephrotoxic NSAID" },
        heart: { safe: false, emoji: "❌", firstChoice: "CV risk - avoid in heart disease" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "May worsen BP control" }
    },
    // ======= IXAZOMIB - مجموعة أكواد =======  
    {
        name: "IXAZOMIB",
        codes: ['103728'],
        maxDailyDose: "4 mg weekly (days 1, 8, 15 of 28-day cycle)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - reduce to 3mg if moderate-severe hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce to 3mg if CrCl <30 ml/min or dialysis" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= IXEKIZUMAB - مجموعة أكواد =======  
    {
        name: "IXEKIZUMAB",
        codes: ['103559'],
        maxDailyDose: "160 mg initial dose, then 80 mg every 4 weeks",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor for infections - immunosuppressive effects" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor for infections - increased risk in uncontrolled DM" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= JOINT COLLAGEN - مجموعة أكواد =======  
    {
        name: "JOINT COLLAGEN",
        codes: ['106326', '103339', '103499', '107503', '103070', '107204', '106407', '107519', '107596', '507368', '107411', '508522', '508521', '103101'],
        maxDailyDose: "30 g/day max (varies by product formulation)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= KAOLIN, PECTIN - مجموعة أكواد =======  
    {
        name: "KAOLIN, PECTIN",
        codes: ['107468', '107469', '105835', '105695', '107383', '106246', '106252', '101183', '101184', '508161'],
        maxDailyDose: "30 ml QID max (antidiarrheal - as needed basis)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= L ARGININE - مجموعة أكواد =======  
    {
        name: "L ARGININE",
        codes: ['100111', '107537', '102645', '107613', '107105', '508740', '105157'],
        maxDailyDose: "6000 mg/day max (2-3g BID)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "May improve endothelial function" },
        dm: { safe: true, emoji: "✅", firstChoice: "May improve insulin sensitivity" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May lower BP - monitor if on antihypertensives" }
    },

    // ======= L-ORINTHINE,L-ASPARTATE - مجموعة أكواد =======  
    {
        name: "L-ORINTHINE,L-ASPARTATE",
        codes: ['101067'],
        maxDailyDose: "9 g/day max (3g TID for hepatic encephalopathy)",
        liver: { safe: true, emoji: "✅", firstChoice: "Excellent for hepatic encephalopathy - reduces ammonia" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LACTATION SUPPORTING - مجموعة أكواد =======  
    {
        name: "LACTATION SUPPORTING",
        codes: ['103449', '105055', '105268', '103276', '105269', '107617', '102658', '509337'],
        maxDailyDose: "1500 mg/day fenugreek max (galactagogue use)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - fenugreek may lower blood sugar" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LACTOFERRIN SUPPLEMENTS - مجموعة أكواد =======  
    {
        name: "LACTOFERRIN SUPPLEMENTS",
        codes: ['107590', '103483', '106076', '105220', '106513', '102815'],
        maxDailyDose: "200 mg/day max (immune support dosing)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LEVOBUNOLOL HYDROCHLORIDE - مجموعة أكواد =======  
    {
        name: "LEVOBUNOLOL HYDROCHLORIDE",
        codes: ['100287'],
        maxDailyDose: "2 drops BID max (0.5% solution - topical eye use)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in heart failure, bradycardia, heart block" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia signs" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May worsen hypotension" }
    },

    // ======= LEVOCABASTINE - مجموعة أكواد =======  
    {
        name: "LEVOCABASTINE",
        codes: ['101304'],
        maxDailyDose: "2 drops QID max (antihistamine eye drops)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LEVODOPA,CARBIDOPA,ENTACAPONE - مجموعة أكواد =======  
    {
        name: "LEVODOPA,CARBIDOPA,ENTACAPONE",
        codes: ['102986', '102116', '102987'],
        maxDailyDose: "1600 mg levodopa/day max (combination therapy)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs - entacapone hepatotoxicity risk" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for arrhythmias and orthostatic hypotension" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause orthostatic hypotension" }
    },

    // ======= LEVONORGESTREL - مجموعة أكواد =======  
    {
        name: "LEVONORGESTREL",
        codes: ['101431', '103046'],
        maxDailyDose: "1.5 mg single dose emergency contraception",
        liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in liver disease/tumors" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Caution in CV disease - thrombotic risk" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May worsen glucose tolerance" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May worsen hypertension" }
    },

    // ======= LID CARE PREP - مجموعة أكواد =======  
    {
        name: "LID CARE PREP",
        codes: ['102742'],
        maxDailyDose: "Apply BID max (eyelid hygiene product)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LIPASE INHIBITORS - مجموعة أكواد =======  
    {
        name: "LIPASE INHIBITORS",
        codes: ['102935', '102367'],
        maxDailyDose: "360 mg/day max (120mg TID with meals)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs - rare hepatotoxicity reported" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may improve diabetes but affects fat-soluble vitamins" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "May improve BP via weight loss" }
    },

    // ======= LIPID ABSORPTION REDUCTION - مجموعة أكواد =======  
    {
        name: "LIPID ABSORPTION REDUCTION",
        codes: ['103007', '100922', '100923', '101287'],
        maxDailyDose: "6 tablets/day max (fat binding supplements)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "May improve lipid profile" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LIPIDO ENHANCEMENT (MEN) - مجموعة أكواد =======  
    {
        name: "LIPIDO ENHANCEMENT (MEN)",
        codes: ['100117', '103465', '100981', '102646'],
        maxDailyDose: "30 mg yohimbine max/day (libido enhancement)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Caution in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Caution in renal impairment" },
        heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in heart disease - may cause arrhythmias" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated - may cause severe hypertension" }
    },

    // ======= LIPIDO ENHANCEMENT (WOMEN) - مجموعة أكواد =======  
    {
        name: "LIPIDO ENHANCEMENT (WOMEN)",
        codes: ['100142', '102598', '102648'],
        maxDailyDose: "Variable dosing (herbal libido supplements)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LISURIDE HYDROGEN MALEATE - مجموعة أكواد =======  
    {
        name: "LISURIDE HYDROGEN MALEATE",
        codes: ['100697'],
        maxDailyDose: "0.6 mg/day max (dopamine agonist for Parkinson's)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for cardiac valvulopathy with long-term use" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause orthostatic hypotension" }
    },

    // ======= LIXISENATIDE, INSULIN GLARGINE - مجموعة أكواد =======  
    {
        name: "LIXISENATIDE, INSULIN GLARGINE",
        codes: ['105058', '105059'],
        maxDailyDose: "50 mcg lixisenatide + 80 units glargine max/day",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Caution if CrCl <15 ml/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective - reduces CV events" },
        dm: { safe: true, emoji: "✅", firstChoice: "Excellent for T2DM - dual mechanism" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "May improve BP control" }
    },

    // ======= LOBE (IUD DEVICES) - مجموعة أكواد =======  
    {
        name: "LOBE (IUD DEVICES)",
        codes: ['103207', '103208', '103121', '103122', '103118', '101440', '101478', '101568', '103119', '103120'],
        maxDailyDose: "Single device insertion (contraceptive devices)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LOMEFLOXACIN - مجموعة أكواد =======  
    {
        name: "LOMEFLOXACIN",
        codes: ['101313', '101314'],
        maxDailyDose: "400 mg/day max (once daily quinolone)",
        liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce to 200mg daily if CrCl <40 ml/min" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "QT prolongation risk - avoid in cardiac arrhythmias" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May cause hypo/hyperglycemia" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LOTEPREDNOL ETABONATE - مجموعة أكواد =======  
    {
        name: "LOTEPREDNOL ETABONATE",
        codes: ['107222', '106516'],
        maxDailyDose: "4 drops QID max (topical ocular steroid)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor IOP - may increase intraocular pressure" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },
    // ======= INSULIN DEGLUDEC - مجموعة أكواد =======  
    {
        name: "INSULIN DEGLUDEC",
        codes: ['107384', '103104'],
        maxDailyDose: "80 units/day max (U-100), 160 units/day max (U-200)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment - decreased metabolism" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in renal impairment - prolonged action" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Ultra-long-acting basal insulin for T1DM & T2DM" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INSULIN DETEMIR - مجموعة أكواد =======  
    {
        name: "INSULIN DETEMIR",
        codes: ['101259', '101260'],
        maxDailyDose: "0.5 unit/kg/day max (individualized dosing)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Long-acting basal insulin" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INSULIN GLULISINE - مجموعة أكواد =======  
    {
        name: "INSULIN GLULISINE",
        codes: ['100148'],
        maxDailyDose: "0.6 unit/kg/day max (rapid-acting insulin)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Rapid-acting insulin for mealtime coverage" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INSULIN HUMAN - مجموعة أكواد =======  
    {
        name: "INSULIN HUMAN",
        codes: ['101096'],
        maxDailyDose: "0.6 unit/kg/day max (regular insulin)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Short-acting human insulin" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INSULIN ISOPHANE - مجموعة أكواد =======  
    {
        name: "INSULIN ISOPHANE",
        codes: ['101094', '101095', '101135'],
        maxDailyDose: "0.6 unit/kg/day max (NPH insulin)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Intermediate-acting NPH insulin" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INSULIN LISPRO - مجموعة أكواد =======  
    {
        name: "INSULIN LISPRO",
        codes: ['101093', '103248', '101089', '101090', '101091', '101092', '106089'],
        maxDailyDose: "0.6 unit/kg/day max (rapid-acting insulin)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Rapid-acting insulin for mealtime coverage" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INSULIN NEUTRAL - مجموعة أكواد =======  
    {
        name: "INSULIN NEUTRAL",
        codes: ['100026', '103854'],
        maxDailyDose: "0.6 unit/kg/day max (regular insulin)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Short-acting neutral insulin" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INSULIN NPH,REGULAR - مجموعة أكواد =======  
    {
        name: "INSULIN NPH,REGULAR",
        codes: ['101446', '101447'],
        maxDailyDose: "0.6 unit/kg/day max (premixed insulin)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Premixed insulin 30/70" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INSULIN PEN - مجموعة أكواد =======  
    {
        name: "INSULIN PEN",
        codes: ['101575'],
        maxDailyDose: "Device only (no active medication)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - injection device only" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - injection device only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - injection device only" },
        dm: { safe: true, emoji: "✅", firstChoice: "Insulin delivery device" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - injection device only" }
    },

    // ======= INSULIN PEN NEEDLE - مجموعة أكواد =======  
    {
        name: "INSULIN PEN NEEDLE",
        codes: ['101569', '102948'],
        maxDailyDose: "Single use per needle (medical device)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - injection needle only" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - injection needle only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - injection needle only" },
        dm: { safe: true, emoji: "✅", firstChoice: "Insulin injection needles" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - injection needle only" }
    },

    // ======= INTERFERON BETA-1a - مجموعة أكواد =======  
    {
        name: "INTERFERON BETA-1a",
        codes: ['102781', '102902', '102790'],
        maxDailyDose: "44 mcg TIW max (subcutaneous injection)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - risk of severe hepatotoxicity" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for cardiomyopathy" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INTERFERON BETA-1B - مجموعة أكواد =======  
    {
        name: "INTERFERON BETA-1B",
        codes: ['103107'],
        maxDailyDose: "250 mcg every other day max (subcutaneous)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - hepatotoxicity risk" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for cardiac effects" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INTIMATE WASH - مجموعة أكواد =======  
    {
        name: "INTIMATE WASH",
        codes: ['100842', '105112', '105114', '105116', '105113', '105115', '105117', '100285', '100286', '100292', '102869', '100578', '100610', '103319', '103776', '102868', '101223', '102930', '101352', '101746'],
        maxDailyDose: "Use as needed (topical hygiene products)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" }
    },

    // ======= INTIMATE WASH-GEL - مجموعة أكواد =======  
    {
        name: "INTIMATE WASH-GEL",
        codes: ['105110'],
        maxDailyDose: "Use as needed (topical hygiene gel)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" }
    },

    // ======= INTIMATE WASH-POWDER - مجموعة أكواد =======  
    {
        name: "INTIMATE WASH-POWDER",
        codes: ['102567'],
        maxDailyDose: "Use as needed (topical hygiene powder)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" }
    },

    // ======= INTIMATE WIPES - مجموعة أكواد =======  
    {
        name: "INTIMATE WIPES",
        codes: ['105119', '105111', '105118', '105120', '102920'],
        maxDailyDose: "Use as needed (topical hygiene wipes)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" }
    },

    // ======= IRON & MULTIVITAMIN - مجموعة أكواد =======  
    {
        name: "IRON & MULTIVITAMIN",
        codes: ['102041'],
        maxDailyDose: "65 mg elemental iron max with multivitamins",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor in liver disease - iron accumulation risk" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= IRON & MULTIVITAMIN (KIDS) - مجموعة أكواد =======  
    {
        name: "IRON & MULTIVITAMIN (KIDS)",
        codes: ['107587', '105224'],
        maxDailyDose: "10 mg elemental iron max for children",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric use" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric use" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric use" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric use" }
    },

    // ======= IRON & MULTIVITAMIN (PREGNANCY) - مجموعة أكواد =======  
    {
        name: "IRON & MULTIVITAMIN (PREGNANCY)",
        codes: ['106330', '107334'],
        maxDailyDose: "30 mg elemental iron max for pregnancy",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for pregnancy" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for pregnancy" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for pregnancy" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for gestational diabetes" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for pregnancy" }
    },

    // ======= IRON PRODUCTS (KIDS) - مجموعة أكواد =======  
    {
        name: "IRON PRODUCTS (KIDS)",
        codes: ['100852', '100854', '100856', '107335', '101065', '102872', '101147', '107562', '105221', '107569'],
        maxDailyDose: "3 mg/kg/day elemental iron max for children",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric use" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric use" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric use" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric use" }
    },

    // ======= IRON PRODUCTS (PREGNANCY) - مجموعة أكواد =======  
    {
        name: "IRON PRODUCTS (PREGNANCY)",
        codes: ['100172', '107352', '107353', '106375', '103282', '103299', '100851', '100853', '100855', '100857', '100858', '100859', '105361', '103525', '100860', '107081', '107467', '107086', '107087', '106145', '101066', '105526', '101138', '106347', '105339', '105398', '107594', '101501', '101591', '509392', '508724', '106489', '105332', '106340', '103131'],
        maxDailyDose: "65 mg elemental iron max for pregnancy",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for pregnancy" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for pregnancy" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for pregnancy" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for gestational diabetes" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for pregnancy" }
    },

    // ======= ISOCONAZOLE, DIFLUCORTOLONE - مجموعة أكواد =======  
    {
        name: "ISOCONAZOLE, DIFLUCORTOLONE",
        codes: ['102232'],
        maxDailyDose: "Apply BID max for 2 weeks max (topical antifungal/steroid)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - topical steroid may affect control" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" }
    },

    // ======= ISOSORBIDE DINITRATE - مجموعة أكواد =======  
    {
        name: "ISOSORBIDE DINITRATE",
        codes: ['101148', '101149', '107361'],
        maxDailyDose: "160 mg/day max (with nitrate-free interval)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for hypotension - contraindicated with PDE5 inhibitors" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause hypotension - monitor BP" }
    },

    // ======= KIDS PERFUME - مجموعة أكواد =======  
    {
        name: "KIDS PERFUME",
        codes: ['107471'],
        maxDailyDose: "Topical use as needed (cosmetic product)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - cosmetic use only" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - cosmetic use only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - cosmetic use only" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - cosmetic use only" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - cosmetic use only" }
    },

    // ======= LECITHIN PRODUCTS - مجموعة أكواد =======  
    {
        name: "LECITHIN PRODUCTS",
        codes: ['102657'],
        maxDailyDose: "2400 mg/day max (nutritional supplement)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - may support liver function" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "May support cardiovascular health" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LEUPRORELIN(LEUPROLIDE) ACETAT - مجموعة أكواد =======  
    {
        name: "LEUPRORELIN(LEUPROLIDE) ACETATE",
        codes: ['103738', '102991'],
        maxDailyDose: "45 mg IM every 6 months max (depot injection)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for QT prolongation and cardiovascular events" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May worsen glucose tolerance and diabetes" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May worsen hypertension" }
    },

    // ======= LIP BALM-KIDS-PREM - مجموعة أكواد =======  
    {
        name: "LIP BALM-KIDS-PREM",
        codes: ['102511'],
        maxDailyDose: "Apply as needed (topical lip care)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" }
    },
    // ======= INFLUENZA VACCINE - مجموعة أكواد =======  
    {
        name: "INFLUENZA VACCINE",
        codes: ['105618', '105616', '103827', '103547', '105917', '105617', '103877', '106074', '106073', '102288'],
        maxDailyDose: "0.5 ml annual dose (single yearly vaccination)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INSULIN DEGLUDEC&ASPART - مجموعة أكواد =======  
    {
        name: "INSULIN DEGLUDEC&ASPART",
        codes: ['107385', '103377'],
        maxDailyDose: "50 units/day max (individualized premixed insulin)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Premixed insulin for T1DM & T2DM" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INSULIN DEGLUDEC, LIRAGLUTIDE - مجموعة أكواد =======  
    {
        name: "INSULIN DEGLUDEC, LIRAGLUTIDE",
        codes: ['103607'],
        maxDailyDose: "50 units/day max (contains 1.8 mg liraglutide max)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Caution if CrCl <15 ml/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective - reduces CV events" },
        dm: { safe: true, emoji: "✅", firstChoice: "Excellent for T2DM - dual mechanism" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "May improve BP control" }
    },

    // ======= IRBESARTAN,AMLODIPINE - مجموعة أكواد =======  
    {
        name: "IRBESARTAN,AMLODIPINE",
        codes: ['105343', '105342', '105345', '105344'],
        maxDailyDose: "300 mg/10 mg per day max (fixed combination)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Caution with amlodipine - reduce dose" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for mild-moderate CKD" },
        heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in cardiogenic shock, severe aortic stenosis" },
        dm: { safe: true, emoji: "✅", firstChoice: "Excellent for diabetic hypertension" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "First-line combination therapy" }
    },

    // ======= IRBESARTAN,HYDROCHLOROTHIAZIDE - مجموعة أكواد =======  
    {
        name: "IRBESARTAN,HYDROCHLOROTHIAZIDE",
        codes: ['100517', '100518', '100519', '103037', '103038', '103039'],
        maxDailyDose: "300 mg/25 mg per day max (fixed combination)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <30 ml/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective combination" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - HCTZ may worsen diabetes" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Excellent first-line combination" }
    },

    // ======= LATANOPROST,TIMOLOL - مجموعة أكواد =======  
    {
        name: "LATANOPROST,TIMOLOL",
        codes: ['101245', '102361'],
        maxDailyDose: "1 drop daily evening max (combination eye drops)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in heart failure, bradycardia" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia signs" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - beta-blocker effects" }
    },

    // ======= LIDOCAINE, PRILOCAINE - مجموعة أكواد =======  
    {
        name: "LIDOCAINE, PRILOCAINE",
        codes: ['105384', '106231'],
        maxDailyDose: "Apply 1-2g max per application (topical anesthetic)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients - topical use" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LORATADINE,PSEUDOEPHEDRIN - مجموعة أكواد =======  
    {
        name: "LORATADINE,PSEUDOEPHEDRIN",
        codes: ['100611', '101328', '100497', '103091', '101329', '105480', '107265'],
        maxDailyDose: "10 mg/240 mg per day max (combination antihistamine/decongestant)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose if CrCl <30 ml/min" },
        heart: { safe: false, emoji: "❌", firstChoice: "Avoid in cardiac disease - pseudoephedrine effects" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - pseudoephedrine may raise blood sugar" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated - pseudoephedrine raises BP" }
    },

    // ======= LOSARTAN POTASSIUM,HCTH - مجموعة أكواد =======  
    {
        name: "LOSARTAN POTASSIUM,HCTH",
        codes: ['103255', '103254', '100928', '101114', '103040', '102101', '102103'],
        maxDailyDose: "100 mg/25 mg per day max (fixed combination)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <30 ml/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective combination" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - HCTZ may worsen diabetes" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "First-line combination for hypertension" }
    },

    // ======= LORNOXICAM-AMP - مجموعة أكواد =======  
    {
        name: "LORNOXICAM-AMP",
        codes: ['102366'],
        maxDailyDose: "16 mg/day max IV/IM (8mg BID injection)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - NSAID hepatotoxicity" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - nephrotoxic NSAID" },
        heart: { safe: false, emoji: "❌", firstChoice: "CV risk - avoid in heart disease" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "May worsen BP control" }
    },

    // ======= VACCINE (GENERAL) - مجموعة أكواد =======  
    {
        name: "VACCINE (GENERAL)",
        codes: ['105618', '105616', '103827', '103547', '105917', '105617', '103877', '106074', '106073', '102288'],
        maxDailyDose: "Single dose per vaccination schedule (varies by vaccine)",
        liver: { safe: true, emoji: "✅", firstChoice: "Generally safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Generally safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Generally safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Generally safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Generally safe for hypertensive patients" }
    },
        // ======= ILOPROST - مجموعة أكواد =======  
    {
        name: "ILOPROST",
        codes: ['103678'],
        maxDailyDose: "180 mcg/day IV max (20 mcg q2h for 9 hours)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for hypotension and arrhythmias" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe hypotension" }
    },

    // ======= IMATINIB MESILATE - مجموعة أكواد =======  
    {
        name: "IMATINIB MESILATE",
        codes: ['103379', '103004', '105859', '105852', '105752', '105751'],
        maxDailyDose: "800 mg/day PO max (400mg BID for resistant/relapsed Ph+ ALL)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - reduce dose if ALT/AST >5x ULN" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose if CrCl <30 ml/min" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for cardiomyopathy and fluid retention" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= IMIDAPRIL HYDROCHLORIDE - مجموعة أكواد =======  
    {
        name: "IMIDAPRIL HYDROCHLORIDE",
        codes: ['102176', '102177'],
        maxDailyDose: "20 mg/day PO max (ACE inhibitor)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - reduce if CrCl <60 ml/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective - first-line for heart failure" },
        dm: { safe: true, emoji: "✅", firstChoice: "Nephroprotective in diabetic nephropathy" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "First-line antihypertensive" }
    },

    // ======= IMIPENEM, CILASTATIN - مجموعة أكواد =======  
    {
        name: "IMIPENEM, CILASTATIN",
        codes: ['103744'],
        maxDailyDose: "4000 mg/day IV max (1g q6h severe infections)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Reduce dose based on CrCl - nephrotoxic risk" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= IMIQUIMOD - مجموعة أكواد =======  
    {
        name: "IMIQUIMOD",
        codes: ['102889', '105627'],
        maxDailyDose: "Apply 3 times weekly max (topical immune modulator)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" }
    },

    // ======= INDAPAMIDE - مجموعة أكواد =======  
    {
        name: "INDAPAMIDE",
        codes: ['101496', '103845', '103055'],
        maxDailyDose: "2.5 mg/day PO max (thiazide-like diuretic)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Caution in hepatic impairment" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <30 ml/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective - reduces CV events" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may worsen diabetes" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "First-line antihypertensive" }
    },

    // ======= INDOMETHACIN - مجموعة أكواد =======  
    {
        name: "INDOMETHACIN",
        codes: ['101978', '101129', '105800'],
        maxDailyDose: "200 mg/day PO max (potent NSAID)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - hepatotoxicity risk" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - nephrotoxic NSAID" },
        heart: { safe: false, emoji: "❌", firstChoice: "High CV risk - avoid in heart disease" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "May worsen BP control significantly" }
    },

    // ======= INFLIXIMAB - مجموعة أكواد =======  
    {
        name: "INFLIXIMAB",
        codes: ['106509', '103209', '107355', '107244'],
        maxDailyDose: "10 mg/kg per infusion max (every 8 weeks maintenance)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor for hepatotoxicity - black box warning" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in moderate-severe heart failure" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Increased infection risk - monitor closely" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INSULIN ASPART - مجموعة أكواد =======  
    {
        name: "INSULIN ASPART",
        codes: ['101576', '101577', '107242', '102823', '101570', '101571'],
        maxDailyDose: "0.6 unit/kg/day max (rapid-acting + premixed insulins)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Rapid-acting insulin for T1DM & T2DM" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= INSULIN GLARGINE - مجموعة أكواد =======  
    {
        name: "INSULIN GLARGINE",
        codes: ['103635', '101239', '101240', '107658', '103362', '103151'],
        maxDailyDose: "80 units/day max (long-acting basal insulin)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Long-acting basal insulin for T1DM & T2DM" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= IPRATROPIUM BROMIDE - مجموعة أكواد =======  
    {
        name: "IPRATROPIUM BROMIDE",
        codes: ['107365', '107237', '100226', '100227'],
        maxDailyDose: "2000 mcg/day inhaled max (500mcg QID)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Caution in cardiac arrhythmias" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= IRBESARTAN - مجموعة أكواد =======  
    {
        name: "IRBESARTAN",
        codes: ['100166', '100167', '106232', '100177', '100178', '100179', '103035', '103036', '103640', '105133', '105134'],
        maxDailyDose: "300 mg/day PO max (ARB antihypertensive)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - may worsen if bilateral RAS" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective - reduces CV events" },
        dm: { safe: true, emoji: "✅", firstChoice: "Nephroprotective in diabetic nephropathy" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "First-line ARB for hypertension" }
    },

    // ======= ISOTRETINOIN - مجموعة أكواد =======  
    {
        name: "ISOTRETINOIN",
        codes: ['102484', '102485', '102965', '101965', '101966', '102368', '102369'],
        maxDailyDose: "2 mg/kg/day max (severe acne treatment)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - discontinue if ALT/AST >5x ULN" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor lipids and glucose" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= ITRACONAZOLE - مجموعة أكواد =======  
    {
        name: "ITRACONAZOLE",
        codes: ['101152', '101153', '102113', '102114', '102227', '102228'],
        maxDailyDose: "600 mg/day PO max (life-threatening infections only)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - discontinue if hepatotoxicity" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in heart failure - negative inotrope" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= IVABRADINE - مجموعة أكواد =======  
    {
        name: "IVABRADINE",
        codes: ['101775', '101776'],
        maxDailyDose: "15 mg/day PO max (7.5mg BID)",
        liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe bradycardia, heart block" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe hypotension" }
    },

    // ======= JOSAMYCIN - مجموعة أكواد =======  
    {
        name: "JOSAMYCIN",
        codes: ['101163'],
        maxDailyDose: "3000 mg/day PO max (macrolide antibiotic)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Caution in hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for QT prolongation" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= KETOCONAZOLE - مجموعة أكواد =======  
    {
        name: "KETOCONAZOLE",
        codes: ['103591', '101190', '101551', '101550'],
        maxDailyDose: "400 mg/day PO max (topical unlimited within reason)",
        liver: { safe: false, emoji: "❌", firstChoice: "Black box warning - severe hepatotoxicity" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated - QT prolongation risk" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= KETOPROFEN - مجموعة أكواد =======  
    {
        name: "KETOPROFEN",
        codes: ['101194', '101782', '101783', '100831'],
        maxDailyDose: "300 mg/day PO max (high-risk NSAID)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - hepatotoxicity risk" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - nephrotoxic NSAID" },
        heart: { safe: false, emoji: "❌", firstChoice: "High CV risk - avoid in heart disease" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "May worsen BP control" }
    },

    // ======= KETOROLAC TROMETAMOL - مجموعة أكواد =======  
    {
        name: "KETOROLAC TROMETAMOL",
        codes: ['100029', '100030', '103895', '107399'],
        maxDailyDose: "40 mg/day PO max or topical eye drops QID max",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Caution in hepatic impairment" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated in renal impairment" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients - topical eye use" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= KETOTIFIN - مجموعة أكواد =======  
    {
        name: "KETOTIFIN",
        codes: ['102384', '102385', '100207', '101083', '101195', '102615', '102383', '100208', '102382'],
        maxDailyDose: "4 mg/day PO max or eye drops BID max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LIDOCAINE - مجموعة أكواد =======  
    {
        name: "LIDOCAINE",
        codes: ['101269', '105554', '101915', '101252', '101266', '102452', '102786', '103913', '102374'],
        maxDailyDose: "300 mg topical max or 4.5 mg/kg IV max",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for cardiac arrhythmias" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LINAGLIPTIN - مجموعة أكواد =======  
    {
        name: "LINAGLIPTIN",
        codes: ['105880', '105881', '106517', '106531', '102824'],
        maxDailyDose: "5 mg/day PO max (DPP-4 inhibitor)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Excellent for T2DM - improves glycemic control" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LINEZOLID - مجموعة أكواد =======  
    {
        name: "LINEZOLID",
        codes: ['105994', '103566', '105757'],
        maxDailyDose: "1200 mg/day PO/IV max (600mg BID)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP with tyramine-rich foods" }
    },

    // ======= LIP BALM - مجموعة أكواد =======  
    {
        name: "LIP BALM",
        codes: ['102511', '101838'],
        maxDailyDose: "Apply as needed (topical lip care)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" }
    },

    // ======= LIPASE INHIBITORS - مجموعة أكواد =======  
    {
        name: "LIPASE INHIBITORS",
        codes: ['102935', '102367'],
        maxDailyDose: "360 mg/day max (120mg TID with meals)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs - rare hepatotoxicity" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "May improve diabetes via weight loss" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "May improve BP via weight loss" }
    },

    // ======= LIPID ABSORPTION REDUCTION - مجموعة أكواد =======  
    {
        name: "LIPID ABSORPTION REDUCTION",
        codes: ['103007', '100922', '100923', '101287'],
        maxDailyDose: "6 tablets/day max (fat binding supplements)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "May improve lipid profile" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },
// ======= CO-ENZYME Q10 - مجموعة أكواد =======  
{
    name: "CO-ENZYME Q10",
    codes: ['106450', '100330', '107548', '100529', '103321', '102621', '102622', '102620', '106422', '106420', '106414', '106165', '105601', '107618', '107614', '107580', '107097', '507658', '508685', '507652', '509397', '508715', '508716', '508737', '508717', '106491', '102348'],
    maxDailyDose: "1200 mg/day PO max (typical 100-300 mg daily)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe - may improve liver enzymes ALT/AST" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "Beneficial for heart failure and cardiac protection" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - may lower blood sugar" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May lower BP - monitor with antihypertensives" }
},

    // ======= LIPIDO ENHANCEMENT (MEN) - مجموعة أكواد =======  
    {
        name: "LIPIDO ENHANCEMENT (MEN)",
        codes: ['100117', '103465', '100981', '102646'],
        maxDailyDose: "Variable dosing (herbal supplements)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - herbal supplements" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - herbal supplements" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - herbal supplements" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - herbal supplements" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - herbal supplements" }
    },

    // ======= LIPIDO ENHANCEMENT (WOMEN) - مجموعة أكواد =======  
    {
        name: "LIPIDO ENHANCEMENT (WOMEN)",
        codes: ['100142', '102598', '102648'],
        maxDailyDose: "Variable dosing (herbal supplements)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - herbal supplements" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - herbal supplements" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - herbal supplements" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - herbal supplements" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - herbal supplements" }
    },

    // ======= LIRAGLUTIDE - مجموعة أكواد =======  
    {
        name: "LIRAGLUTIDE",
        codes: ['102660', '103295'],
        maxDailyDose: "1.8 mg/day max for diabetes, 3 mg/day max for obesity",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Caution if CrCl <15 ml/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective - reduces CV events" },
        dm: { safe: true, emoji: "✅", firstChoice: "Excellent for T2DM - GLP-1 agonist" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "May improve BP control" }
    },

    // ======= LISINOPRIL - مجموعة أكواد =======  
    {
        name: "LISINOPRIL",
        codes: ['101270', '101271', '101272', '101292', '101293', '101294', '101295', '101296', '101297', '101298', '101299', '101300', '101301', '105178', '102397', '102398', '102399', '103602', '102412', '102413', '102414'],
        maxDailyDose: "80 mg/day PO max (ACE inhibitor)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - reduce if CrCl <30" },
        heart: { safe: true, emoji: "✅", firstChoice: "First-line for heart failure and post-MI" },
        dm: { safe: true, emoji: "✅", firstChoice: "Nephroprotective in diabetic nephropathy" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "First-line ACE inhibitor" }
    },

    // ======= LISURIDE HYDROGEN MALEATE - مجموعة أكواد =======  
    {
        name: "LISURIDE HYDROGEN MALEATE",
        codes: ['100697'],
        maxDailyDose: "0.6 mg/day max (dopamine agonist)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for cardiac valvulopathy" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause orthostatic hypotension" }
    },

    // ======= LOBE (IUD DEVICES) - مجموعة أكواد =======  
    {
        name: "LOBE (IUD DEVICES)",
        codes: ['103207', '103208', '103121', '103122', '103118', '101440', '101478', '101568', '103119', '103120'],
        maxDailyDose: "Single device insertion (contraceptive method)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LOPERAMIDE - مجموعة أكواد =======  
    {
        name: "LOPERAMIDE",
        codes: ['103460', '101125', '103459', '102565'],
        maxDailyDose: "16 mg/day PO max (antidiarrheal)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "High doses may cause QT prolongation" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LORATIDINE - مجموعة أكواد =======  
    {
        name: "LORATIDINE",
        codes: ['106113', '100492', '100499', '101017', '101318', '101321', '101323', '101325', '105698', '101331', '102210', '100491', '107221', '100498', '101016', '105179', '103097', '101319', '101320', '101322', '101324', '101330', '101332', '105662', '102209'],
        maxDailyDose: "10 mg/day PO max (second-generation antihistamine)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose if CrCl <30 ml/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LORNOXICAM - مجموعة أكواد =======  
    {
        name: "LORNOXICAM",
        codes: ['105267', '102365', '107397', '107240', '102366'],
        maxDailyDose: "16 mg/day PO max or IV max (NSAID)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - NSAID hepatotoxicity" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - nephrotoxic NSAID" },
        heart: { safe: false, emoji: "❌", firstChoice: "CV risk - avoid in heart disease" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "May worsen BP control" }
    },

    // ======= LOSARTAN POTASSIUM - مجموعة أكواد =======  
    {
        name: "LOSARTAN POTASSIUM",
        codes: ['103253', '103252', '100564', '100565', '101222', '103050', '103049', '102102', '102104', '102798', '102797', '103255', '103254', '100928', '101114', '103040', '102101', '102103'],
        maxDailyDose: "150 mg/day PO max (ARB antihypertensive)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - may worsen if bilateral RAS" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective - reduces CV events" },
        dm: { safe: true, emoji: "✅", firstChoice: "Nephroprotective in diabetic nephropathy" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "First-line ARB for hypertension" }
    },

    // ======= LIP BALM-MED - مجموعة أكواد =======  
    {
        name: "LIP BALM-MED",
        codes: ['101838'],
        maxDailyDose: "Apply as needed (medicated lip care)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" }
    },

    // ======= LOXOPROFEN - مجموعة أكواد =======  
    {
        name: "LOXOPROFEN",
        codes: ['101983', '103520', '103519'],
        maxDailyDose: "180 mg/day max (60mg TID NSAID)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - NSAID hepatotoxicity risk" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - nephrotoxic NSAID" },
        heart: { safe: false, emoji: "❌", firstChoice: "CV risk - avoid in heart disease" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "May worsen BP control" }
    },

    // ======= LOSARTAN POTASSIUM - مجموعة أكواد =======  
    {
        name: "LOSARTAN POTASSIUM",
        codes: ['103253', '103252', '100564', '100565', '101222', '103050', '103049', '102102', '102104', '102798', '102797', '103255', '103254', '100928', '101114', '103040', '102101', '102103'],
        maxDailyDose: "100 mg/day max (50-100mg daily)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - may cause hyperkalemia" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective ARB - reduces CV events" },
        dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective for diabetic nephropathy" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "First-line ARB for hypertension" }
    },
    // ======= ISOCONAZOLE, DIFLUCORTOLONE - مجموعة أكواد =======  
    {
        name: "ISOCONAZOLE, DIFLUCORTOLONE",
        codes: ['102232'],
        maxDailyDose: "Apply BID max for 2 weeks max (antifungal + corticosteroid cream)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - topical use only" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - topical steroid absorption" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic effects" }
    },

    // ======= ISOSORBIDE DINITRATE - مجموعة أكواد =======  
    {
        name: "ISOSORBIDE DINITRATE",
        codes: ['101148', '101149', '107361'],
        maxDailyDose: "160 mg/day PO max (antianginal vasodilator)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Caution - may reduce renal blood flow" },
        heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in cardiogenic shock, severe aortic stenosis" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe hypotension" }
    },

    // ======= IXAZOMIB - مجموعة أكواد =======  
    {
        name: "IXAZOMIB",
        codes: ['103728'],
        maxDailyDose: "4 mg weekly PO max (proteasome inhibitor)",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - reduce dose if moderate-severe hepatic impairment" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose if CrCl <30 ml/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= IXEKIZUMAB - مجموعة أكواد =======  
    {
        name: "IXEKIZUMAB",
        codes: ['103559'],
        maxDailyDose: "160 mg SC max initial dose, then 80 mg every 4 weeks",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Increased infection risk - monitor closely" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= JOINT COLLAGEN - مجموعة أكواد =======  
    {
        name: "JOINT COLLAGEN",
        codes: ['106326', '103339', '103499', '107503', '103070', '107204', '106407', '107519', '107596', '507368', '107411', '508522', '508521', '103101'],
        maxDailyDose: "10-15 grams per day max (collagen supplements)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - nutritional supplement" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - nutritional supplement" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - nutritional supplement" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - nutritional supplement" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - nutritional supplement" }
    },

    // ======= KAOLIN, PECTIN - مجموعة أكواد =======  
    {
        name: "KAOLIN, PECTIN",
        codes: ['107468', '107469', '105835', '105695', '107383', '106246', '106252', '101183', '101184', '508161'],
        maxDailyDose: "Variable dosing (antidiarrheal adsorbents)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= KIDS PERFUME - مجموعة أكواد =======  
    {
        name: "KIDS PERFUME",
        codes: ['107471'],
        maxDailyDose: "Apply as needed (cosmetic product)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - cosmetic use only" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - cosmetic use only" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - cosmetic use only" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe - cosmetic use only" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - cosmetic use only" }
    },

    // ======= LETHICIN PRODUCTS - مجموعة أكواد =======  
    {
        name: "LETHICIN PRODUCTS",
        codes: ['102657'],
        maxDailyDose: "2400 mg/day max (phospholipid supplement)",
        liver: { safe: true, emoji: "✅", firstChoice: "May support liver function" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "May support cardiovascular health" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LEUPRORELIN ACETATE - مجموعة أكواد =======  
    {
        name: "LEUPRORELIN ACETATE",
        codes: ['103738', '102991'],
        maxDailyDose: "22.5 mg IM every 3 months max (GnRH agonist)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for QT prolongation" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May worsen diabetes - monitor glucose" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May worsen hypertension" }
    },

    // ======= LIXISENATIDE, INSULIN GLARGINE - مجموعة أكواد =======  
    {
        name: "LIXISENATIDE, INSULIN GLARGINE",
        codes: ['105058', '105059'],
        maxDailyDose: "60 units/day max (combination GLP-1 + insulin)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Caution if CrCl <15 ml/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective combination" },
        dm: { safe: true, emoji: "✅", firstChoice: "Excellent for T2DM - dual mechanism" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "May improve BP control" }
    },

    // ======= LOMEFLOXACIN - مجموعة أكواد =======  
    {
        name: "LOMEFLOXACIN",
        codes: ['101313', '101314'],
        maxDailyDose: "400 mg/day PO max (fluoroquinolone antibiotic)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose if CrCl <40 ml/min" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for QT prolongation" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - risk of hyper/hypoglycemia" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LOTEPREDNOL ETABONATE - مجموعة أكواد =======  
    {
        name: "LOTEPREDNOL ETABONATE",
        codes: ['107222', '106516'],
        maxDailyDose: "1 drop QID max or apply gel BID max (ophthalmic steroid)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may increase IOP" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" }
    },
    // ======= LULICONAZOLE - كود واحد =======  
    {
        name: "LULICONAZOLE",
        codes: ['105399'],
        maxDailyDose: "8 grams cream daily (80 mg topical max)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LURASIDONE - مجموعة أكواد =======  
    {
        name: "LURASIDONE",
        codes: ['105910', '105911'],
        maxDailyDose: "160 mg/day PO (schizophrenia) or 120 mg/day (bipolar)",
        liver: { safe: false, emoji: "❌", firstChoice: "Aripiprazole or Quetiapine (safer options)" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Max 80 mg/day in severe CKD" },
        heart: { safe: true, emoji: "✅", firstChoice: "Lower cardiac risk vs other antipsychotics" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may cause hyperglycemia" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Minimal effect on BP" }
    },

    // ======= LUSPATERCEPT - كود واحد =======  
    {
        name: "LUSPATERCEPT",
        codes: ['103865'],
        maxDailyDose: "1.75 mg/kg subcutaneous every 3 weeks (max dose)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for mild-moderate CKD" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - may increase risk" }
    },

    // ======= LUTEIN + ZINC - مجموعة أكواد =======  
    {
        name: "LUTEIN + ZINC",
        codes: ['106140', '105333', '101374'],
        maxDailyDose: "20 mg lutein + 80 mg zinc daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LYNESTRENOL - كود واحد =======  
    {
        name: "LYNESTRENOL",
        codes: ['101647'],
        maxDailyDose: "5 mg/day PO",
        liver: { safe: false, emoji: "❌", firstChoice: "Non-hormonal contraceptives preferred" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for thrombotic events" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may worsen control" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - may increase" }
    },

    // ======= MAGALDRATE + SIMETHICONE - مجموعة أكواد =======  
    {
        name: "MAGALDRATE + SIMETHICONE",
        codes: ['100009', '100010'],
        maxDailyDose: "2400 mg magaldrate + 240 mg simethicone daily",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Avoid in severe CKD - magnesium accumulation" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MAGNESIUM PRODUCTS - مجموعة أكواد =======  
    {
        name: "MAGNESIUM",
        codes: ['100782', '107486', '107337', '102638', '105528', '103168', '107275', '101358', '105796', '107413', '107107', '509395', '508736', '102249', '102350'],
        maxDailyDose: "400 mg elemental magnesium daily",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in severe CKD - hypermagnesemia risk" },
        heart: { safe: true, emoji: "✅", firstChoice: "Beneficial for cardiac arrhythmias" },
        dm: { safe: true, emoji: "✅", firstChoice: "May improve insulin sensitivity" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "May help lower BP" }
    },

    // ======= MEBENDAZOLE - مجموعة أكواد =======  
    {
        name: "MEBENDAZOLE",
        codes: ['102300', '105651', '102299'],
        maxDailyDose: "200 mg/day PO (100 mg BID)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MEBEVERINE - مجموعة أكواد =======  
    {
        name: "MEBEVERINE",
        codes: ['100309', '100718', '100719', '106136', '101383', '105253', '101423', '102109', '102297', '102298'],
        maxDailyDose: "405 mg/day PO (135 mg TID) or 400 mg SR daily",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MECLOZINE + VITAMIN B6 - مجموعة أكواد =======  
    {
        name: "MECLOZINE + VITAMIN B6",
        codes: ['107359', '107358', '101505', '103378'],
        maxDailyDose: "50 mg meclozine + 200 mg B6 daily",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },
// ====== 1. VITAMIN C (ASCORBIC ACID) GROUP ======
{
    name: "VITAMIN C (ASCORBIC ACID)",
    codes: ['107572', '107571', '105229', '107561'],
    maxDailyDose: "2000 mg/day total max (RDA: Kids 15-75mg, Adults 90mg)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor for oxalate stones - reduce dose CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective antioxidant effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "May improve glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP" }
},

// ====== 2. CALCIUM CARBONATE + VITAMIN D3 GROUP ======
{
    name: "CALCIUM CARBONATE + VITAMIN D3",
    codes: ['107573', '103116', '107560', '107566'],
    maxDailyDose: "2500 mg calcium/day + 4000 IU D3/day total max (Kids: 1000mg Ca + 600IU D3)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - risk of stones and hypercalcemia" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor cardiac patients - calcium channel effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "May improve insulin sensitivity" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP" }
},

// ====== 3. MULTIVITAMIN COMPLEX GROUP ======
{
    name: "MULTIVITAMIN COMPLEX (PEDIATRIC)",
    codes: ['107570', '107574', '107559'],
    maxDailyDose: "Per FDA pediatric RDA limits (Age-specific dosing required)",
    liver: { safe: true, emoji: "✅", firstChoice: "Monitor fat-soluble vitamins A,D,E,K" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric CKD patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "Supports cardiovascular development" },
    dm: { safe: true, emoji: "✅", firstChoice: "Monitor sugar content in liquid forms" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric hypertension" }
},

// ====== 4. IRON SUPPLEMENTS GROUP ======
{
    name: "IRON (FERROUS COMPOUNDS)",
    codes: ['107569', '107562'],
    maxDailyDose: "45 mg elemental iron/day max (Kids: 10-15mg/day therapeutic)",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid in hemochromatosis and liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "Treats iron-deficiency anemia" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic children" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ====== 5. ECHINACEA EXTRACT GROUP ======
{
    name: "ECHINACEA PURPUREA EXTRACT",
    codes: ['103117'],
    maxDailyDose: "300-400 mg extract/day total max (Kids: 150-300mg/day)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution - potential hepatotoxicity" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "May modulate immune function" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP interactions" }
},

// ====== 6. ELDERBERRY EXTRACT + VITAMIN C + ZINC GROUP ======
{
    name: "ELDERBERRY EXTRACT + VITAMIN C + ZINC",
    codes: ['105229'],
    maxDailyDose: "1200 mg elderberry + 2000mg C + 40mg Zinc total max",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe liver profile" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "Antioxidant cardioprotective effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Monitor sugar content in gummies" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No contraindications" }
},

// ====== 7. ZINC SUPPLEMENTS GROUP ======
{
    name: "ZINC (ELEMENTAL)",
    codes: ['107561', '105229'],
    maxDailyDose: "40 mg elemental zinc/day total max (Kids: 5-10mg/day)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "Supports cardiac function" },
    dm: { safe: true, emoji: "✅", firstChoice: "May improve glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ====== 8. VITAMIN D3 + K2 GROUP ======
{
    name: "VITAMIN D3 + VITAMIN K2 (MK-7)",
    codes: ['107560', '107566'],
    maxDailyDose: "4000 IU D3 + 120 mcg K2/day total max (Kids: 600-1000 IU D3)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor calcium levels in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "K2 prevents vascular calcification" },
    dm: { safe: true, emoji: "✅", firstChoice: "May improve insulin sensitivity" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP" }
},

// ====== 9. PROBIOTICS GROUP ======
{
    name: "PROBIOTIC STRAINS (LACTOBACILLUS/BIFIDOBACTERIUM)",
    codes: ['107564', '107558', '107565'],
    maxDailyDose: "50 billion CFU/day total max (Kids: 1-10 billion CFU/day)",
    liver: { safe: true, emoji: "✅", firstChoice: "May improve liver function" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "May improve cardiovascular health" },
    dm: { safe: true, emoji: "✅", firstChoice: "May improve glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP" }
},

// ====== 10. LACTASE ENZYME GROUP ======
{
    name: "LACTASE ENZYME",
    codes: ['107558', '107565'],
    maxDailyDose: "10000-20000 FCC units/day total max (per feeding as needed)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac interactions" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic children" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP interactions" }
},
    // ======= MEDROXYPROGESTERONE - مجموعة أكواد =======  
    {
        name: "MEDROXYPROGESTERONE",
        codes: ['103606', '103384'],
        maxDailyDose: "10 mg/day PO or 150 mg IM every 3 months",
        liver: { safe: false, emoji: "❌", firstChoice: "Non-hormonal alternatives preferred" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for thrombotic events" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may worsen control" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - may increase" }
    },

    // ======= MEFENAMIC ACID - مجموعة أكواد =======  
    {
        name: "MEFENAMIC ACID",
        codes: ['100846', '100844', '100845', '101357', '101755'],
        maxDailyDose: "1500 mg/day PO (500 mg TID)",
        liver: { safe: false, emoji: "❌", firstChoice: "Paracetamol safer for liver patients" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - nephrotoxic" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor CV risk - NSAID effects" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May increase BP - monitor closely" }
    },

    // ======= MEFLOQUINE - كود واحد =======  
    {
        name: "MEFLOQUINE",
        codes: ['101408'],
        maxDailyDose: "1250 mg weekly (malaria prophylaxis)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in liver disease" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for cardiac conduction abnormalities" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MELATONIN - مجموعة أكواد =======  
    {
        name: "MELATONIN",
        codes: ['106451', '107348', '508147', '107407', '105701', '107403', '103175', '106166', '107552', '105396', '105397', '107088', '105391', '107499', '106162', '105603', '107433', '107090', '106905', '107103', '107104', '509405', '107473', '106493', '106321', '106322', '107567'],
        maxDailyDose: "10 mg/day PO (short-term use)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "May help lower BP slightly" }
    },

    // ======= MELOXICAM - مجموعة أكواد =======  
    {
        name: "MELOXICAM",
        codes: ['100561', '100562', '100563', '101448', '101449', '101450', '101451', '101464', '101465', '103781', '103780', '101681', '105653', '101682', '105577', '105576'],
        maxDailyDose: "15 mg/day PO (tablets) or 10 mg/day (capsules)",
        liver: { safe: false, emoji: "❌", firstChoice: "Paracetamol safer for liver patients" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - nephrotoxic" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor CV risk - NSAID effects" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May increase BP - monitor closely" }
    },

    // ======= MEMANTINE - مجموعة أكواد =======  
    {
        name: "MEMANTINE",
        codes: ['105642', '100725', '105144', '105145', '103518', '102675', '103275'],
        maxDailyDose: "20 mg/day PO (IR) or 28 mg/day (ER)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Max 5 mg BID in severe CKD" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MENOTROPIN - مجموعة أكواد =======  
    {
        name: "MENOTROPIN",
        codes: ['105825', '103448', '103447', '103446', '106148'],
        maxDailyDose: "450 IU/day subcutaneous (fertility treatment)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MEPOLIZUMAB - مجموعة أكواد =======  
    {
        name: "MEPOLIZUMAB",
        codes: ['103596', '105814'],
        maxDailyDose: "100 mg subcutaneous every 4 weeks",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MEROPENEM - مجموعة أكواد =======  
    {
        name: "MEROPENEM",
        codes: ['107196', '107197', '103280', '107199'],
        maxDailyDose: "6000 mg/day IV (2g every 8 hours)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose adjustment needed based on CrCl" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MESALAZINE - مجموعة أكواد =======  
    {
        name: "MESALAZINE",
        codes: ['100206', '103409', '102929', '102807', '103201', '101726', '103554', '102900', '101994', '101995'],
        maxDailyDose: "4800 mg/day PO or 4g/day rectal",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function - nephrotoxicity risk" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MESTEROLONE - كود واحد =======  
    {
        name: "MESTEROLONE",
        codes: ['101807'],
        maxDailyDose: "100 mg/day PO (25 mg QID)",
        liver: { safe: false, emoji: "❌", firstChoice: "Avoid in liver disease - hepatotoxic" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor lipids and CV risk" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may affect control" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May increase BP - monitor" }
    },

    // ======= METFORMIN - مجموعة أكواد =======  
    {
        name: "METFORMIN",
        codes: ['106535', '106536', '106524', '106532', '106533', '106534', '102474', '100648', '102571', '105522', '100920', '100921', '103467', '103466', '101026', '101027', '103402', '105151', '103233', '103234', '103644', '101030', '101031', '101032', '105713', '101033', '101416', '101419', '101420', '105171'],
        maxDailyDose: "2550 mg/day PO (IR) or 2000 mg/day (XR)",
        liver: { safe: false, emoji: "❌", firstChoice: "Avoid in liver disease - lactic acidosis risk" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if eGFR <30 mL/min/1.73m²" },
        heart: { safe: true, emoji: "✅", firstChoice: "First choice for diabetic cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "First-line therapy for type 2 diabetes" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe and beneficial for hypertensive diabetics" }
    },

    // ======= METHOTREXATE - مجموعة أكواد =======  
    {
        name: "METHOTREXATE",
        codes: ['103420', '102931', '106442', '106443', '106444', '106445'],
        maxDailyDose: "25 mg/week PO/SC/IM (rheumatoid arthritis)",
        liver: { safe: false, emoji: "❌", firstChoice: "Avoid in liver disease - hepatotoxic" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose reduction needed in CKD" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= METHOXY POLYETHYLENE EPOETIN BETA - كود واحد =======  
    {
        name: "METHOXY POLYETHYLENE EPOETIN BETA",
        codes: ['103784'],
        maxDailyDose: "200 mcg subcutaneous monthly",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Used specifically for CKD anemia" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP and thrombotic events" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May worsen HTN - monitor BP closely" }
    },

    // ======= METHYLDOPA - كود واحد =======  
    {
        name: "METHYLDOPA",
        codes: ['100060'],
        maxDailyDose: "3000 mg/day PO (pregnancy) or 1000 mg/day IV",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor liver function - hepatotoxicity risk" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose adjustment needed in CKD" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for pregnancy hypertension" }
    },

    // ======= METHYLPREDNISOLONE - مجموعة أكواد =======  
    {
        name: "METHYLPREDNISOLONE",
        codes: ['100047', '100048', '100624', '102097', '102853', '103562'],
        maxDailyDose: "1000 mg/day IV pulse or 80 mg/day PO",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Use with caution - may worsen hepatitis" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP, fluid retention, arrhythmias" },
        dm: { safe: false, emoji: "❌", firstChoice: "Significantly raises glucose - avoid if possible" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "Worsens HTN significantly" }
    },

    // ======= METOCLOPRAMIDE - مجموعة أكواد =======  
    {
        name: "METOCLOPRAMIDE",
        codes: ['101764', '101762', '101763', '101765', '101771'],
        maxDailyDose: "40 mg/day PO/IV (short-term max 5 days)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in liver disease" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in severe CKD" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may affect gastric emptying" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= METOPROLOL - مجموعة أكواد =======  
    {
        name: "METOPROLOL",
        codes: ['105599', '105600', '105597', '105598', '102466', '101317', '105547'],
        maxDailyDose: "400 mg/day PO (XL) or 450 mg/day (tartrate)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in liver disease" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "First choice for heart failure/post-MI" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia - use with caution" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "First choice for hypertension with CAD" }
    },

    // ======= METRONIDAZOLE - مجموعة أكواد =======  
    {
        name: "METRONIDAZOLE",
        codes: ['100119', '100120', '100129', '100130', '100889', '101938', '100118', '100131', '100132', '100879', '100880', '100890', '101508', '101509', '101542', '101939', '101940'],
        maxDailyDose: "2000 mg/day PO or 1500 mg/day IV",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose by 50% in severe liver disease" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MICONAZOLE - مجموعة أكواد =======  
    {
        name: "MICONAZOLE",
        codes: ['100584', '101439', '101482', '101049', '101050', '101054', '101055', '102612', '102611', '102609', '101480', '101051', '101056', '101481', '101483', '103638', '100586', '100587', '101429', '101435', '100585', '101430', '100583', '101428', '101893'],
        maxDailyDose: "1200 mg vaginal (single dose) or topical BID",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MINOCYCLINE - مجموعة أكواد =======  
    {
        name: "MINOCYCLINE",
        codes: ['103430', '103429', '103428'],
        maxDailyDose: "200 mg/day PO (100 mg BID)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor liver function - hepatotoxicity risk" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MIRABEGRON - مجموعة أكواد =======  
    {
        name: "MIRABEGRON",
        codes: ['103721', '103722'],
        maxDailyDose: "50 mg/day PO",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Max 25 mg/day in moderate liver disease" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Max 25 mg/day if CrCl 15-29 mL/min" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - may increase" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP closely - may worsen HTN" }
    },

    // ======= MIRTAZAPINE - مجموعة أكواد =======  
    {
        name: "MIRTAZAPINE",
        codes: ['107650', '107651', '101441', '101442', '101443', '101876'],
        maxDailyDose: "45 mg/day PO at bedtime",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in liver disease" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in severe CKD" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safer than TCAs for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may increase appetite/weight" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Minimal effect on BP" }
    },

    // ======= MOMETASONE FUROATE - مجموعة أكواد =======  
    {
        name: "MOMETASONE FUROATE",
        codes: ['102841', '101493', '106566', '102167', '106301', '100735', '100736', '100744', '100746', '100749', '100750', '100751', '103181', '103180', '105531', '101417', '101418', '102873', '102443', '102444', '102445', '100745', '103450', '100747'],
        maxDailyDose: "800 mcg/day nasal or topical BID",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose with high doses/long-term use" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MONTELUKAST - مجموعة أكواد =======  
    {
        name: "MONTELUKAST",
        codes: ['100054', '102548', '105088', '102549', '107398', '107395', '107396', '103493', '103491', '103492', '103023', '103024', '106226', '105129', '107373', '107374', '107371', '107253', '102751', '106227', '106234', '106235', '102686', '102690', '102883', '102688', '107372', '102072', '102073', '102074', '102075', '105459', '105460'],
        maxDailyDose: "10 mg/day PO (adults) or 5 mg/day (pediatrics 6-14y)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MOXIFLOXACIN - مجموعة أكواد =======  
    {
        name: "MOXIFLOXACIN",
        codes: ['105457', '102314', '100240', '100241', '105068', '105069', '101379', '101380', '105098', '103093', '103094', '103506', '103505', '105755', '105756'],
        maxDailyDose: "400 mg/day PO/IV",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor liver function - hepatotoxicity risk" },
        kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor QTc - avoid in long QT syndrome" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may cause dysglycemia" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MOXONIDINE - مجموعة أكواد =======  
    {
        name: "MOXONIDINE",
        codes: ['101737', '101738'],
        maxDailyDose: "0.6 mg/day PO (0.4 mg BID max)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Avoid if CrCl <30 mL/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "May improve insulin sensitivity" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Effective for hypertension" }
    },

    // ======= MULTIVITAMIN PRODUCTS - مجموعة أكواد =======  
    {
        name: "MULTIVITAMIN",
        codes: ['107485', '100170', '105370', '100314', '100315', '100320', '107342', '100329', '100426', '103679', '102537', '102536', '102535', '102534', '105364', '107635', '107634', '107636', '107630', '107637', '107631', '107633', '107632', '107640', '107641', '107639', '107638', '100765', '105292', '101025', '101070', '101071', '101072', '101073', '101136', '101139', '107550', '106337', '107279', '107277', '107278', '107077', '107595', '101407', '101445', '106220', '101499', '101502', '103015', '101735', '107585', '107584', '107501', '509394', '509498', '509496', '509497', '102051', '106432', '106484', '105365', '102804', '102330', '107517', '106461'],
        maxDailyDose: "As per individual vitamin RDAs - varies by formulation",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients (avoid high vitamin A)" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LOXOPROFEN - مجموعة أكواد =======  
    {
        name: "LOXOPROFEN",
        codes: ['101983', '103520', '103519'],
        maxDailyDose: "180 mg/day PO max or 2 patches daily max",
        liver: { safe: false, emoji: "❌", firstChoice: "Monitor LFTs - NSAID hepatotoxicity" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - nephrotoxic NSAID" },
        heart: { safe: false, emoji: "❌", firstChoice: "CV risk - avoid in heart disease" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia" },
        hypertension: { safe: false, emoji: "❌", firstChoice: "May worsen BP control" }
    },

        // ======= NITISINONE (ORFADIN) - مجموعة أكواد =======  
        {
            name: "NITISINONE",
            codes: ['103564'],
            maxDailyDose: "2 mg/kg/day PO max (typically 1 mg/kg BID)",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs - used for hepatic tyrosinemia" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
        },

        // ======= IBRUTINIB - مجموعة أكواد =======  
        {
            name: "IBRUTINIB",
            codes: ['103535'],
            maxDailyDose: "560 mg/day PO max (420mg daily for CLL/SLL)",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in moderate-severe hepatic impairment" },
            kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for CKD" },
            heart: { safe: false, emoji: "❌", firstChoice: "High risk of atrial fibrillation, bleeding - monitor closely" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "⚠️", firstChoice: "May increase BP - monitor closely" }
        },
    // ======= BENZOCAINE + MENTHOL - مجموعة أكواد =======  
    {
        name: "BENZOCAINE + MENTHOL",
        codes: ['106156', '102736', '102737', '103495', '103497', '103496', '107266', '102600', '103747', '105248', '105249', '105108', '105035', '105036', '105037', '105038', '105240', '105239'],
        maxDailyDose: "90 mg benzocaine + 72 mg menthol daily (6 lozenges max)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= GLYCERIN + HYDROXYETHYLCELLULOSE - كود واحد =======  
    {
        name: "GLYCERIN + HYDROXYETHYLCELLULOSE",
        codes: ['102373'],
        maxDailyDose: "10 grams topical application daily",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= WHEY + SOY PROTEIN - مجموعة أكواد =======  
    {
        name: "WHEY + SOY PROTEIN",
        codes: ['102652', '102653'],
        maxDailyDose: "60 grams protein daily (2 servings)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce protein in advanced CKD" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "May help with glycemic control" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "May help lower BP" }
    },

    // ======= MEDICAL NUTRITION - مجموعة أكواد =======  
    {
        name: "MEDICAL NUTRITION",
        codes: ['105890', '105889', '105892', '105891', '105893'],
        maxDailyDose: "As per clinical nutritionist recommendation",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor electrolytes in CKD" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose content" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= CHLORHEXIDINE GLUCONATE - كود واحد =======  
    {
        name: "CHLORHEXIDINE GLUCONATE",
        codes: ['101644'],
        maxDailyDose: "30 mL/day (15 mL BID mouth wash)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= POVIDONE IODINE - مجموعة أكواد =======  
    {
        name: "POVIDONE IODINE",
        codes: ['100281', '100291', '100609', '101745'],
        maxDailyDose: "40 mL/day (10 mL QID mouth wash)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= CETAPHIL CREAM INGREDIENTS - مجموعة أكواد =======  
    {
        name: "GLYCERIN + PETROLATUM + NIACINAMIDE",
        codes: ['100434', '100436'],
        maxDailyDose: "Apply as needed topically",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= COMPLETE MOUTH WASH - مجموعة أكواد =======  
    {
        name: "FLUORIDE + CETYLPYRIDINIUM CHLORIDE",
        codes: ['100900', '101643', '102870', '102296'],
        maxDailyDose: "30 mL/day (15 mL BID mouth wash)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= PROPOLIS + HONEY - مجموعة أكواد =======  
    {
        name: "PROPOLIS + HONEY",
        codes: ['107601', '107602', '107600'],
        maxDailyDose: "6 lozenges daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - contains honey" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= METABOLISM BOOSTER - مجموعة أكواد =======  
    {
        name: "CAFFEINE + GREEN TEA EXTRACT",
        codes: ['100187', '107350'],
        maxDailyDose: "400 mg caffeine equivalent daily",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in liver disease" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor in cardiac arrhythmias" },
        dm: { safe: true, emoji: "✅", firstChoice: "May improve glucose metabolism" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May increase BP - monitor closely" }
    },

    // ======= MAGNESIUM CITRATE - كود واحد =======  
    {
        name: "MAGNESIUM CITRATE",
        codes: ['100782'],
        maxDailyDose: "400 mg elemental magnesium daily",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in severe CKD - hypermagnesemia risk" },
        heart: { safe: true, emoji: "✅", firstChoice: "Beneficial for cardiac arrhythmias" },
        dm: { safe: true, emoji: "✅", firstChoice: "May improve insulin sensitivity" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "May help lower BP" }
    },
    // ======= LINACLOTIDE - كود واحد =======  
    {
        name: "LINACLOTIDE",
        codes: ['106136'],
        maxDailyDose: "290 mcg/day PO (IBS-C) or 145 mcg/day PO (CIC)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MELATONIN + VALERIAN - كود واحد =======  
    {
        name: "MELATONIN + VALERIAN",
        codes: ['106451'],
        maxDailyDose: "1 tablet daily (1mg melatonin + 45mg valerian extract)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },
    // ======= LINACLOTIDE - كود واحد مصحح =======  
    {
        name: "LINACLOTIDE",
        codes: ['106136'],
        maxDailyDose: "290 mcg/day PO (IBS-C) or 145 mcg/day PO (CIC)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= ERTAPENEM - كود واحد مصحح =======  
    {
        name: "ERTAPENEM",
        codes: ['107196'],
        maxDailyDose: "1000 mg/day IV/IM (adults) max dose",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "500 mg/day if CrCl ≤30 mL/min" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= TEICOPLANIN - كود واحد مصحح =======  
    {
        name: "TEICOPLANIN",
        codes: ['107199'],
        maxDailyDose: "1200 mg/day IV (severe infections) max dose",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose adjustment needed in CKD" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= OLOPATADINE + MOMETASONE - كود واحد مصحح =======  
    {
        name: "OLOPATADINE + MOMETASONE",
        codes: ['106566'],
        maxDailyDose: "2660 mcg olopatadine + 100 mcg mometasone daily",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LUTEIN - مجموعة أكواد =======  
    {
        name: "LUTEIN",
        codes: ['106346', '509404'],
        maxDailyDose: "20 mg lutein daily",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MELATONIN + VALERIAN - كود واحد =======  
    {
        name: "MELATONIN + VALERIAN",
        codes: ['106451'],
        maxDailyDose: "1 tablet daily (melatonin 1mg + valerian 45mg)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= BENZOCAINE - مجموعة أكواد =======  
    {
        name: "BENZOCAINE",
        codes: ['102600', '103747', '105248', '105249'],
        maxDailyDose: "12 lozenges daily (24 mg benzocaine max)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MENTHOL + EUCALYPTUS - مجموعة أكواد =======  
    {
        name: "MENTHOL + EUCALYPTUS",
        codes: ['103497', '105108', '105240'],
        maxDailyDose: "12 lozenges daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= NATURAL FRUIT EXTRACTS - مجموعة أكواد =======  
    {
        name: "NATURAL FRUIT EXTRACTS",
        codes: ['105035', '105036', '105037', '105038', '105239'],
        maxDailyDose: "8 lozenges daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - contains natural sugars" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= ELDERBERRY + PROPOLIS - مجموعة أكواد =======  
    {
        name: "ELDERBERRY + PROPOLIS",
        codes: ['107601', '107602', '107600', '103495', '103496'],
        maxDailyDose: "6 lozenges daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - contains honey" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },
    // ======= XANTHAN + CARBOMER + HYALURONIC ACID - مجموعة أكواد =======  
    {
        name: "XANTHAN + CARBOMER + HYALURONIC ACID",
        codes: ['102736', '102737'],
        maxDailyDose: "6 lozenges daily max (every 2-3 hours)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MILK PROTEIN + MALTODEXTRIN + MCT - مجموعة أكواد =======  
    {
        name: "MILK PROTEIN + MALTODEXTRIN + MCT",
        codes: ['105890', '105889', '105892', '105891', '105893'],
        maxDailyDose: "As per clinical nutritionist recommendation",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor protein intake in advanced CKD" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Specialized formula for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= BENZOCAINE + HONEY - كود واحد =======  
    {
        name: "BENZOCAINE + HONEY",
        codes: ['106156'],
        maxDailyDose: "6 lozenges daily (15 mg benzocaine max)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - contains honey" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MANUKA HONEY + ELDERBERRY - مجموعة أكواد =======  
    {
        name: "MANUKA HONEY + ELDERBERRY",
        codes: ['107601'],
        maxDailyDose: "6 lozenges daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - contains honey" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MANUKA HONEY + GINGER + LEMON + PROPOLIS - مجموعة أكواد =======  
    {
        name: "MANUKA HONEY + GINGER + LEMON + PROPOLIS",
        codes: ['107602'],
        maxDailyDose: "6 lozenges daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - contains honey" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= PROPOLIS + EUCALYPTUS + MANUKA HONEY - كود واحد =======  
    {
        name: "PROPOLIS + EUCALYPTUS + MANUKA HONEY",
        codes: ['107600'],
        maxDailyDose: "6 lozenges daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - contains honey" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LEMON + HONEY + PROPOLIS - كود واحد =======  
    {
        name: "LEMON + HONEY + PROPOLIS",
        codes: ['103495'],
        maxDailyDose: "8 lozenges daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - contains honey" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= ORANGE + PROPOLIS SUGAR FREE - كود واحد =======  
    {
        name: "ORANGE + PROPOLIS SUGAR FREE",
        codes: ['103496'],
        maxDailyDose: "8 lozenges daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Sugar-free formula safe for diabetics" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MIXED HERBAL EXTRACTS - كود واحد =======  
    {
        name: "MIXED HERBAL EXTRACTS",
        codes: ['107266'],
        maxDailyDose: "6 lozenges daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },
    // ======= LULICONAZOLE - كود واحد =======  
    {
        name: "LULICONAZOLE",
        codes: ['105399'],
        maxDailyDose: "8 grams cream daily max (1% cream topical)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LURASIDONE - مجموعة أكواد =======  
    {
        name: "LURASIDONE",
        codes: ['105910', '105911'],
        maxDailyDose: "160 mg/day PO (schizophrenia) or 120 mg/day (bipolar)",
        liver: { safe: false, emoji: "⚠️", firstChoice: "Use with caution in hepatic impairment" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for QT prolongation" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may cause hyperglycemia" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause orthostatic hypotension" }
    },

    // ======= LUSPATERCEPT - كود واحد =======  
    {
        name: "LUSPATERCEPT",
        codes: ['103865'],
        maxDailyDose: "1.25 mg/kg SC every 3 weeks max dose",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for mild-moderate CKD" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for thrombotic events" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May increase BP - monitor closely" }
    },

    // ======= LUTEIN + ZINC - مجموعة أكواد =======  
    {
        name: "LUTEIN + ZINC",
        codes: ['106140', '105333'],
        maxDailyDose: "20 mg lutein + 15 mg zinc daily",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LUTEIN + ZINC + ARGININE - كود واحد =======  
    {
        name: "LUTEIN + ZINC + ARGININE",
        codes: ['101374'],
        maxDailyDose: "20 mg lutein + 15 mg zinc + 500 mg arginine daily",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= LYNESTRENOL - كود واحد =======  
    {
        name: "LYNESTRENOL",
        codes: ['101647'],
        maxDailyDose: "5 mg/day PO max dose",
        liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe liver disease" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for thrombotic events" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "May affect glucose tolerance" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "May increase BP" }
    },

    // ======= MAGALDRATE + SIMETHICONE - مجموعة أكواد =======  
    {
        name: "MAGALDRATE + SIMETHICONE",
        codes: ['100009', '100010'],
        maxDailyDose: "4000 mg magaldrate + 240 mg simethicone daily",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Avoid in severe CKD - aluminum accumulation" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MENTHOL ALONE - كود واحد =======  
    {
        name: "MENTHOL",
        codes: ['105108'],
        maxDailyDose: "12 lozenges daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= FRUIT EXTRACT COMBINATIONS - مجموعة أكواد =======  
    {
        name: "MIXED FRUIT EXTRACTS",
        codes: ['105035', '105036', '105037', '105038'],
        maxDailyDose: "8 lozenges daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - contains natural sugars" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= HERBAL EXTRACTS - كود واحد =======  
    {
        name: "HERBAL EXTRACTS",
        codes: ['107266'],
        maxDailyDose: "6 lozenges daily max",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= BENZOCAINE - مجموعة أكواد =======  
    {
        name: "BENZOCAINE",
        codes: ['102600', '103747', '105248', '105249'],
        maxDailyDose: "12 lozenges/day max (24 mg benzocaine daily)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
    },

    // ======= MAGNESIUM SULFATE + CITRIC ACID + SODIUM BICARBONATE - كود واحد =======  
    {
        name: "MAGNESIUM SULFATE + CITRIC ACID + SODIUM BICARBONATE",
        codes: ['103771'],
        maxDailyDose: "2 sachets daily (for calcium oxalate prevention)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
        kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor in CKD - electrolyte imbalance risk" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
        hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor sodium content" }
    },

        // ======= IBUPROFEN - مجموعة أكواد =======  
        {
            name: "IBUPROFEN",
            codes: ['100693', '101115', '101788', '102005', '101588', '105044', '101781', '101784', '105410', '102006', '100049', '100348', '100349', '101146', '101159', '101160', '101586', '101587', '105200', '105201', '105175', '101779', '101780', '101785', '101786', '101787', '101925', '102001', '102002', '102003', '103955', '101789', '102936', '102590', '100050', '102004'],
            maxDailyDose: "3200 mg/day PO max (800mg QID)",
            liver: { safe: false, emoji: "⚠️", firstChoice: "Use lowest dose - hepatotoxicity risk" },
            kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - nephrotoxicity risk" },
            heart: { safe: false, emoji: "❌", firstChoice: "Increases CV risk - avoid in heart disease" },
            dm: { safe: false, emoji: "⚠️", firstChoice: "May mask infection signs - use cautiously" },
            hypertension: { safe: false, emoji: "❌", firstChoice: "May increase BP - monitor closely" }
        },

{
    name: "POLYSACCHARIDE SUPPLEMENTS",
    codes: ['108489','508515','508626'],
    maxDailyDose: "varies by formulation",
    liver: { safe: true, emoji: "✅", firstChoice: "Generally safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidneys" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May affect glucose—unknown composition" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Generally safe" }
},


{
    name: "EZETIMIBE COMBINATIONS",
    codes: ['107477','107478','107479','105019','105020','105021','106454','106455','106456'],
    maxDailyDose: "10 mg ezetimibe/day max",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs (statin component)" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Major CV benefits" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Statins may raise glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effect" }
},

{
    name: "EVENING PRIMROSE EXTRACT",
    codes: ['106372','508151','103171','103468','101216','101367','101369','101403','106168','107498','102040','102927','106482','508626'],
    maxDailyDose: "3000 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No issues" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No issues" },
    heart: { safe: true, emoji: "✅", firstChoice: "No CV impact" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May affect glycemia" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP change" }
},

{
    name: "FENOFIBRATE",
    codes: ['100850','101274','101275','105771','105724','106305'],
    maxDailyDose: "200 mg/day PO (micronized)",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid—use Omega-3 in severe disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid if eGFR<30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Decreases TG" },
    dm: { safe: true, emoji: "✅", firstChoice: "Helps diabetic dyslipidemia" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FEXOFENADINE",
    codes: ['100843','102670','100870','100871','105715','100872','107654','102189','107655','102190'],
    maxDailyDose: "180 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Spacing dose if CrCl<30" },
    heart: { safe: true, emoji: "✅", firstChoice: "No QT prolongation" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FILGRASTIM",
    codes: ['103414','103418','107531'],
    maxDailyDose: "10 µg/kg/day SC (max 800 µg)",
    liver: { safe: true, emoji: "✅", firstChoice: "No data—generally safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiotoxicity" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FINASTERIDE",
    codes: ['101794','105668','100875','103783','101795','105665'],
    maxDailyDose: "5 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use Dutasteride cautiously" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac issues" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FINGOLIMOD HCL",
    codes: ['107261','107363','103906','102852','107258','105484','105738'],
    maxDailyDose: "0.5 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs—switch to Teriflunomide if high" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "❌", firstChoice: "Avoid in AV block—use Dimethyl fumarate" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor retina (macular edema risk)" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Check BP regularly" }
},
{
    name: "FLUOXETINE",
    codes: ['105708','100903','101812','101993'],
    maxDailyDose: "80 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use Sertraline if severe impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Minimal QT risk" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose in T1DM" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FLUTICASONE PROPIONATE",
    codes: ['105558','106236','105559','100896','100898','105561','103163','103162','103164','106247','100894','102829','106479','103501','100895','100897','107295','107296'],
    maxDailyDose: "1000 µg/day inhaled (divided) or 400 µg/day nasal",
    liver: { safe: true, emoji: "✅", firstChoice: "No systemic impact at normal doses" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiotoxicity" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose if long-term high dose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP change" }
},
{
    name: "FLUVASTATIN",
    codes: ['101258'],
    maxDailyDose: "80 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid if transaminases>3×ULN" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Improves CV outcomes" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},
{
    name: "FOLIC ACID",
    codes: ['100914','100915','100916','100917','100918','100919','102918','100983','101064','106907','105109','105661','508738','508725','105563','100837','103662'],
    maxDailyDose: "5 mg/day PO (therapeutic); UL 1 mg OTC",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "May lower homocysteine" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neural tube protection in GDM" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "FONDAPARINUX SODIUM",
    codes: ['103588','105993'],
    maxDailyDose: "10 mg/day SC",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl<30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Preferred in HIT history" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Watch for bleeding if severe HTN" }
},
{
    name: "GABAPENTIN",
    codes: ['100953','100954','100962','100963','102605','103130'],
    maxDailyDose: "3600 mg/day PO (divided doses)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment needed" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose adjust CrCl<60" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardiac safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "GALANTAMINE",
    codes: ['102992','101877'],
    maxDailyDose: "24 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use Donepezil in severe hepatic impairment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid if CrCl<9" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Bradycardia risk—monitor ECG" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic impact" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for BP" }
},
{
    name: "GANCICLOVIR",
    codes: ['106511'],
    maxDailyDose: "6000 mg/day PO (1000 mg tid ×3 or 500 mg q3h ×6)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor LFTs" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Dose adjust or switch to Foscarnet" },
    heart: { safe: true, emoji: "✅", firstChoice: "No specific issue" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on BP" }
},
{
    name: "GEMFIBROZIL",
    codes: ['101315'],
    maxDailyDose: "1200 mg/day PO (600 mg BID)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in hepatic disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid if eGFR <30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Improves lipid profile" },
    dm: { safe: true, emoji: "✅", firstChoice: "Benefits TG in DM" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP impact" }
},
{
    name: "GENTAMICIN-EYE DP",
    codes: ['100152','100964','100980'],
    maxDailyDose: "1-2 drops every 4 hours (Max: every hour in severe infection)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment topical" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe topical" },
    dm: { safe: true, emoji: "✅", firstChoice: "No effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect"
    }
},
{
    name: "GINKOBILOBA",
    codes: ['102248','100189','100312','100984','100985','100986','107507','100987','508517','507982','107079','107615','101214','508719','102142'],
    maxDailyDose: "240 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment necessary" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment necessary" },
    heart: { safe: true, emoji: "✅", firstChoice: "May improve circulation" },
    dm: { safe: true, emoji: "✅", firstChoice: "No effect" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Potential to lower BP—monitor"
    }
},
{
    name: "GLIBENCLAMIDE",
    codes: ['100164','100592','100653','100690','100995'],
    maxDailyDose: "15 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Dose reduce hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Not preferred in CKD—switch to glipizide" },
    heart: { safe: true, emoji: "✅", firstChoice: "Low risk" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Risk hypo—monitor closely" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect" }
},
{
    name: "GLIMEPIRIDE",
    codes: ['100074','100075','100076','103222','103223','105650','103224','100996','100997','100998','100999','102694','101000','101001','101002','101003','101004','101005','101006','101007','101008','101009','101018','101019','101020','101021','103401','102473','102572','102502','102503','102504','102505','102541','105672'],
    maxDailyDose: "8 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Lower dose in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Lower dose or switch in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "No direct CV risk" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Hypoglycemia risk" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect"
    }
},
{
    name: "GLUCAGON",
    codes: ['103249'],
    maxDailyDose: "2 mg IM or SC (1 mg ×2)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Raises glucose acutely" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect"
    }
},
{
    name: "GEMIFLOXACIN",
    codes: ['100822','100823','105803'],
    maxDailyDose: "320 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution moderate/severe hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Dose halve if CrCl <40" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT prolongation risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "No effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect"
    }
},
{
    name: "GANIRELIX ACETATE",
    codes: ['101646'],
    maxDailyDose: "0.25 mg/day SC",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment needed" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "No effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "No effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect"
    }
},

{
    name: "FOSFOMYCIN TROMETAMOL",
    codes: ['101456','105575'],
    maxDailyDose: "3 g single dose (repeat after 48 h if needed)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid if CrCl<10" },
    heart: { safe: true, emoji: "✅", firstChoice: "No effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
},

{
    name: "CRANBERRY_EXTRACT",
    codes: ['103103','106426','106369','107235','105368','105589'],
    maxDailyDose: "1500 mg/day PAC-standardized",
    liver: { safe: true, emoji: "✅", firstChoice: "Hepatoprotective data" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Caution if nephrolithiasis" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "May improve glucose modestly" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DILOXANIDE_METRONIDAZOLE",
    codes: ['100941'],
    maxDailyDose: "1500 mg Diloxanide + 2250 mg Metronidazole/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Adjust Metronidazole in hepatic disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Monitor glucose (Metro)" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DIPHENHYDRAMINE",
    codes: ['103834','103833','103831','103832','100814','100815'],
    maxDailyDose: "300 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Caution hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "QT risk in high doses" },
    dm: { safe: true, emoji: "✅", firstChoice: "Sugar-free syrup for DM" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DONEPEZIL",
    codes: ['102681','102680'],
    maxDailyDose: "23 mg/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution severe hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Bradycardia risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "DROSPIRENONE_ETHINYL_ESTRADIOL",
    codes: ['105136','102380'],
    maxDailyDose: "3 mg Drospirenone + 30 µg EE/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Contra in hepatic disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid if CrCl <50 (K⁺ rise)" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Thrombotic risk – avoid smokers >35y" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May raise BP" }
},
{
    name: "DEXTROSE_IV",
    codes: ['106391','100645','105360'],
    maxDailyDose: "No fixed max (individualized) – 5 g/kg/day typical",
    liver: { safe: true, emoji: "✅", firstChoice: "Monitor glucose" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Adjust fluid volume in CKD" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Caution in HF (fluid overload)" },
    dm: { safe: false, emoji: "⚠", firstChoice: "May raise glucose – monitor" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Volume may raise BP" }
},
{
    name: "DAPAGLIFLOZIN_METFORMIN",
    codes: ['105039','105040','105041','105042'],
    maxDailyDose: "10 mg Dapa + 2000 mg Metformin/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe hepatic disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "eGFR <30 contraindicated" },
    heart: { safe: true, emoji: "✅", firstChoice: "HF benefit (Dapa)" },
    dm: { safe: true, emoji: "✅", firstChoice: "Synergistic glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May lower BP" }
},
{
    name: "EMPAGLIFLOZIN_METFORMIN",
    codes: ['103524','103523','103522','103521'],
    maxDailyDose: "25 mg Empa + 2000 mg Metformin/day PO",
    liver: { safe: false, emoji: "⚠", firstChoice: "Avoid severe hepatic disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "eGFR <30 contraindicated" },
    heart: { safe: true, emoji: "✅", firstChoice: "CV & HF benefit" },
    dm: { safe: true, emoji: "✅", firstChoice: "Improves glycemic control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May lower BP" }
},

    // ======= BUTENAFINE - مجموعة أكواد =======
    {
        name: "BUTENAFINE",
        codes: ['103228', '102752', '102753', '103472', '102754'],
        maxDailyDose: "Apply twice daily max (topical use, 4 weeks maximum)",
        liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption from topical use" },
        kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients - topical application" },
        heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
        dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients with fungal infections" },
        hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
    },

  // ===== ANTAZOLINE + TETRAHYDROZOLINE =====
  {
    name: "ANTAZOLINE, TETRAHYDROZOLINE",
    codes: ["100153", "101598", "101641"],
    maxDailyDose: "8 drops/day (1–2 drops each eye up to QID)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Use cautiously in severe cardiac disease" },
    dm: { safe: true, emoji: "✅", firstChoice: "No effect" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Avoid in uncontrolled HTN" }
  },
{
    name: "MUPIROCIN",
    codes: ['105439','105664','105838','100262'],
    maxDailyDose: "Topical — thin layer ×3/day",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose change" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardiac neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Glucose neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP impact" }
},
{
    name: "MYCOPHENOLATE MOFETIL",
    codes: ['100424','106010','105997','106097','106040','103571'],
    maxDailyDose: "2 g/day PO (1 g BID)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce if eGFR <30" },
    heart: { safe: true, emoji: "✅", firstChoice: "No direct effect" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May raise BP" }
},
{
    name: "MYCOPHENOLATE SODIUM",
    codes: ['106441','106446','102941'],
    maxDailyDose: "1.44 g/day PO (720 mg BID)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce if eGFR <30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardiac neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May raise BP" }
},
{
    name: "SODIUM ALGINATE + NaHCO₃ + K",
    codes: ['105541','106112','100971','100972','105194','105193','102858','100973','100974','101886'],
    maxDailyDose: "40 mL/day suspension",
    liver: { safe: true, emoji: "✅", firstChoice: "Not absorbed" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Watch Na⁺ load in CKD" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Caution in HF (Na⁺)" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "High Na⁺ may ↑BP" }
},
{
    name: "SODIUM BICARBONATE + CITRIC ACID",
    codes: ['100066','100008','100766','100767','100768','100769','100770','100771','105252'],
    maxDailyDose: "2 sachets/day effervescent",
    liver: { safe: true, emoji: "✅", firstChoice: "Hepatic neutral" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Avoid in severe CKD" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "High Na⁺ load" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May raise BP" }
},
{
    name: "NAPROXEN",
    codes: ['107391','107089','101489','101808','101809','101810','101811','101926','101927'],
    maxDailyDose: "1000 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in advanced CKD" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "↑CV risk; prefer acetaminophen" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May ↑BP" }
},
{
    name: "NEBIVOLOL",
    codes: ['105716','106118','101507'],
    maxDailyDose: "40 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl <30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardio-selective β-blocker" },
    dm: { safe: true, emoji: "✅", firstChoice: "Minimal glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Indicated for HTN" }
},
{
    name: "NEPAFENAC",
    codes: ['105061'],
    maxDailyDose: "1 drop/eye TID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NICORANDIL",
    codes: ['105045','105046'],
    maxDailyDose: "40 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Anti-anginal" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May lower BP" }
},
{
    name: "NICOTINE",
    codes: ['106153','106154','106155','101536','101537','101538','107263','101539','101540','101541','101543','101544'],
    maxDailyDose: "25 mg/24 h transdermal",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Caution in recent MI" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May raise BP" }
},
{
    name: "NIFEDIPINE",
    codes: ['100031','100032','100033','105619'],
    maxDailyDose: "90 mg/day PO (ER)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in cirrhosis" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Anti-anginal" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Indicated for HTN" }
},
{
    name: "NILOTINIB",
    codes: ['106560','106561','103372','103373'],
    maxDailyDose: "800 mg/day PO (400 mg BID)",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid in severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "❌", firstChoice: "QT prolongation risk" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May raise glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NINTEDANIB",
    codes: ['103568','103545'],
    maxDailyDose: "300 mg/day PO (150 mg BID)",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid Child-Pugh B/C" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No data; assume safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NIRMATRELVIR",
    codes: ['106383'],
    maxDailyDose: "1200 mg/day PO (600 mg BID)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Avoid severe hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if eGFR <60" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NITROFURANTOIN",
    codes: ['100531','102274'],
    maxDailyDose: "400 mg/day PO (100 mg Q6h)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Avoid in cholestasis" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contra if CrCl <30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NIZATIDINE",
    codes: ['100876','100877','100878'],
    maxDailyDose: "300 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl <50" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NORETHISTERONE",
    codes: ['101770'],
    maxDailyDose: "15 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Contra in severe liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Caution in CVD" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May worsen glucose" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "NORFLOXACIN",
    codes: ['100149','101557','101564','102272'],
    maxDailyDose: "800 mg/day PO (400 mg BID)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl <30" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OLANZAPINE",
    codes: ['103216','103215','102721','102722','102719','102723','102720','103508','103509','103507','105031','105032','106029','106056','105430','105431','102895','102446'],
    maxDailyDose: "20 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT & weight gain" },
    dm: { safe: false, emoji: "❌", firstChoice: "High diabetes risk" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OLAPARIB",
    codes: ['105488','103563'],
    maxDailyDose: "600 mg/day PO (300 mg BID)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in mod hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if eGFR <30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OLMESARTAN MEDOXOMIL",
    codes: ['105913','105914','101612','101613','105828','105829','105830','105831','105832'],
    maxDailyDose: "40 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor creatinine" },
    heart: { safe: true, emoji: "✅", firstChoice: "HF benefit" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line ARB" }
},
{
    name: "OLOPATADINE",
    codes: ['101614','103443','101720','101721'],
    maxDailyDose: "1 drop/eye BID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OMEPRAZOLE",
    codes: ['100012','100013','100014','100015','100760','100783','100965','100966','100967','100968','106151','106152','100970','101110','101336','101337','101616','101617','101618','101619','101620','101621','102553','101954','101955'],
    maxDailyDose: "120 mg/day PO (divided)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "ONDANSETRON",
    codes: ['106553','106554','105854','102428','103820','105463','105464','105465'],
    maxDailyDose: "24 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ severe liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT prolongation" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OSELTAMIVIR",
    codes: ['102573','102175'],
    maxDailyDose: "150 mg/day PO (75 mg BID)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl <60" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OSIMERTINIB",
    codes: ['103423','103864'],
    maxDailyDose: "80 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT prolongation" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OXCARBAZEPINE",
    codes: ['105255','105256','102580','102579','102581'],
    maxDailyDose: "2400 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl <30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OXYTOCIN",
    codes: ['102467'],
    maxDailyDose: "20 mU/min IV infusion",
    liver: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for arrhythmia" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause HTN" }
},
{
    name: "PALBOCICLIB",
    codes: ['103198'],
    maxDailyDose: "125 mg/day PO (21 days on, 7 off)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PANTOPRAZOLE",
    codes: ['101699','101700','103261','103262','101701','101702','101703','101704','101705','101706','101707','101708','101709','101710','106540','106541','106542','106537','106538','106539','101802','101803','101804','102707','101861','103189','103190'],
    maxDailyDose: "240 mg/day IV or PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PALIPERIDONE",
    codes: ['200101','200102','200103'],
    maxDailyDose: "12 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment needed" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce if CrCl < 50 mL/min" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor QT interval" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Can ↑ glucose; monitor" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral on BP" }
},
{
    name: "PALIVIZUMAB",
    codes: ['200104','200105'],
    maxDailyDose: "15 mg/kg/month IM (max 1000 mg)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose change" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardiac neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Glucose neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effect" }
},
{
    name: "PANTHENOL",
    codes: ['200106','200107','200108'],
    maxDailyDose: "Topical – apply thin layer PRN",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac impact" },
    dm: { safe: true, emoji: "✅", firstChoice: "Glucose neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "BP neutral" }
},
{
    name: "PEGFILGRASTIM",
    codes: ['200109','200110'],
    maxDailyDose: "6 mg SC once per chemo cycle",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PEMBROLIZUMAB",
    codes: ['200111','200112','200113'],
    maxDailyDose: "400 mg IV every 6 weeks",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Hepatitis risk—monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Rare myocarditis—monitor" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PENTOXIFYLLINE",
    codes: ['200114','200115'],
    maxDailyDose: "1200 mg/day PO (400 mg TID)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce if CrCl < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Improves circulation" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PERINDOPRIL",
    codes: ['200116','200117','200118'],
    maxDailyDose: "16 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce if eGFR < 60" },
    heart: { safe: true, emoji: "✅", firstChoice: "HF benefit" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line ACEi" }
},
{
    name: "PHENAZOPYRIDINE",
    codes: ['200119','200120'],
    maxDailyDose: "600 mg/day PO (200 mg TID)",
    liver: { safe: true, emoji: "✅", firstChoice: "No data—generally safe" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contra if CrCl < 50" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PHENOBARBITAL",
    codes: ['200121','200122','200123'],
    maxDailyDose: "400 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Adjust in hepatic disease" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PHENTERMINE",
    codes: ['200124','200125'],
    maxDailyDose: "37.5 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Avoid if CrCl < 15" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Avoid in CVD" },
    dm: { safe: true, emoji: "✅", firstChoice: "Monitor glucose (weight loss)" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May ↑BP—avoid uncontrolled HTN" }
},
{
    name: "PHENYLEPHRINE",
    codes: ['200126','200127','200128'],
    maxDailyDose: "60 mg/day PO (10 mg Q4h)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May ↑BP/HR" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contra in severe HTN" }
},
{
    name: "PIOGLITAZONE",
    codes: ['200129','200130'],
    maxDailyDose: "45 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid if ALT > 2.5× ULN" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Contra in NYHA III–IV HF" },
    dm: { safe: true, emoji: "✅", firstChoice: "Insulin-sensitizer" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PIRFENIDONE",
    codes: ['200131','200132','200133'],
    maxDailyDose: "2403 mg/day PO (801 mg TID)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs monthly" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PREGABALIN",
    codes: ['200134','200135','200136'],
    maxDailyDose: "600 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 60" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May cause weight gain" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PROPRANOLOL",
    codes: ['200137','200138','200139'],
    maxDailyDose: "640 mg/day PO (divided)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in cirrhosis" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Anti-arrhythmic" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Effective β-blocker" }
},
{
    name: "PYRAZINAMIDE",
    codes: ['200140','200141'],
    maxDailyDose: "2000 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Hepatotoxic—avoid if LFTs high" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "QUETIAPINE",
    codes: ['200142','200143','200144'],
    maxDailyDose: "800 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT prolongation—monitor" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Weight & glucose ↑" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "QUINAPRIL",
    codes: ['200145','200146'],
    maxDailyDose: "80 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 60" },
    heart: { safe: true, emoji: "✅", firstChoice: "HF benefit" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "ACE-inhibitor" }
},
{
    name: "RABEPRAZOLE",
    codes: ['200147','200148'],
    maxDailyDose: "40 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in severe hepatic disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "RALOXIFENE",
    codes: ['200149','200150'],
    maxDailyDose: "60 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Avoid severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "↑Risk of VTE" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "RAMIPRIL",
    codes: ['200151','200152','200153'],
    maxDailyDose: "10 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor creatinine/eGFR" },
    heart: { safe: true, emoji: "✅", firstChoice: "Post-MI & HF benefit" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "ACEi first line" }
},
{
    name: "RANIBIZUMAB",
    codes: ['200154','200155'],
    maxDailyDose: "0.5 mg intravitreal monthly",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical ocular" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No systemic exposure" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Used in diabetic retinopathy" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "RANITIDINE",
    codes: ['200156','200157','200158'],
    maxDailyDose: "300 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "Dose ↓ in hepatic failure" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 50" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "RIFAMPICIN",
    codes: ['200159','200160'],
    maxDailyDose: "1200 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Hepatotoxic—monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May alter glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "RILPIVIRINE",
    codes: ['200161','200162'],
    maxDailyDose: "25 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs in hepatopathy" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT risk at high doses" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "RITONAVIR",
    codes: ['200163','200164','200165'],
    maxDailyDose: "200 mg/day PO (boosting)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Avoid severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May prolong PR/QT" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor for hyperglycemia" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "RIVAROXABAN",
    codes: ['200166','200167','200168'],
    maxDailyDose: "20 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Contra in Child-Pugh B/C" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl 15-49" },
    heart: { safe: true, emoji: "✅", firstChoice: "AF stroke prevention" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "ROSUVASTATIN",
    codes: ['200169','200170','200171'],
    maxDailyDose: "40 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Contra in active liver disease" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Max 10 mg if CrCl < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May ↑ glucose slightly" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OCTREOTIDE",
    codes: ['103032','103031','103033','103034'],
    maxDailyDose: "1.5 mg/day SC or IM max",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Adjust in cirrhosis; monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose change" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OCRELIZUMAB",
    codes: ['103661'],
    maxDailyDose: "600 mg IV every 6 months",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OMALIZUMAB",
    codes: ['105848','105826','105780','106331','103408'],
    maxDailyDose: "600 mg SC every 2 weeks",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OMBITASVIR/PARITAPREVIR/RITONAVIR",
    codes: ['103158'],
    maxDailyDose: "25 mg/150 mg/100 mg once daily",
    liver: { safe: false, emoji: "❌", firstChoice: "Contra in Child-Pugh B/C" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NORMAL HUMAN IMMUNOGLOBULIN (IVIG)",
    codes: ['103680','106320'],
    maxDailyDose: "2 g/kg per course (≈140 g for 70 kg)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor renal function—AKI risk" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Watch volume load" }
},
{
    name: "NATALIZUMAB",
    codes: ['106941','103548'],
    maxDailyDose: "300 mg IV every 4 weeks",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NAFTIFINE",
    codes: ['100813'],
    maxDailyDose: "Topical — apply QD",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic uptake" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "SODIUM CROMOGLYCATE/TETRAHYDROZOLINE",
    codes: ['100568'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical use" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical use" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Alpha-agonist may ↑BP" }
},
{
    name: "NAPHAZOLINE HCl",
    codes: ['101941','106248'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Possible ↑BP/HR" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Use short term" }
},
{
    name: "NAPHAZOLINE + PHENIRAMINE",
    codes: ['101488'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Alpha-agonist caution" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "NAPHAZOLINE NITRATE/ZINC SULFATE",
    codes: ['102698'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Alpha-agonist caution" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "NAPHAZOLINE + CHLORPHENIRAMINE",
    codes: ['101773'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Alpha-agonist caution" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "NEOMYCIN/POLYMYXIN B/DEXAMETHASONE",
    codes: ['101382','101381'],
    maxDailyDose: "Drops — 1–2 drops Q4–6h",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Steroid may raise glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NIVOLUMAB",
    codes: ['103872','103874','103105','103871','103873'],
    maxDailyDose: "480 mg IV Q4 weeks",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Immune hepatitis—monitor" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor myocarditis" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PARACETAMOL + DIPHENHYDRAMINE",
    codes: ['100045','101692'],
    maxDailyDose: "Paracetamol 4000 mg + Diphenhydramine 100 mg per day",
    liver: { safe: false, emoji: "❌", firstChoice: "Limit if liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PARACETAMOL + CAFFEINE",
    codes: ['100866','101690','106039'],
    maxDailyDose: "Paracetamol 4000 mg + Caffeine 520 mg per day",
    liver: { safe: false, emoji: "❌", firstChoice: "Caution hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Caffeine may ↑HR/BP" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "PARACETAMOL + CAFFEINE + CODEINE",
    codes: ['102094'],
    maxDailyDose: "Paracetamol 4000 mg + Caffeine 520 mg + Codeine 240 mg per day",
    liver: { safe: false, emoji: "❌", firstChoice: "Caution hepatic" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce if CrCl < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "PARACETAMOL + PHENYLEPHRINE",
    codes: ['101693','101689','101691'],
    maxDailyDose: "Paracetamol 4000 mg + Phenylephrine 60 mg per day",
    liver: { safe: false, emoji: "❌", firstChoice: "Limit in liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Phenylephrine may ↑BP" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Avoid uncontrolled HTN" }
},
{
    name: "PARACETAMOL + PSEUDOEPHEDRINE",
    codes: ['100041','100046','100911','102079'],
    maxDailyDose: "Paracetamol 4000 mg + Pseudoephedrine 240 mg per day",
    liver: { safe: false, emoji: "❌", firstChoice: "Caution hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May ↑BP/HR" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "PARACETAMOL + DEXTROMETHORPHAN + PHENYLEPHRINE",
    codes: ['100042'],
    maxDailyDose: "Paracetamol 4000 mg + Dextromethorphan 120 mg + Phenylephrine 60 mg per day",
    liver: { safe: false, emoji: "❌", firstChoice: "Caution hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Phenylephrine caution" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "PARACETAMOL + CHLORPHENIRAMINE + PHENYLEPHRINE",
    codes: ['100865','100906'],
    maxDailyDose: "Paracetamol 4000 mg + Chlorpheniramine 12 mg + Phenylephrine 60 mg per day",
    liver: { safe: false, emoji: "❌", firstChoice: "Caution hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Phenylephrine caution" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "PARACETAMOL + ORPHENADRINE",
    codes: ['101485'],
    maxDailyDose: "Paracetamol 3000 mg + Orphenadrine 200 mg per day",
    liver: { safe: false, emoji: "❌", firstChoice: "Limit hepatic use" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Orphenadrine arrhythmia risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PARACETAMOL + TRIPROLIDINE + PHENYLEPHRINE",
    codes: ['101951','101952'],
    maxDailyDose: "Paracetamol 4000 mg + Triprolidine 5 mg + Phenylephrine 60 mg per day",
    liver: { safe: false, emoji: "❌", firstChoice: "Caution hepatic" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Phenylephrine caution" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "PARACETAMOL + SODIUM BICARBONATE",
    codes: ['100867','101684'],
    maxDailyDose: "Paracetamol 4000 mg + Sodium Bicarbonate 2000 mg per day",
    liver: { safe: false, emoji: "❌", firstChoice: "Limit hepatic" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "High Na⁺—caution CKD" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May ↑Na⁺ load in HF" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May raise BP" }
},
{
    name: "OFLOXACIN",
    codes: ['100816','101602','101634','101679','101599','102179'],
    maxDailyDose: "800 mg/day PO (400 mg BID)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 30" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT prolongation risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OFLOXACIN + DEXAMETHASONE",
    codes: ['100640'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Steroid may raise glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OFLOXACIN/PREDNISOLONE/TETRAHYDROZOLINE",
    codes: ['101349'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Alpha-agonist may ↑BP" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Steroid glucose rise" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "OMEGA-3 FISH OIL (EPA + DHA)",
    codes: ['100113','100168','100169','107543','100186'],
    maxDailyDose: "4 g/day total omega-3 acids",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May slightly lower BP" }
},
{
    name: "OLARATUMAB",
    codes: ['103583'],
    maxDailyDose: "15 mg/kg IV on Days 1 & 8 of a 21-day cycle (≈1050 mg for 70 kg)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs—hepatic toxicity reported" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OCRELIZUMAB",
    codes: ['103661'],
    maxDailyDose: "600 mg IV every 6 months",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NYSTATIN (ORAL)",
    codes: ['101434','101484','101920'],
    maxDailyDose: "2.4 million IU/day PO (600 k IU Q6h)",
    liver: { safe: true, emoji: "✅", firstChoice: "Not systemically absorbed" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NYSTATIN (TOPICAL/VAGINAL)",
    codes: ['101432','101433','103817','106059','103653'],
    maxDailyDose: "Apply QID to affected area",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical—minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OCTAGAM (IVIG)",
    codes: ['103680','106320'],
    maxDailyDose: "2 g/kg per course (≈140 g for 70 kg)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor for AKI; hydrate" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Watch volume in HF" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "High Na⁺ load—monitor BP" }
},
{
    name: "OLSAR (OLMESARTAN/HCTZ)",
    codes: ['105830','105831','105832'],
    maxDailyDose: "40 mg Olmesartan + 25 mg HCTZ per day",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor eGFR & K⁺" },
    heart: { safe: true, emoji: "✅", firstChoice: "CHF benefit" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Combination antihypertensive" }
},
{
    name: "OMEGA-3 (EPA + DHA) GUMMIES",
    codes: ['107504','105529','105438'],
    maxDailyDose: "4 g/day total omega-3 acids",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May slightly lower BP" }
},
{
    name: "OFLOXACIN + DEXAMETHASONE",
    codes: ['100640'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Steroid may ↑ glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OFLOXACIN/PREDNISOLONE/TETRHYDROZOLINE",
    codes: ['101349'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Alpha-agonist may raise BP" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Steroid glucose rise" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "NAPHAZOLINE HYDROCHLORIDE",
    codes: ['101941','106248'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May elevate BP" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Short-term use only" }
},
{
    name: "NAPHAZOLINE + ZINC SULFATE",
    codes: ['102698'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Alpha-agonist caution" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "NAPHAZOLINE + CHLORPHENIRAMINE",
    codes: ['101773'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP/HR" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Avoid uncontrolled HTN" }
},
{
    name: "NEPAFENAC",
    codes: ['105061'],
    maxDailyDose: "1 drop/eye TID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NICORANDIL",
    codes: ['105045','105046'],
    maxDailyDose: "40 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Anti-anginal" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May lower BP" }
},
{
    name: "NITROFURANTOIN",
    codes: ['100531','102274'],
    maxDailyDose: "400 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Avoid in cholestasis" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contra if CrCl < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NIFEDIPINE",
    codes: ['100031','100032','100033','105619'],
    maxDailyDose: "90 mg/day PO (ER)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in cirrhosis" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Anti-anginal" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Indicated for HTN" }
},
{
    name: "NILOTINIB",
    codes: ['106560','106561','103372','103373'],
    maxDailyDose: "800 mg/day PO (400 mg BID)",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid in severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "❌", firstChoice: "QT prolongation risk" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May ↑ glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NINTEDANIB",
    codes: ['103568','103545'],
    maxDailyDose: "300 mg/day PO (150 mg BID)",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid Child-Pugh B/C" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No data—assume safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NIVOLUMAB",
    codes: ['103872','103874','103105','103871','103873'],
    maxDailyDose: "480 mg IV every 4 weeks",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Immune hepatitis—monitor" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Myocarditis risk—monitor" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NIZATIDINE",
    codes: ['100876','100877','100878'],
    maxDailyDose: "300 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 50" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NORETHISTERONE",
    codes: ['101770'],
    maxDailyDose: "15 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Contra in severe liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Caution in CVD" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May worsen glucose" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "NORFLOXACIN",
    codes: ['100149','101557','101564','102272'],
    maxDailyDose: "800 mg/day PO (400 mg BID)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 30" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT prolongation risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OMEPRAZOLE",
    codes: ['100012','100013','100014','100015','100760'],
    maxDailyDose: "120 mg/day PO (divided)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "ONDANSETRON",
    codes: ['106553','106554','105463','105464','105465','102428','105854','103820'],
    maxDailyDose: "24 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in severe hepatic disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT prolongation—monitor" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OXYTOCIN",
    codes: ['102467'],
    maxDailyDose: "20 mU/min IV infusion (continuous)",
    liver: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for arrhythmia" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May raise BP" }
},
{
    name: "OXCARBAZEPINE",
    codes: ['105255','105256','102580','102579','102581'],
    maxDailyDose: "2400 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PALIVIZUMAB",
    codes: ['103569'],
    maxDailyDose: "15 mg/kg IM monthly (max 5 doses/season)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PANTOPRAZOLE",
    codes: ['101699','101700','103261','103262'],
    maxDailyDose: "240 mg/day IV or PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PARACETAMOL",
    codes: ['100038','107460','105813','103835'],
    maxDailyDose: "4000 mg/day PO or IV",
    liver: { safe: false, emoji: "❌", firstChoice: "Reduce or avoid in liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardiac neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "MULTIVITAMIN (PREGNANCY)",
    codes: ['105372','105286','106364','107280','106335','101376','101377','106348','103204','102480','102989','107604','107514'],
    maxDailyDose: "1 tablet or gummy/day (meets RDA; avoid >10 000 IU vit A)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Renal safe at RDA doses" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Glucose neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "MULTIVITAMIN (WOMEN)",
    codes: ['106250','107493','107588','102324'],
    maxDailyDose: "1 tablet/day",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe at RDA doses" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "MULTIVITAMIN + MINERALS (MEN)",
    codes: ['107492'],
    maxDailyDose: "1 tablet/day",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe at RDA doses" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NASAL WASH & SALINE",
    codes: ['105508','105509','107461'],
    maxDailyDose: "Irrigate 2–3 ×/day (no systemic dose)",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NATURAL NASAL SPRAY",
    codes: ['100067','102738'],
    maxDailyDose: "2 sprays/nostril QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NATURAL THROAT SPRAY",
    codes: ['107465','102724','102725','102726','105482','105510','106306','105303'],
    maxDailyDose: "4–6 sprays up to Q2-3h",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NATURAL TEETHING GEL",
    codes: ['103244'],
    maxDailyDose: "Apply to gums up to Q6 h",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NACROMOGLYCATE + TETRHYDROZOLINE",
    codes: ['100568'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "α-agonist may raise BP" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Use ≤5 days" }
},
{
    name: "NAFTIFINE",
    codes: ['100813'],
    maxDailyDose: "Topical—thin layer QD",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic uptake" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NAPHAZOLINE + PHENIRAMINE",
    codes: ['101488'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical use" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical use" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "α-agonist ↑BP risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Short-term only" }
},
{
    name: "NAPHAZOLINE HYDROCHLORIDE",
    codes: ['101941','106248'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May raise BP" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Limit use ≤5 days" }
},
{
    name: "NAPHAZOLINE + ZINC SULFATE",
    codes: ['102698'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "α-agonist caution" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "NAPHAZOLINE + CHLORPHENIRAMINE",
    codes: ['101773'],
    maxDailyDose: "1 drop/eye QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "α-agonist caution" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP" }
},
{
    name: "NEOMYCIN/POLYMYXIN B/DEXAMETHASONE",
    codes: ['101382','101381'],
    maxDailyDose: "1–2 drops Q4-6 h (max 24 drops/day)",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Steroid may ↑ glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NOBELITIN PRODUCTS",
    codes: ['103334'],
    maxDailyDose: "1 vial/day (citrus extract)",
    liver: { safe: true, emoji: "✅", firstChoice: "Food supplement" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "NOURISHING CREAM (PHYSIOGEL)",
    codes: ['102495'],
    maxDailyDose: "Topical—apply PRN",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "OMEGA 3 PRODUCTS (KIDS)",
    codes: ['107083','106899','103219','103220','103338','103337','107504','105241','105329','105328','103609','105287','105064','107409','103202','103020','508421','103760','103205','107109','107076','102046','102050','103026','102813','102812','106490','106492','105393'],
    maxDailyDose: "EPA + DHA ≤2 g/day",
    liver: { safe: true, emoji: "✅", firstChoice: "Food supplement" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "Supports CV health" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May slightly lower BP" }
},
{
    name: "OMEGA SUPPLEMENTS (ADULT)",
    codes: ['100113','100168','100169','107543','100186','100202','107518','100319','106371','106425','106365','106408','102655','102644','103170','106164','107282','107281','103177','105888','102619','105276','508516','105245','105243','101373','105235','101378','105163','107508','107432','107497','101615','106222','103001','103002','105469','106449','105699','105700','508508','507369','103917','107108','107110','509399','508721','508734','509494','509495','508728'],
    maxDailyDose: "4 g/day total omega-3 acids",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "Lowers TG" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May lower BP" }
},
{
    name: "OVULATION SUPPORT (MYO-INOSITOL BLENDS)",
    codes: ['107490','107542','106328','106405','107402','102897','106453','106144','107096','106512'],
    maxDailyDose: "4000 mg myo-inositol + 400 µg folate/day",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Improves insulin sensitivity" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PALIPERIDONE",
    codes: ['105912','101140','101141','101142','103041','103765','103263','103851','106223','103822'],
    maxDailyDose: "12 mg/day PO or 525 mg IM q3 months",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 50" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT prolongation—monitor" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May ↑ glucose & weight" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PANTHENOL PREP",
    codes: ['102988','100276','100278','106851','106850','103768','103769','107463','107464','100642','100643','101697','101698'],
    maxDailyDose: "Topical—apply PRN",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PEGFILGRASTIM",
    codes: [],
    maxDailyDose: "6 mg SC once per chemo cycle",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PEMBROLIZUMAB",
    codes: [],
    maxDailyDose: "400 mg IV every 6 weeks",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Immune hepatitis—monitor" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Myocarditis risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PENTOXIFYLLINE",
    codes: [],
    maxDailyDose: "1200 mg/day PO (400 mg TID)",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Improves micro-circulation" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PERINDOPRIL",
    codes: [],
    maxDailyDose: "16 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if eGFR < 60" },
    heart: { safe: true, emoji: "✅", firstChoice: "HF benefit" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "ACE-inhibitor" }
},
{
    name: "PHENAZOPYRIDINE",
    codes: [],
    maxDailyDose: "600 mg/day PO (200 mg TID)",
    liver: { safe: true, emoji: "✅", firstChoice: "No data—generally safe" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contra if CrCl < 50" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PHENOBARBITAL",
    codes: [],
    maxDailyDose: "400 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in hepatic disease" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PIRFENIDONE",
    codes: [],
    maxDailyDose: "2403 mg/day PO (801 mg TID)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs monthly" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PREGABALIN",
    codes: [],
    maxDailyDose: "600 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 60" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May cause weight gain" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "PROPRANOLOL",
    codes: [],
    maxDailyDose: "640 mg/day PO (divided)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in cirrhosis" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Anti-arrhythmic" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Effective β-blocker" }
},
{
    name: "PYRAZINAMIDE",
    codes: [],
    maxDailyDose: "2000 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Hepatotoxic—avoid if LFTs high" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "QUETIAPINE",
    codes: [],
    maxDailyDose: "800 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT prolongation—monitor" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Weight & glucose ↑" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "QUINAPRIL",
    codes: [],
    maxDailyDose: "80 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 60" },
    heart: { safe: true, emoji: "✅", firstChoice: "HF benefit" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "ACE-inhibitor" }
},
{
    name: "RALOXIFENE",
    codes: [],
    maxDailyDose: "60 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Avoid severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "↑VTE risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "RANIBIZUMAB",
    codes: [],
    maxDailyDose: "0.5 mg intravitreal monthly",
    liver: { safe: true, emoji: "✅", firstChoice: "Topical ocular" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No systemic exposure" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Treats diabetic retinopathy" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "RANITIDINE",
    codes: [],
    maxDailyDose: "300 mg/day PO",
    liver: { safe: true, emoji: "✅", firstChoice: "Dose ↓ severe hepatic failure" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl < 50" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "RIFAMPICIN",
    codes: [],
    maxDailyDose: "1200 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Hepatotoxic—monitor LFTs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May affect glycemic control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "RILPIVIRINE",
    codes: [],
    maxDailyDose: "25 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor LFTs in hepatopathy" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT risk at high doses" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "RITONAVIR",
    codes: [],
    maxDailyDose: "200 mg/day PO (boosting)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Avoid severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "PR/QT prolongation" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May ↑ glucose & lipids" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "RIVAROXABAN",
    codes: [],
    maxDailyDose: "20 mg/day PO",
    liver: { safe: false, emoji: "❌", firstChoice: "Contra in Child-Pugh B/C" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Dose ↓ if CrCl 15-49" },
    heart: { safe: true, emoji: "✅", firstChoice: "AF stroke prevention" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "ROSUVASTATIN",
    codes: [],
    maxDailyDose: "40 mg/day PO",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Contra in active liver disease" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Max 10 mg if CrCl < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May slightly ↑ glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "SACUBITRIL / VALSARTAN",
    codes: [],
    maxDailyDose: "97 mg / 103 mg BID (194/206 mg total)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Avoid severe hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Start low if eGFR < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Mortality benefit in HFrEF" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Also treats HTN" }
},

{
    name: "CASTOR OIL (ORAL)",
    codes: ['101219','105774','105777','105775','105773','105776','105778','101362'],
    maxDailyDose: "60 mL/day PO laxative",
    liver: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
{
    name: "ORAL REHYDRATION SALTS (ORS)",
    codes: ['103690'],
    maxDailyDose: "Up to 3 L solution/day",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Caution in fluid overload" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Sodium load caution" }
},

{
    name: "SACUBITRIL/VALSARTAN",
    codes: ['200172','200173'],
    maxDailyDose: "97/103 mg BID (194/206 mg total)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Avoid severe hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Start low if eGFR < 30" },
    heart: { safe: true, emoji: "✅", firstChoice: "Mortality benefit in HFrEF" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Also treats HTN" }
},
// ======= TAMOXIFEN - مجموعة أكواد =======  
{
    name: "TAMOXIFEN",
    codes: ['101554', '106001'],
    maxDailyDose: "40 mg/day PO max (20-40mg daily for breast cancer)",
    liver: { safe: false, emoji: "❌", firstChoice: "Aromatase inhibitors (safer for liver)" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for thrombotic events" },
    dm: { safe: true, emoji: "✅", firstChoice: "No direct glucose effect" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effect" }
},

// ======= TAMSULOSIN - مجموعة أكواد =======  
{
    name: "TAMSULOSIN",
    codes: ['106013', '103329', '103694', '106468', '106311', '101622'],
    maxDailyDose: "0.8 mg/day PO max (0.4mg daily, up to 0.8mg if needed)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed for mild-moderate hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed for CrCl >10 mL/min" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for orthostatic hypotension and cardiac events" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Risk of additive hypotensive effects" }
},

// ======= TAMSULOSIN + DUTASTERIDE - مجموعة أكواد =======  
{
    name: "TAMSULOSIN + DUTASTERIDE",
    codes: ['102981', '106357'],
    maxDailyDose: "0.5 mg + 0.4 mg daily (fixed combination)",
    liver: { safe: true, emoji: "✅", firstChoice: "Monitor liver function periodically" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for mild-moderate CKD" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for orthostatic hypotension" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic BPH patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Risk of hypotensive effects" }
},

// ======= TAZAROTENE - مجموعة أكواد =======  
{
    name: "TAZAROTENE",
    codes: ['103179', '103178'],
    maxDailyDose: "Apply once daily topically (0.1% gel max strength)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption - safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Topical use - minimal renal impact" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TEDIZOLID - مجموعة أكواد =======  
{
    name: "TEDIZOLID",
    codes: ['103213'],
    maxDailyDose: "200 mg/day PO or IV (once daily for 6 days max)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed for hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed for any degree of renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose interaction" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TELMISARTAN - مجموعة أكواد =======  
{
    name: "TELMISARTAN",
    codes: ['101425', '101426', '105918', '105922'],
    maxDailyDose: "80 mg/day PO (max dose for hypertension and CV protection)",
    liver: { safe: false, emoji: "❌", firstChoice: "Max 40mg daily for hepatic impairment - contraindicated in severe" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Start 20mg for severe CKD - monitor function" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective - first choice ARB" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Contraindicated with aliskiren in diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line antihypertensive" }
},

// ======= TELMISARTAN + AMLODIPINE - مجموعة أكواد =======  
{
    name: "TELMISARTAN + AMLODIPINE",
    codes: ['102859', '102860'],
    maxDailyDose: "80/10 mg daily (max combination dose)",
    liver: { safe: false, emoji: "❌", firstChoice: "Reduce dose in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor renal function closely" },
    heart: { safe: true, emoji: "✅", firstChoice: "Excellent for cardiac protection" },
    dm: { safe: true, emoji: "✅", firstChoice: "Good choice for diabetic hypertension" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Superior combination for resistant HTN" }
},

// ======= TELMISARTAN + HCTZ - مجموعة أكواد =======  
{
    name: "TELMISARTAN + HYDROCHLOROTHIAZIDE",
    codes: ['105254', '101427'],
    maxDailyDose: "80/25 mg daily (max combination dose)",
    liver: { safe: false, emoji: "❌", firstChoice: "Reduce dose in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor electrolytes and renal function" },
    heart: { safe: true, emoji: "✅", firstChoice: "Good for heart failure patients" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - HCTZ can worsen diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Excellent first-line combination" }
},

// ======= TENOFOVIR DISOPROXIL - مجموعة أكواد =======  
{
    name: "TENOFOVIR DISOPROXIL",
    codes: ['105762', '103824', '105763', '102975'],
    maxDailyDose: "300 mg/day PO (245mg tenofovir disoproxil fumarate)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients including HBV" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Reduce dose for CrCl <50 - nephrotoxic potential" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP interactions" }
},

// ======= TENOXICAM - مجموعة أكواد =======  
{
    name: "TENOXICAM",
    codes: ['102196', '102630'],
    maxDailyDose: "20 mg/day PO or IM (max dose for NSAID)",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid in hepatic impairment - hepatotoxic risk" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - nephrotoxic NSAID" },
    heart: { safe: false, emoji: "❌", firstChoice: "Increased CV risk - avoid in heart disease" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose and kidney function" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can worsen BP control" }
},

// ======= TERAZOSIN - مجموعة أكواد =======  
{
    name: "TERAZOSIN",
    codes: ['101154'],
    maxDailyDose: "20 mg/day PO (max for BPH, start 1mg titrate up)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for orthostatic hypotension" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Good for hypertensive BPH patients" }
},

// ======= TERBINAFINE - مجموعة أكواد =======  
{
    name: "TERBINAFINE",
    codes: ['101235', '101233', '101234', '101231', '101232', '101236', '101237'],
    maxDailyDose: "250 mg/day PO (max oral dose - avoid >6 weeks without monitoring)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in liver disease - hepatotoxic risk" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Use caution in CrCl <50 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TERBUTALINE - مجموعة أكواد =======  
{
    name: "TERBUTALINE",
    codes: ['102871', '102701', '102174'],
    maxDailyDose: "15 mg/day PO divided doses (5mg TID max)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for arrhythmias and tachycardia" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - can cause hyperglycemia" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can cause hypertensive episodes" }
},

// ======= TERIFLUNOMIDE - مجموعة أكواد =======  
{
    name: "TERIFLUNOMIDE",
    codes: ['103526'],
    maxDailyDose: "14 mg/day PO (max dose for MS treatment)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in liver disease - severe hepatotoxicity risk" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor BP - can cause hypertension" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can worsen hypertension" }
},

// ======= TERIPARATIDE - مجموعة أكواد =======  
{
    name: "TERIPARATIDE",
    codes: ['106863', '100924'],
    maxDailyDose: "20 mcg/day SC (once daily injection max 2 years lifetime)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for mild-moderate CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TESTOSTERONE - مجموعة أكواد =======  
{
    name: "TESTOSTERONE",
    codes: ['102198', '100133', '101506', '103410'],
    maxDailyDose: "400 mg IM q2weeks (max cypionate dose) or 1000mg q10-14weeks (undecanoate)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in liver disease - hepatotoxic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor for fluid retention in CKD" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in heart failure - fluid retention risk" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - can improve insulin sensitivity" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can worsen BP via fluid retention" }
},

// ======= TETANUS TOXOID VACCINE - مجموعة أكواد =======  
{
    name: "TETANUS TOXOID VACCINE",
    codes: ['106132', '102199'],
    maxDailyDose: "0.5 mL IM single dose (booster q10years)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TETRACOSACTIDE - مجموعة أكواد =======  
{
    name: "TETRACOSACTIDE",
    codes: ['102155'],
    maxDailyDose: "1 mg IM depot injection (diagnostic/therapeutic use)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for fluid retention" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - can cause hyperglycemia" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can cause hypertension" }
},

// ======= TETRACYCLINE - مجموعة أكواد =======  
{
    name: "TETRACYCLINE",
    codes: ['101632', '102200', '102201'],
    maxDailyDose: "2000 mg/day PO divided doses (500mg QID max)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid in severe CKD - adjust dose for mild-moderate" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= THEOPHYLLINE - مجموعة أكواد =======  
{
    name: "THEOPHYLLINE",
    codes: ['100347', '102775', '102207', '102508', '102205', '102206', '102208'],
    maxDailyDose: "800 mg/day PO (400mg BID max - therapeutic range 10-20 mcg/mL)",
    liver: { safe: false, emoji: "❌", firstChoice: "Reduce dose 50% in liver disease - narrow therapeutic index" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for renal impairment" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in arrhythmias - proarrhythmic" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP - can cause hypertension" }
},

// ======= THYROTROPIN ALFA - مجموعة أكواد =======  
{
    name: "THYROTROPIN ALFA",
    codes: ['103826'],
    maxDailyDose: "0.9 mg IM (single dose for thyroid cancer follow-up)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor cardiac patients - can cause palpitations" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Minimal BP effects" }
},

// ======= TIANEPTINE - مجموعة أكواد =======  
{
    name: "TIANEPTINE",
    codes: ['102115'],
    maxDailyDose: "37.5 mg/day PO divided doses (12.5mg TID)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in severe CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safer than tricyclics for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= TIAPROFENIC ACID - مجموعة أكواد =======  
{
    name: "TIAPROFENIC ACID",
    codes: ['102153'],
    maxDailyDose: "600 mg/day PO divided doses (300mg BID max)",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid in hepatic impairment - NSAID hepatotoxicity" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - nephrotoxic NSAID" },
    heart: { safe: false, emoji: "❌", firstChoice: "Increased CV risk - avoid in heart disease" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor renal function in diabetics" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can worsen BP control" }
},

// ======= TIBOLONE - مجموعة أكواد =======  
{
    name: "TIBOLONE",
    codes: ['101302'],
    maxDailyDose: "2.5 mg/day PO (single daily dose)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for thrombotic events" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - can affect insulin sensitivity" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP - can cause fluid retention" }
},

// ======= TICAGRELOR - مجموعة أكواد =======  
{
    name: "TICAGRELOR",
    codes: ['102585', '106174', '107364', '107285'],
    maxDailyDose: "180 mg/day PO (90mg BID loading dose, then maintenance)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution in moderate hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Superior to clopidogrel for ACS" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe and beneficial for diabetic ACS patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= TIGECYCLINE - مجموعة أكواد =======  
{
    name: "TIGECYCLINE",
    codes: ['103608'],
    maxDailyDose: "100 mg IV loading, then 50mg IV q12h (max maintenance dose)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TIMOLOL - مجموعة أكواد =======  
{
    name: "TIMOLOL",
    codes: ['106003', '100154', '101596', '101597', '101638', '106008', '102213'],
    maxDailyDose: "0.5% ophthalmic solution BID (topical eye drops)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption - safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for bradycardia - beta-blocker effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - can mask hypoglycemia" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can cause additive hypotensive effects" }
},

// ======= TINIDAZOLE - مجموعة أكواد =======  
{
    name: "TINIDAZOLE",
    codes: ['100829', '101801'],
    maxDailyDose: "2000 mg/day PO (single dose for most indications)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TINZAPARIN - مجموعة أكواد =======  
{
    name: "TINZAPARIN",
    codes: ['101134', '103623', '103212', '102814', '102800'],
    maxDailyDose: "18000 Anti-Xa IU SC daily (max treatment dose)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor anti-Xa levels in severe CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Preferred for cardiac patients over UFH" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TIOTROPIUM - مجموعة أكواد =======  
{
    name: "TIOTROPIUM",
    codes: ['102112', '106548'],
    maxDailyDose: "18 mcg inhaled daily (single capsule via HandiHaler)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic COPD patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TIOTROPIUM + OLODATEROL - مجموعة أكواد =======  
{
    name: "TIOTROPIUM + OLODATEROL",
    codes: ['103622'],
    maxDailyDose: "5 mcg + 5 mcg inhaled daily (2 puffs from Respimat)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for tachycardia from LABA component" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - LABA can cause hyperglycemia" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP - LABA effects" }
},

// ======= TIZANIDINE - مجموعة أكواد =======  
{
    name: "TIZANIDINE",
    codes: ['105520', '105521', '102083', '102084', '102211', '102212'],
    maxDailyDose: "36 mg/day PO divided doses (12mg TID max)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in liver disease - hepatotoxic" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in severe CKD" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for hypotension and bradycardia" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can cause significant hypotension" }
},

// ======= TOBRAMYCIN COMBINATIONS - مجموعة أكواد =======  
{
    name: "TOBRAMYCIN + DEXAMETHASONE",
    codes: ['102214', '101633', '102215'],
    maxDailyDose: "1-2 drops q4-6h ophthalmic (combination eye drops)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for topical ophthalmic use" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - steroid component" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},
// ======= DICLOFENAC - تجميع كل الأشكال الصيدلانية =======
{
    name: "DICLOFENAC",
    codes: ['101607', '105374', '105274', '100397', '101600', '100398', '100399', '100694', '100830', '101161', '101601', '101604', '101606', '101859', '101860', '100663', '100688', '106473', '101603', '101975', '107238', '100661', '100665', '100666', '103659', '101976', '103503', '101987', '102164', '102791', '102338', '101594', '102339', '102340', '100509', '100660', '103634', '101608', '103700', '107239', '102337', '102345', '100891', '100656', '100657', '100658', '103628', '101972', '101973', '105669', '102332', '102333', '102335', '105146', '100160', '100161', '100162', '100508', '100655', '100659', '100662', '100664', '100759', '101133', '101971', '101974', '101988', '102163', '102165', '102334', '102336', '102341', '102342', '102343', '102344', '102346', '102347'],
    maxDailyDose: "225 mg/day PO max (rheumatoid arthritis), 150 mg/day PO (osteoarthritis), 150 mg/day IV max",
    liver: { safe: false, emoji: "❌", firstChoice: "Celecoxib or Meloxicam (safer NSAIDs for liver)" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in CKD - use acetaminophen instead" },
    heart: { safe: false, emoji: "❌", firstChoice: "Naproxen (lowest cardiac risk NSAID)" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - may increase blood pressure" }
},

// ======= AMLODIPINE - تجميع كل الأشكال والتركيبات =======
{
    name: "AMLODIPINE", 
    codes: ['100079', '100081', '102489', '100082', '100083', '100084', '100085', '100086', '100080', '100121', '102458', '100122', '107299', '107448', '105570', '105571', '105572', '100711', '103773', '103774', '101310', '101311', '101338', '101339', '101345', '101346', '105568', '105569', '105574', '105566', '105565', '102280', '102281', '102282', '102283'],
    maxDailyDose: "10 mg/day PO max (hypertension & angina)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients - minimal hepatic metabolism" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients - cardioprotective" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral glucose effect - safe for DM" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line antihypertensive - excellent choice" }
},

// ======= AMILORIDE + HYDROCHLOROTHIAZIDE =======  
{
    name: "AMILORIDE + HYDROCHLOROTHIAZIDE",
    codes: ['106025', '101452'],
    maxDailyDose: "10 mg/100 mg per day max (Amiloride/HCTZ combination)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <25 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Good for heart failure patients" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor K+ and glucose closely in DM" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Excellent K+-sparing diuretic for HTN" }
},

// ======= AMINO ACIDS =======
{
    name: "AMINO ACIDS",
    codes: ['100103', '100106', '100110', '102649', '102650'],
    maxDailyDose: "30-40 g/day total amino acids (sports nutrition)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver - may support hepatic function" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in CKD - monitor BUN/creatinine" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "May improve glucose metabolism" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effect" }
},

// ======= AMINOPHYLLINE =======
{
    name: "AMINOPHYLLINE",
    codes: ['100791'],
    maxDailyDose: "900 mg/day PO max (theophylline equivalent)",
    liver: { safe: false, emoji: "❌", firstChoice: "Reduce dose 50% in liver disease - use salbutamol" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment in normal kidney function" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor ECG - arrhythmia risk, prefer salbutamol" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May increase BP - monitor closely" }
},

// ======= AMIODARONE =======
{
    name: "AMIODARONE",
    codes: ['100547', '102016'], 
    maxDailyDose: "400 mg/day PO loading, then 200 mg/day maintenance",
    liver: { safe: false, emoji: "❌", firstChoice: "Sotalol or Dronedarone (safer alternatives)" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed in CKD" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for bradycardia and QT prolongation" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May cause hypo/hyperglycemia - monitor closely" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause hypotension - monitor BP" }
},

// ======= AMISULPRIDE =======
{
    name: "AMISULPRIDE",
    codes: ['106098', '106101', '106100', '102089', '102090', '102091', '102092'],
    maxDailyDose: "1200 mg/day PO max (schizophrenia), 300 mg/day (depression)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal hepatic metabolism - safe choice" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Reduce dose 50% if CrCl <60 mL/min" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor ECG - QT prolongation risk" },
    dm: { safe: false, emoji: "❌", firstChoice: "High diabetes risk - monitor glucose closely" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - may cause orthostatic hypotension" }
},

// ======= TOBRAMYCIN - مجموعة أكواد =======  
{
    name: "TOBRAMYCIN",
    codes: ['103815', '102217', '103814', '102216'],
    maxDailyDose: "1-2 drops q4h ophthalmic (topical eye preparation)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for topical ophthalmic use" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TOCILIZUMAB - مجموعة أكواد =======  
{
    name: "TOCILIZUMAB",
    codes: ['103579', '103057', '103056'],
    maxDailyDose: "800 mg IV q4weeks or 162mg SC weekly (max RA dose)",
    liver: { safe: false, emoji: "❌", firstChoice: "Monitor liver enzymes - hepatotoxicity risk" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment for renal impairment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor lipids and CV risk factors" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - can worsen diabetes" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can cause hypertension" }
},

// ======= TOFACITINIB - مجموعة أكواد =======  
{
    name: "TOFACITINIB",
    codes: ['106147', '103691', '103283'],
    maxDailyDose: "10 mg BID PO (max dose for RA - higher for UC)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Monitor liver function - reduce dose in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in moderate-severe CKD" },
    heart: { safe: false, emoji: "❌", firstChoice: "Black box warning - increased thrombotic risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic RA patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= TOLTERODINE - مجموعة أكواد =======  
{
    name: "TOLTERODINE",
    codes: ['100637', '100638'],
    maxDailyDose: "4 mg/day PO (2mg BID immediate or 4mg daily extended)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose to 1mg BID in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in severe CKD" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for QT prolongation" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= TOPIRAMATE - مجموعة أكواد =======  
{
    name: "TOPIRAMATE",
    codes: ['105792', '105793', '101144', '101145', '102218', '102219'],
    maxDailyDose: "400 mg/day PO divided doses (200mg BID max for epilepsy)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose 50% if CrCl <70 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - can cause metabolic acidosis" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP" }
},
// ======= TRAMADOL - مجموعة أكواد =======  
{
    name: "TRAMADOL",
    codes: ['106924', '105682', '105684', '102526', '105683'],
    maxDailyDose: "400 mg/day PO max (elderly >75 years: 300 mg/day max)",
    liver: { safe: false, emoji: "❌", firstChoice: "Reduce dose 50% in severe hepatic impairment - max 50mg q12h" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "CrCl <30: max 200mg/day, q12h dosing" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= FENTANYL - مجموعة أكواد =======  
{
    name: "FENTANYL",
    codes: ['105678', '105681', '105687', '105688', '105679', '105680'],
    maxDailyDose: "100 mcg/hour max patch (for opioid-tolerant patients only)",
    liver: { safe: false, emoji: "❌", firstChoice: "Reduce dose in hepatic impairment - increased bioavailability" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Use with caution - metabolite accumulation risk" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for bradycardia and hypotension" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can cause hypotension" }
},

// ======= MORPHINE - مجموعة أكواد =======  
{
    name: "MORPHINE",
    codes: ['106927', '106925', '106926'],
    maxDailyDose: "Individualized - no fixed maximum for cancer pain (start 15-30mg q4h PO)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in cirrhosis - use hydromorphone instead" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Avoid in severe CKD - metabolite accumulation causes toxicity" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for hypotension and bradycardia" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can cause significant hypotension" }
},

// ======= OXYCODONE - مجموعة أكواد =======  
{
    name: "OXYCODONE",
    codes: ['106923', '106922', '106921', '106919', '106920'],
    maxDailyDose: "Individualized - start 5-15mg q4-6h PO (80mg max for controlled-release)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Start at 1/3 to 1/2 dose in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in severe CKD - monitor closely" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safer than morphine for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor for hypotensive effects" }
},

// ======= DIAZEPAM - مجموعة أكواد =======  
{
    name: "DIAZEPAM",
    codes: ['106931', '106934', '106933', '106932'],
    maxDailyDose: "40 mg/day PO max (elderly: 20mg/day max)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for hypotension and bradycardia" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can potentiate hypotensive effects" }
},

// ======= CLONAZEPAM - مجموعة أكواد =======  
{
    name: "CLONAZEPAM",
    codes: ['106936', '106935', '106937'],
    maxDailyDose: "20 mg/day PO max (typical max 4mg/day for seizures)",
    liver: { safe: false, emoji: "❌", firstChoice: "Reduce dose in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for cardiac depression" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can cause hypotension" }
},

// ======= ALPRAZOLAM - مجموعة أكواد =======  
{
    name: "ALPRAZOLAM",
    codes: ['106929', '106918'],
    maxDailyDose: "10 mg/day PO max (typical max 4mg/day)",
    liver: { safe: false, emoji: "❌", firstChoice: "Reduce dose in hepatic impairment - prolonged half-life" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for cardiac depression" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can potentiate antihypertensive effects" }
},

// ======= METHYLPHENIDATE - مجموعة أكواد =======  
{
    name: "METHYLPHENIDATE",
    codes: ['105685', '105686', '106938'],
    maxDailyDose: "72 mg/day PO max (extended-release formulations)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in serious heart conditions - arrhythmia risk" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - can affect appetite and eating" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe HTN - can increase BP significantly" }
},

// ======= HYDROMORPHONE - مجموعة أكواد =======  
{
    name: "HYDROMORPHONE",
    codes: ['106928', '106930'],
    maxDailyDose: "Individualized - start 2-4mg q4-6h PO (32mg max for extended-release)",
    liver: { safe: true, emoji: "✅", firstChoice: "Preferred opioid for hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in severe CKD" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for hypotension" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can cause hypotension" }
},

// ======= TRANEXAMIC ACID - مجموعة أكواد =======  
{
    name: "TRANEXAMIC ACID",
    codes: ['105265'],
    maxDailyDose: "3900 mg/day PO (1300mg TID for menorrhagia)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose if CrCl <50 mL/min - accumulation risk" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for thrombotic events - contraindicated in active thrombosis" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TRAVOPROST - مجموعة أكواد =======  
{
    name: "TRAVOPROST",
    codes: ['102231'],
    maxDailyDose: "One drop daily in affected eye(s) in evening",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= UPADACITINIB - مجموعة أكواد =======  
{
    name: "UPADACITINIB",
    codes: ['103778', '106573'],
    maxDailyDose: "45 mg/day PO max (for ulcerative colitis induction)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Max 15mg daily for severe CKD" },
    heart: { safe: false, emoji: "❌", firstChoice: "Black box warning - increased thrombotic and CV death risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Monitor glucose - may improve insulin sensitivity" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= VALSARTAN - مجموعة أكواد (الباقي) =======  
{
    name: "VALSARTAN",
    codes: ['103645', '103639', '105100', '103704', '103385', '100677', '100678', '100679', '100680', '105807', '105808', '102168', '102169', '102170', '102171', '103891', '105625', '103368', '103369', '103366', '103367'],
    maxDailyDose: "320 mg/day PO (max for hypertension and heart failure)",
    liver: { safe: false, emoji: "❌", firstChoice: "Max 40mg daily for hepatic impairment - contraindicated in severe" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Start 20mg for severe CKD - monitor function" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective - first choice ARB" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Contraindicated with aliskiren in diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line antihypertensive" }
},

// ======= VALSARTAN + HYDROCHLOROTHIAZIDE - مجموعة أكواد (الباقي) =======  
{
    name: "VALSARTAN + HYDROCHLOROTHIAZIDE",
    codes: ['105099', '100520', '100522', '100527', '100528', '100521', '100550', '100551', '100552', '100553', '100554', '105809', '105810', '103371', '103311', '103312', '103313', '103370', '106268', '106269', '106270'],
    maxDailyDose: "320/25 mg daily (max combination dose)",
    liver: { safe: false, emoji: "❌", firstChoice: "Reduce dose in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor electrolytes and renal function" },
    heart: { safe: true, emoji: "✅", firstChoice: "Good for heart failure patients" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - HCTZ can worsen diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Excellent first-line combination" }
},

// ======= VALPROATE - مجموعة أكواد =======  
{
    name: "VALPROATE",
    codes: ['100621', '100620', '100622', '105655', '100619', '100623'],
    maxDailyDose: "60 mg/kg/day PO max (typically 2000-3000mg/day adults)",
    liver: { safe: false, emoji: "❌", firstChoice: "Black box warning - fatal hepatotoxicity risk, especially <2 years" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= VALACICLOVIR - مجموعة أكواد =======  
{
    name: "VALACICLOVIR",
    codes: ['105766', '105767', '102278', '102279'],
    maxDailyDose: "3000 mg/day PO (1000mg TID for herpes zoster)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose for CrCl <50 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= VALGANCICLOVIR - مجموعة أكواد =======  
{
    name: "VALGANCICLOVIR",
    codes: ['102940', '105758', '106011'],
    maxDailyDose: "1800 mg/day PO (900mg BID for CMV treatment)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Reduce dose for CrCl <70 mL/min - nephrotoxic" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= VARDENAFIL - مجموعة أكواد =======  
{
    name: "VARDENAFIL",
    codes: ['105377', '103748', '103498', '101261', '102968', '106939'],
    maxDailyDose: "20 mg/day PO (single dose for ED)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Max 5mg for moderate hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated with nitrates - severe hypotension risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic ED patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can potentiate antihypertensive effects" }
},

// ======= VARENICLINE - مجموعة أكواد =======  
{
    name: "VARENICLINE",
    codes: ['100442', '100443', '100445', '100444'],
    maxDailyDose: "2 mg/day PO (1mg BID maintenance dose)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Max 0.5mg BID if CrCl <30 mL/min" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for cardiovascular events in high-risk patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= VENLAFAXINE - مجموعة أكواد =======  
{
    name: "VENLAFAXINE",
    codes: ['102887', '102888', '102303', '102304', '100739', '100740', '107273', '107274'],
    maxDailyDose: "375 mg/day PO max (225mg typical max for XR)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose 50% in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose 50% if CrCl 10-70 mL/min" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor BP and ECG - can cause hypertension" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Can significantly increase BP - monitor closely" }
},

// ======= VERAPAMIL - مجموعة أكواد =======  
{
    name: "VERAPAMIL",
    codes: ['103808', '101150', '103809', '101151'],
    maxDailyDose: "480 mg/day PO (120mg TID immediate-release or 480mg daily SR)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in hepatic impairment - high first-pass metabolism" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Contraindicated in severe heart failure and sick sinus syndrome" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Good for hypertensive patients with angina" }
},

// ======= VILDAGLIPTIN - مجموعة أكواد =======  
{
    name: "VILDAGLIPTIN",
    codes: ['106261', '100955', '100956', '106122', '106123', '103152', '103153', '105804', '106260'],
    maxDailyDose: "100 mg/day PO (50mg BID)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated if ALT/AST >3x ULN - hepatotoxic potential" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Max 50mg daily if CrCl <50 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Excellent for type 2 diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= VILDAGLIPTIN + METFORMIN - مجموعة أكواد =======  
{
    name: "VILDAGLIPTIN + METFORMIN",
    codes: ['100957', '100958', '103154', '103155', '106297', '106296'],
    maxDailyDose: "100/2000 mg daily (50/1000mg BID)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated if hepatic impairment - both components affected" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if eGFR <30 mL/min/1.73m² - metformin risk" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac diabetes patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Excellent combination for type 2 diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= VORICONAZOLE - مجموعة أكواد =======  
{
    name: "VORICONAZOLE",
    codes: ['103692', '103352', '106066', '106022'],
    maxDailyDose: "400 mg/day PO maintenance (after loading dose)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce maintenance dose 50% in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid IV formulation if CrCl <50 - vehicle nephrotoxicity" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor ECG - QT prolongation risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= VORTIOXETINE - مجموعة أكواد =======  
{
    name: "VORTIOXETINE",
    codes: ['103236', '103237'],
    maxDailyDose: "20 mg/day PO (10mg typical max)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Max 10mg daily for severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= WARFARIN - مجموعة أكواد =======  
{
    name: "WARFARIN",
    codes: ['103717', '103718', '105673', '105674', '103719', '102509', '103479', '103480', '103481'],
    maxDailyDose: "Individualized to INR 2-3 (typically 2-10mg daily)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Essential for atrial fibrillation and mechanical valves" },
    dm: { safe: true, emoji: "✅", firstChoice: "Monitor for drug interactions with diabetes medications" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe with antihypertensives - monitor INR" }
},

// ======= XYLOMETAZOLINE - مجموعة أكواد =======  
{
    name: "XYLOMETAZOLINE",
    codes: ['100602', '100603', '101490', '101491', '101673', '101674', '102377', '102378', '101672', '107298', '107297', '103813', '106543', '101671', '101675', '101676', '101677', '103426', '102375', '102376'],
    maxDailyDose: "0.1% solution TID max (3 days maximum use)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Use caution in cardiac disease - sympathomimetic effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can increase BP - use caution" }
},

// ======= ZANAMIVIR - مجموعة أكواد =======  
{
    name: "ZANAMIVIR",
    codes: ['101872'],
    maxDailyDose: "20 mg/day inhaled (10mg BID for 5 days)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= ZOLEDRONIC ACID - مجموعة أكواد =======  
{
    name: "ZOLEDRONIC ACID",
    codes: ['103532', '103794'],
    maxDailyDose: "5 mg IV annually (osteoporosis) or 4mg IV monthly (oncology)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <35 mL/min - severe nephrotoxicity" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for atrial fibrillation - rare but serious risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},
// ======= TRAVOPROST + TIMOLOL - مجموعة أكواد =======  
{
    name: "TRAVOPROST + TIMOLOL",
    codes: ['100713'],
    maxDailyDose: "One drop daily in affected eye(s) in evening (combination eye drop)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption - safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for bradycardia from timolol component" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - timolol can mask hypoglycemia" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP - additive hypotensive effects" }
},

// ======= TREPROSTINIL - مجموعة أكواد =======  
{
    name: "TREPROSTINIL",
    codes: ['107533'],
    maxDailyDose: "Individualized based on tolerability (typically 1.25-40 ng/kg/min IV)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Beneficial for pulmonary hypertension" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can cause systemic hypotension" }
},

// ======= TRIAMCINOLONE + NYSTATIN + NEOMYCIN + GRAMICIDIN - مجموعة أكواد =======  
{
    name: "TRIAMCINOLONE + NYSTATIN + NEOMYCIN + GRAMICIDIN",
    codes: ['101187', '101188', '101695', '101696'],
    maxDailyDose: "Apply TID-QID topically (combination anti-inflammatory/antimicrobial cream)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for topical use" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - steroid component" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects with topical use" }
},

// ======= TRIAMCINOLONE - مجموعة أكواد =======  
{
    name: "TRIAMCINOLONE",
    codes: ['101189', '103323'],
    maxDailyDose: "40 mg IM single dose (or 220 mcg/day nasal spray)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for fluid retention" },
    dm: { safe: false, emoji: "❌", firstChoice: "Can significantly worsen glucose control" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Can increase BP" }
},

// ======= TRIAMCINOLONE + ECONAZOLE - مجموعة أكواد =======  
{
    name: "TRIAMCINOLONE + ECONAZOLE",
    codes: ['101734'],
    maxDailyDose: "Apply BID topically (combination antifungal/anti-inflammatory cream)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for topical use" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - steroid component" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects with topical use" }
},

// ======= TRIBENOSIDE + LIDOCAINE - مجموعة أكواد =======  
{
    name: "TRIBENOSIDE + LIDOCAINE",
    codes: ['105423', '101778', '103633', '101777'],
    maxDailyDose: "Apply TID topically or 1-2 suppositories daily (hemorrhoid treatment)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for topical/rectal use" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TRIMETAZIDINE - مجموعة أكواد =======  
{
    name: "TRIMETAZIDINE",
    codes: ['102286'],
    maxDailyDose: "70 mg/day PO (35mg BID modified-release)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose if CrCl <30 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective for angina" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TRIPROLIDINE + PSEUDOEPHEDRINE - مجموعة أكواد =======  
{
    name: "TRIPROLIDINE + PSEUDOEPHEDRINE",
    codes: ['100904', '101948', '102017', '102240', '106239', '100022', '101949', '103664', '101950'],
    maxDailyDose: "Varies by formulation - typically 2.5mg/60mg per dose TID-QID",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for tachycardia and arrhythmias" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - pseudoephedrine effects" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe HTN - can increase BP significantly" }
},

// ======= TRIPTORELIN - مجموعة أكواد =======  
{
    name: "TRIPTORELIN",
    codes: ['100599', '100600', '103786'],
    maxDailyDose: "11.25 mg IM every 3 months (depot formulation)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for QT prolongation and cardiac events" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - can worsen diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= TROMANTADINE - مجموعة أكواد =======  
{
    name: "TROMANTADINE",
    codes: ['102315'],
    maxDailyDose: "Apply 3-5 times daily topically (antiviral gel)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for topical use" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TROPICAMIDE - مجموعة أكواد =======  
{
    name: "TROPICAMIDE",
    codes: ['103386'],
    maxDailyDose: "1-2 drops 1% solution (for mydriasis - single use)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Use caution in cardiac disease - anticholinergic effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= TROSPIUM CHLORIDE - مجموعة أكواد =======  
{
    name: "TROSPIUM CHLORIDE",
    codes: ['103478', '102107', '102606'],
    maxDailyDose: "60 mg/day PO (20mg TID or 60mg XL daily)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Max 20mg daily if CrCl <30 mL/min" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Use caution in cardiac disease" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= TROXERUTIN - مجموعة أكواد =======  
{
    name: "TROXERUTIN",
    codes: ['102289', '102290'],
    maxDailyDose: "900 mg/day PO (300mg TID) or apply gel BID",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= TURMERIC SUPPLEMENTS - مجموعة أكواد =======  
{
    name: "TURMERIC SUPPLEMENTS",
    codes: ['107094', '106141'],
    maxDailyDose: "1500 mg/day curcumin extract (varies by standardization)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Use caution in liver disease - rare hepatotoxicity reports" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "May have cardioprotective effects" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - may enhance antidiabetic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP" }
},

// ======= UREA - مجموعة أكواد =======  
{
    name: "UREA",
    codes: ['103080', '105273', '105258', '101280', '102704', '105552'],
    maxDailyDose: "Apply BID topically (10-40% concentrations for keratolytic effect)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= UROFOLLITROPIN - مجموعة أكواد =======  
{
    name: "UROFOLLITROPIN",
    codes: ['100930', '105305', '105304', '100931'],
    maxDailyDose: "450 IU/day SC max (individualized for ovulation induction)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= URSODEOXYCHOLIC ACID - مجموعة أكواد =======  
{
    name: "URSODEOXYCHOLIC ACID",
    codes: ['102273'],
    maxDailyDose: "15 mg/kg/day PO (typically 750-1000mg daily for adults)",
    liver: { safe: true, emoji: "✅", firstChoice: "Hepatoprotective - first choice for cholestatic liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= USTEKINUMAB - مجموعة أكواد =======  
{
    name: "USTEKINUMAB",
    codes: ['107532', '103869', '103870', '106072', '103413', '103210', '103109'],
    maxDailyDose: "520 mg IV induction (weight >85kg) then 90mg SC q8weeks maintenance",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed - safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed - safe for renal patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for cardiovascular events - increased risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= VAGINAL DOUCHE-POVIDONE - مجموعة أكواد =======  
{
    name: "VAGINAL DOUCHE-POVIDONE",
    codes: ['103333'],
    maxDailyDose: "Use as directed for feminine hygiene (topical antiseptic)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= VALERIAN PRODUCTS - مجموعة أكواد =======  
{
    name: "VALERIAN PRODUCTS",
    codes: ['100203', '106378', '102641', '103174', '103695', '507981', '102086', '102087', '102099'],
    maxDailyDose: "600 mg/day extract (typically 300mg BID for sleep)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Rare hepatotoxicity reports - use caution" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP" }
},

// ======= VEDOLIZUMAB - مجموعة أكواد =======  
{
    name: "VEDOLIZUMAB",
    codes: ['107447', '103682'],
    maxDailyDose: "300 mg IV at weeks 0, 2, 6 then q8weeks (or 108mg SC q2weeks)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= VENETOCLAX - مجموعة أكواد =======  
{
    name: "VENETOCLAX",
    codes: ['103477', '103616'],
    maxDailyDose: "400 mg/day PO (after 5-week dose escalation to prevent TLS)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose for moderate-severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed for renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= VIGABATRIN - مجموعة أكواد =======  
{
    name: "VIGABATRIN",
    codes: ['105850', '103425'],
    maxDailyDose: "3000 mg/day PO max adults (150 mg/kg/day max pediatric)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed - not metabolized by liver" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Reduce dose 75% if CrCl 10-30 mL/min - renally eliminated" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= VILANTEROL + UMECLIDINIUM - مجموعة أكواد =======  
{
    name: "VILANTEROL + UMECLIDINIUM",
    codes: ['103361'],
    maxDailyDose: "25/62.5 mcg inhaled daily (single inhalation)",
    liver: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for tachycardia and arrhythmias" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - LABA can cause hyperglycemia" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP - sympathomimetic effects" }
},

// ======= VITAMIN A - مجموعة أكواد =======  
{
    name: "VITAMIN A",
    codes: ['100316', '508729', '102319', '105140'],
    maxDailyDose: "10000 IU/day max long-term (25000 IU acute deficiency)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in liver disease - hepatotoxic in excess" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= VITAMIN C - مجموعة أكواد =======  
{
    name: "VITAMIN C",
    codes: ['105444', '107343', '100441', '105054', '105302', '107521', '508559', '508135', '508138', '107657', '102651', '508093', '106336', '105369', '107591', '103789', '105236', '105602', '107426', '105772', '101863', '103307', '106117', '107446', '103762', '106485', '102320', '102321', '102322', '103777', '103838'],
    maxDailyDose: "2000 mg/day max (90mg RDA for adults)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe and beneficial for hepatic patients" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Limit to 500mg if history of kidney stones" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective antioxidant benefits" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe and beneficial for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP" }
},

// ======= VITAMIN D - مجموعة أكواد =======  
{
    name: "VITAMIN D",
    codes: ['103016', '107220', '102666', '103330', '105707', '105837', '103291', '103289', '103292', '103290', '105527', '105474', '103172', '102805', '106902', '107598', '107380', '106909', '105490', '105489', '103757', '106314', '105203', '508485', '508731', '103674', '102634', '102811', '103683', '106293', '105620', '105864', '103431', '105445', '107340', '106421'],
    maxDailyDose: "10000 IU/day max long-term (50000 IU weekly for deficiency)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor calcium and phosphorus in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective benefits" },
    dm: { safe: true, emoji: "✅", firstChoice: "May improve insulin sensitivity" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP" }
},

// ======= VITAMIN E - مجموعة أكواد =======  
{
    name: "VITAMIN E",
    codes: ['102837', '100799', '107078', '107276', '103022', '103150', '508733'],
    maxDailyDose: "1000 mg/day max (15mg RDA for adults)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "High doses may increase bleeding risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= WEIGHT GAIN SUPPLEMENTS - مجموعة أكواد =======  
{
    name: "WEIGHT GAIN SUPPLEMENTS",
    codes: ['105013', '105014'],
    maxDailyDose: "Varies by product - typically 1-3 servings daily",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor protein intake in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - high carbohydrate content" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= YEAST SUPPLEMENTS - مجموعة أكواد =======  
{
    name: "YEAST SUPPLEMENTS",
    codes: ['100183', '102917', '100729', '100730', '509339', '105168', '105056'],
    maxDailyDose: "2000 mg/day brewer's yeast (varies by standardization)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "May help with cholesterol" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - may affect blood sugar" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP" }
},

// ======= ZINC PRODUCTS - مجموعة أكواد =======  
{
    name: "ZINC PRODUCTS",
    codes: ['100181', '100182', '106370', '103167', '103790', '107421', '106906', '508714', '102327', '102355', '103788', '103651', '103798', '103799', '102407'],
    maxDailyDose: "40 mg/day elemental zinc max long-term (100mg acute deficiency)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Beneficial for diabetic wound healing" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

{
    name: "PARACETAMOL",
    codes: ['100038','100035','100365','101686','101683','101685','101687','101688','101689','101690','101691','101692','101694','101697','101698','103836','103835','105813','103958','105453'],
    maxDailyDose: "4000 mg/day PO/IV",
    liver: { safe: false, emoji: "❌", firstChoice: "Dose ↓ or Avoid in liver diseases "
 },
    kidney: { safe: true, emoji: "✅", firstChoice: "No adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardiac neutral" },
    dm: { safe: true, emoji: "✅", firstChoice: "Neutral" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Neutral" }
},
// ======= PARICALCITOL - مجموعة أكواد =======  
{
    name: "PARICALCITOL",
    codes: ['103885', '103565', '106051'],
    maxDailyDose: "12 mcg/day PO max (4 mcg TIW or 2 mcg daily)",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic metabolism concern" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe CKD - requires dose adjustment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No direct glycemic effects" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor for hypercalcemia-induced arrhythmias" }
},

// ======= PAROXETINE - مجموعة أكواد =======  
{
    name: "PAROXETINE",
    codes: ['101717', '101718', '101719', '102506', '102507', '102035', '102036', '102037'],
    maxDailyDose: "60 mg/day PO (40 mg max with hepatic/renal impairment)",
    liver: { safe: false, emoji: "❌", firstChoice: "Sertraline or Escitalopram (safer SSRIs)" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in severe CrCl <30 mL/min" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT prolongation risk - use Sertraline instead" },
    dm: { safe: true, emoji: "✅", firstChoice: "Minimal glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP interaction" }
},

// ======= PAZOPANIB - مجموعة أكواد =======  
{
    name: "PAZOPANIB",
    codes: ['106032', '103779'],
    maxDailyDose: "800 mg/day PO (reduce to 200 mg in hepatic impairment)",
    liver: { safe: false, emoji: "❌", firstChoice: "Sunitinib or Cabozantinib (safer TKIs)" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe with CrCl ≥30 mL/min" },
    heart: { safe: false, emoji: "❌", firstChoice: "High cardiotoxicity risk - monitor LVEF" },
    dm: { safe: true, emoji: "✅", firstChoice: "No direct glycemic effects" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "High HTN risk - requires aggressive BP management" }
},

// ======= PEGFILGRASTIM - مجموعة أكواد =======  
{
    name: "PEGFILGRASTIM",
    codes: ['103392', '105836'],
    maxDailyDose: "12 mg total (6 mg per dose, max 2 doses per exposure)",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic metabolism" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},

// ======= PEMBROLIZUMAB - مجموعة أكواد =======  
{
    name: "PEMBROLIZUMAB",
    codes: ['103666'],
    maxDailyDose: "400 mg every 6 weeks IV (or 200 mg every 3 weeks)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor for immune-mediated hepatitis" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor for immune-mediated nephritis" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Risk of immune-mediated cardiomyopathy" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Risk of type 1 diabetes development" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= PEMETREXED - مجموعة أكواد =======  
{
    name: "PEMETREXED",
    codes: ['103739'],
    maxDailyDose: "850 mg every 3 weeks IV (500 mg/m² for average adult BSA)",
    liver: { safe: true, emoji: "✅", firstChoice: "Limited hepatic metabolism" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <45 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Minimal cardiac toxicity" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP interactions" }
},

// ======= PERAMPANEL - مجموعة أكواد =======  
{
    name: "PERAMPANEL",
    codes: ['103726', '103727', '103723', '103614', '103724', '103725'],
    maxDailyDose: "12 mg/day PO (6 mg mild hepatic, 4 mg moderate hepatic)",
    liver: { safe: false, emoji: "❌", firstChoice: "Levetiracetam or Lamotrigine (safer AEDs)" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Not recommended in severe renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "No significant cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= PERINDOPRIL ARGININE - مجموعة أكواد =======  
{
    name: "PERINDOPRIL ARGININE",
    codes: ['107375', '107376', '105806', '105805', '100559', '100560', '103921', '103920', '105086', '103326'],
    maxDailyDose: "16 mg/day PO (8 mg for CAD, reduce in renal impairment)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic impairment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <30 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "First-line for heart failure and CAD" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line antihypertensive agent" }
},

// ======= PERMETHRIN - مجموعة أكواد =======  
{
    name: "PERMETHRIN",
    codes: ['105622', '105621'],
    maxDailyDose: "30 g topical cream (single application sufficient)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal concerns" },
    heart: { safe: true, emoji: "✅", firstChoice: "No cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP interactions" }
},

// ======= PREGABALIN - مجموعة أكواد =======  
{
    name: "PREGABALIN",
    codes: ['106559', '106558', '105691', '105692', '105689', '105690', '106438', '106439', '106436', '106437', '101353', '101354', '101355', '101356', '102758', '101522', '101523', '101526', '101527', '101760', '101761', '101767', '102748', '101768', '102746', '101769', '102747'],
    maxDailyDose: "600 mg/day PO divided BID-TID (reduce in renal impairment)",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic metabolism required" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Requires dose reduction in CKD - primarily renal elimination" },
    heart: { safe: true, emoji: "✅", firstChoice: "No significant cardiac effects" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May cause weight gain - monitor glycemic control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No direct BP effects" }
},

// ======= QUETIAPINE - مجموعة أكواد =======  
{
    name: "QUETIAPINE",
    codes: ['103191', '103192', '103193', '106358', '103194', '102714', '102713', '102715', '102712', '105657', '105537', '105538', '105539', '105141', '105142', '105143', '103345', '103346', '103344', '105644', '105643', '103084', '103085', '103083', '103086', '103510', '103511', '103512', '102559', '102560', '102558', '105419', '105424', '105466', '105425', '102032', '102033', '102034', '102569', '102570', '102568'],
    maxDailyDose: "800 mg/day PO (400 mg IR, 800 mg XR formulations)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Aripiprazole or Risperidone (safer metabolic profile)" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: false, emoji: "❌", firstChoice: "QT prolongation risk - use Aripiprazole instead" },
    dm: { safe: false, emoji: "❌", firstChoice: "High metabolic syndrome risk - Aripiprazole preferred" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Orthostatic hypotension risk - monitor BP" }
},
// ======= PENTOXIFYLLINE - مجموعة أكواد =======  
{
    name: "PENTOXIFYLLINE",
    codes: ['102233'],
    maxDailyDose: "1200 mg/day PO (400 mg TID with meals)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce to 400 mg BID in hepatic impairment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Reduce to 400 mg daily if CrCl <30 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May improve peripheral circulation" }
},

// ======= PHENYTOIN - مجموعة أكواد =======  
{
    name: "PHENYTOIN",
    codes: ['100778', '106065'],
    maxDailyDose: "600 mg/day PO (usual 300-400 mg/day divided)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in acute hepatotoxicity" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in cardiac conduction disorders" },
    dm: { safe: true, emoji: "✅", firstChoice: "May cause hyperglycemia - monitor" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "IV form can cause hypotension" }
},

// ======= PIOGLITAZONE - مجموعة أكواد =======  
{
    name: "PIOGLITAZONE",
    codes: ['100024', '100025', '102795', '102796', '103400', '105081'],
    maxDailyDose: "45 mg/day PO (start 15-30 mg daily)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor ALT - discontinue if >3x ULN" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in NYHA Class III-IV HF" },
    dm: { safe: true, emoji: "✅", firstChoice: "First-line for insulin resistance" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause fluid retention and edema" }
},

// ======= PIRACETAM - مجموعة أكواد =======  
{
    name: "PIRACETAM", 
    codes: ['101555', '101556'],
    maxDailyDose: "24000 mg/day PO (up to 20g daily long-term)",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic dose adjustment needed" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <20 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Caution with bleeding risk - affects platelet aggregation" }
},

// ======= PIRFENIDONE - مجموعة أكواد =======  
{
    name: "PIRFENIDONE",
    codes: ['103395', '103908', '105877'],
    maxDailyDose: "2403 mg/day PO (801 mg TID with food)",
    liver: { safe: false, emoji: "❌", firstChoice: "Monitor ALT monthly x6 months - hepatotoxic" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in moderate-severe renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= PITAVASTATIN - مجموعة أكواد =======  
{
    name: "PITAVASTATIN",
    codes: ['102820', '102821'],
    maxDailyDose: "4 mg/day PO (2 mg max with renal impairment)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in active liver disease" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Max 2 mg daily if GFR 15-59 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "First-line for cardiac protection" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May increase glucose levels - monitor HbA1c" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

// ======= PREDNISOLONE - مجموعة أكواد =======  
{
    name: "PREDNISOLONE",
    codes: ['100146', '100147', '101639', '101757', '101759', '105921', '101046', '106310', '106309', '101758', '103605', '103684'],
    maxDailyDose: "80 mg/day PO (short-term), 10 mg/day maintenance",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Use with caution - may worsen viral hepatitis" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe with dose adjustment for fluid retention" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May cause fluid retention and hypertension" },
    dm: { safe: false, emoji: "❌", firstChoice: "Causes hyperglycemia - monitor glucose closely" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Causes sodium retention and hypertension" }
},

// ======= PROPRANOLOL - مجموعة أكواد =======  
{
    name: "PROPRANOLOL",
    codes: ['101127', '101128', '103629', '103630'],
    maxDailyDose: "640 mg/day PO (usual 80-320 mg/day divided)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose 50% in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in decompensated HF" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May mask hypoglycemia symptoms" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line for hypertension management" }
},

// ======= QUINAPRIL - مجموعة أكواد =======  
{
    name: "QUINAPRIL", 
    codes: ['100027', '100028'],
    maxDailyDose: "80 mg/day PO (usual 10-40 mg/day)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic impairment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Reduce dose if CrCl <60 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "First-line for heart failure" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line antihypertensive" }
},

// ======= RABEPRAZOLE - مجموعة أكواد =======  
{
    name: "RABEPRAZOLE",
    codes: ['101715', '101843', '101844'],
    maxDailyDose: "40 mg/day PO (20 mg daily maintenance)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Use caution in severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= RAMIPRIL - مجموعة أكواد =======  
{
    name: "RAMIPRIL",
    codes: ['101845', '101846', '101847'],
    maxDailyDose: "20 mg/day PO (usual 2.5-10 mg/day)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic impairment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Reduce dose if CrCl <40 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "First-line for heart failure and CAD" },
    dm: { safe: true, emoji: "✅", firstChoice: "Renoprotective in diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line antihypertensive" }
},

// ======= RANITIDINE - مجموعة أكواد =======  
{
    name: "RANITIDINE",
    codes: ['100139', '100140', '100165', '101023', '101486', '101487', '101504', '101727', '101848', '101849', '101850', '101851', '101852', '101853', '101854', '101855', '101856', '102178', '102388', '102389', '102390', '102391', '105043', '102436', '102437', '102438', '102439', '102440'],
    maxDailyDose: "600 mg/day PO (300 mg BID or 150 mg QID)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose if CrCl <50 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= REPAGLINIDE - مجموعة أكواد =======  
{
    name: "REPAGLINIDE",
    codes: ['101572', '101573', '101574'],
    maxDailyDose: "16 mg/day PO (4 mg QID max)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Use caution - primarily hepatic metabolism" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Effective for postprandial glucose control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= RIBAVIRIN - مجموعة أكواد =======  
{
    name: "RIBAVIRIN",
    codes: ['100546', '105996', '103533'],
    maxDailyDose: "1400 mg/day PO (weight-based: 1000-1200 mg/day)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor for hepatic decompensation" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <50 mL/min" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in cardiac disease" },
    dm: { safe: true, emoji: "✅", firstChoice: "No direct glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= RISPERIDONE - مجموعة أكواد =======  
{
    name: "RISPERIDONE",
    codes: ['103846', '101961', '101962', '101963', '105408', '105660', '103019', '101956', '101942', '101943', '101944', '101957', '101958', '101959', '101960'],
    maxDailyDose: "16 mg/day PO (usual 4-8 mg/day)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in severe renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT prolongation risk - monitor ECG" },
    dm: { safe: false, emoji: "❌", firstChoice: "High diabetes risk - Aripiprazole preferred" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Orthostatic hypotension risk" }
},

// ======= RIVASTIGMINE - مجموعة أكواد =======  
{
    name: "RIVASTIGMINE",
    codes: ['100801', '100802', '100803', '100804', '100805', '107652', '107653', '107189', '107190', '107191', '107192', '107259', '107260', '105609', '105610'],
    maxDailyDose: "12 mg/day PO (6 mg BID) or 13.3 mg/24h patch",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Use caution in moderate hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May cause bradycardia - monitor HR" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= ROSUVASTATIN - مجموعة أكواد =======  
{
    name: "ROSUVASTATIN",
    codes: ['100566', '100567', '105415', '105416', '105417', '105414', '102556', '102557', '102677', '102676', '102749', '102750', '105721', '105722', '105723', '105051', '105052', '107214', '107215', '105595', '105596'],
    maxDailyDose: "40 mg/day PO (20 mg max in Asians)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in active liver disease" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Max 10 mg daily if CrCl <30 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "First-line for cardiac protection" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May increase diabetes risk - monitor glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},
// ======= PASSIFLORE PRODUCTS - مجموعة أكواد =======  
{
    name: "PASSIFLORE PRODUCTS",
    codes: ['100196'],
    maxDailyDose: "1800 mg/day PO (600 mg TID typical extract dose)",
    liver: { safe: true, emoji: "✅", firstChoice: "Natural supplement - generally safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "May have mild sedative effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May have mild hypotensive effect" }
},

// ======= PATIROMER - مجموعة أكواد =======  
{
    name: "PATIROMER",
    codes: ['103856', '103821'],
    maxDailyDose: "25.2 g/day PO (8.4 g starting dose, titrate)",
    liver: { safe: true, emoji: "✅", firstChoice: "No hepatic dose adjustment needed" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in CKD - hyperkalemia treatment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Beneficial for cardiac patients with hyperkalemia" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May improve BP control by K+ reduction" }
},

// ======= PEGINTERFERON ALFA-2A - مجموعة أكواد =======  
{
    name: "PEGINTERFERON ALFA-2A",
    codes: ['101724'],
    maxDailyDose: "180 mcg/week SC (weekly dosing)",
    liver: { safe: false, emoji: "❌", firstChoice: "Monitor ALT - discontinue if >10x ULN" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose if CrCl <50 mL/min" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May cause cardiomyopathy - monitor ECG" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May worsen glucose control" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause or worsen hypertension" }
},

// ======= PEGINTERFERON BETA 1A - مجموعة أكواد =======  
{
    name: "PEGINTERFERON BETA 1A",
    codes: ['103595', '103581'],
    maxDailyDose: "125 mcg every 2 weeks SC (125 mcg biweekly)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor ALT - dose reduce if elevated" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= PHENAZOPYRIDINE HYDROCHLORIDE - مجموعة أكواد =======  
{
    name: "PHENAZOPYRIDINE HYDROCHLORIDE", 
    codes: ['102271'],
    maxDailyDose: "600 mg/day PO (200 mg TID for 2 days max)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Use caution in hepatic impairment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated in CKD - nephrotoxic" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= PHENOXYMETHYLPENICILLIN - مجموعة أكواد =======  
{
    name: "PHENOXYMETHYLPENICILLIN",
    codes: ['101653', '101654', '101655'],
    maxDailyDose: "4000 mg/day PO (1000 mg QID or 500 mg QID)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in severe renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= PHENYLEPHRINE - مجموعة أكواد =======  
{
    name: "PHENYLEPHRINE",
    codes: ['100150', '103663'],
    maxDailyDose: "30 mg/day PO (10 mg TID oral) or topical as directed",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May increase BP and heart rate" },
    dm: { safe: true, emoji: "✅", firstChoice: "No direct glycemic effects" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe HTN" }
},

// ======= PHYTOMENADIONE - مجموعة أكواد =======  
{
    name: "PHYTOMENADIONE",
    codes: ['101212'],
    maxDailyDose: "40 mg/day IM/IV (warfarin reversal) or 25 mg PO",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe - essential for liver function" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= PILOCARPINE HYDROCHLORIDE - مجموعة أكواد =======  
{
    name: "PILOCARPINE HYDROCHLORIDE",
    codes: ['100143', '100144'],
    maxDailyDose: "30 mg/day PO (10 mg TID) or topical as directed",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Use caution in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May cause bradycardia and hypotension" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause hypotension" }
},

// ======= PIMECROLIMUS - مجموعة أكواد =======  
{
    name: "PIMECROLIMUS",
    codes: ['100748', '103294', '106359'],
    maxDailyDose: "60 g/day topical (1% cream - apply BID)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= PINAVERIUM BROMIDE - مجموعة أكواد =======  
{
    name: "PINAVERIUM BROMIDE",
    codes: ['100654'],
    maxDailyDose: "150 mg/day PO (50 mg TID with meals)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= PIOGLITAZONE,GLIMEPIRIDE - مجموعة أكواد =======  
{
    name: "PIOGLITAZONE,GLIMEPIRIDE",
    codes: ['105048', '105049'],
    maxDailyDose: "30/4 mg/day PO (combination tablet)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor ALT - both agents hepatotoxic" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce glimepiride in renal impairment" },
    heart: { safe: false, emoji: "❌", firstChoice: "Pioglitazone contraindicated in heart failure" },
    dm: { safe: true, emoji: "✅", firstChoice: "Combination therapy for T2DM" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause fluid retention" }
},

// ======= PIOGLITAZONE,METFORMIN - مجموعة أكواد =======  
{
    name: "PIOGLITAZONE,METFORMIN",
    codes: ['103376', '107257'],
    maxDailyDose: "45/2550 mg/day PO (combination therapy)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor ALT - pioglitazone hepatotoxic" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if eGFR <30 mL/min" },
    heart: { safe: false, emoji: "❌", firstChoice: "Pioglitazone contraindicated in heart failure" },
    dm: { safe: true, emoji: "✅", firstChoice: "First-line combination for T2DM" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause fluid retention" }
},

// ======= PRAMIPEXOLE - مجموعة أكواد =======  
{
    name: "PRAMIPEXOLE",
    codes: ['103060', '103067'],
    maxDailyDose: "4.5 mg/day PO (divided TID or ER once daily)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal hepatic metabolism" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Reduce dose if CrCl <60 mL/min" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May cause orthostatic hypotension" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause hypotension" }
},

// ======= PRAVASTATIN - مجموعة أكواد =======  
{
    name: "PRAVASTATIN",
    codes: ['101289'],
    maxDailyDose: "80 mg/day PO (40 mg max in renal impairment)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in active liver disease" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Max 40 mg daily if severe renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "First-line for cardiac protection" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May increase diabetes risk slightly" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

// ======= PRAZIQUANTEL - مجموعة أكواد =======  
{
    name: "PRAZIQUANTEL",
    codes: ['100311'],
    maxDailyDose: "75 mg/kg/day PO (divided doses for schistosomiasis)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Use caution in severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= PROCYCLIDINE - مجموعة أكواد =======  
{
    name: "PROCYCLIDINE",
    codes: ['103411'],
    maxDailyDose: "60 mg/day PO (usual max 30 mg/day)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May cause tachycardia and arrhythmias" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= PROGESTERONE - مجموعة أكواد =======  
{
    name: "PROGESTERONE",
    codes: ['105894', '100574', '100575', '103239'],
    maxDailyDose: "400 mg/day PO or 100 mg vaginal (cyclic dosing)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Use caution in liver dysfunction" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Increased VTE risk with estrogen" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May affect glucose tolerance" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May increase blood pressure" }
},

// ======= PROMETHAZINE - مجموعة أكواد =======  
{
    name: "PROMETHAZINE",
    codes: ['101082', '102469', '101081'],
    maxDailyDose: "100 mg/day PO (25 mg QID max)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May cause QT prolongation" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause hypotension" }
},

// ======= PYRIDOSTIGMINE - مجموعة أكواد =======  
{
    name: "PYRIDOSTIGMINE",
    codes: ['101415'],
    maxDailyDose: "1500 mg/day PO (divided into 5-6 doses)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal hepatic metabolism" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Reduce dose if CrCl <20 mL/min" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May cause bradycardia and arrhythmias" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause hypotension" }
},

// ======= QUINAGOLIDE - مجموعة أكواد =======  
{
    name: "QUINAGOLIDE",
    codes: ['101565'],
    maxDailyDose: "600 mcg/day PO (75 mcg starting dose)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Use caution in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for cardiac valve fibrosis" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause hypotension initially" }
},

// ======= RALOXIFENE - مجموعة أكواد =======  
{
    name: "RALOXIFENE",
    codes: ['106518', '100798'],
    maxDailyDose: "60 mg/day PO (once daily dosing)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Use caution in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Increased VTE and stroke risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},
// ======= PIPERAZINE,KHELLIN,HEXAMINE - مجموعة أكواد =======  
{
    name: "PIPERAZINE,KHELLIN,HEXAMINE",
    codes: ['100530'],
    maxDailyDose: "60 g/day effervescent (divided doses with water)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Actually beneficial for urinary tract" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= PIRIBEDIL - مجموعة أكواد =======  
{
    name: "PIRIBEDIL",
    codes: ['102243'],
    maxDailyDose: "300 mg/day PO (150-250 mg/day typical)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor hepatic function regularly" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in severe renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May cause orthostatic hypotension" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated in uncontrolled HTN" }
},

// ======= PIROXICAM - مجموعة أكواد =======  
{
    name: "PIROXICAM",
    codes: ['100839', '102230', '100840', '100838'],
    maxDailyDose: "20 mg/day PO (maximum daily dose)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe hepatic impairment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe renal impairment" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe heart failure" },
    dm: { safe: true, emoji: "✅", firstChoice: "No direct glycemic effects" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May increase BP - monitor closely" }
},

// ======= PNEUMOCOCCAL VACCINE - مجموعة أكواد =======  
{
    name: "PNEUMOCOCCAL VACCINE",
    codes: ['105712', '103540', '106510'],
    maxDailyDose: "0.5 mL IM single dose (per vaccination schedule)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Recommended for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Recommended for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

// ======= POLICRESULEN - مجموعة أكواد =======  
{
    name: "POLICRESULEN",
    codes: ['100057'],
    maxDailyDose: "6 vaginal suppositories per course (as directed)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= POLYMYXIN,NEOMYCIN,HYDROCORTISONE - مجموعة أكواد =======  
{
    name: "POLYMYXIN,NEOMYCIN,HYDROCORTISONE",
    codes: ['101667'],
    maxDailyDose: "8 drops/day otic (2 drops QID for 7-10 days)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Caution with neomycin in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - steroid component" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant systemic effects" }
},

// ======= PONESIMOD - مجموعة أكواد =======  
{
    name: "PONESIMOD",
    codes: ['107527'],
    maxDailyDose: "40 mg/day PO (after titration from 2 mg)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor hepatic function - metabolized hepatically" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe cardiac conditions" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "May cause hypertension" }
},

// ======= RETAPAMULIN - مجموعة أكواد =======  
{
    name: "RETAPAMULIN",
    codes: ['102493'],
    maxDailyDose: "20 g/day topical (apply BID to ≤100 cm² for 5 days)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= RIBOCICLIB - مجموعة أكواد =======  
{
    name: "RIBOCICLIB",
    codes: ['103647', '103537'],
    maxDailyDose: "600 mg/day PO (21 days on, 7 days off)",
    liver: { safe: false, emoji: "❌", firstChoice: "Monitor ALT/AST - high hepatotoxicity risk" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor QTc interval - arrhythmia risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= RIFAMPICIN, ISONIAZID - مجموعة أكواد =======  
{
    name: "RIFAMPICIN, ISONIAZID",
    codes: ['105797', '105562', '105548', '105923', '101945', '101946', '103843'],
    maxDailyDose: "900 mg/day (rifampicin 600mg + isoniazid 300mg)",
    liver: { safe: false, emoji: "❌", firstChoice: "Monitor ALT/AST closely - hepatotoxic combination" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= RIOCIGUAT - مجموعة أكواد =======  
{
    name: "RIOCIGUAT",
    codes: ['103705', '103706', '103707', '103708', '103709'],
    maxDailyDose: "7.5 mg/day PO (2.5 mg TID maximum)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Use caution in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose if CrCl <15 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Beneficial for pulmonary hypertension" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated in systemic hypotension" }
},

// ======= RISANKIZUMAB - مجموعة أكواد =======  
{
    name: "RISANKIZUMAB",
    codes: ['107452', '103741', '105815'],
    maxDailyDose: "600 mg IV loading, then 150 mg SC every 12 weeks",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= RITODRINE - مجموعة أكواد =======  
{
    name: "RITODRINE",
    codes: ['102381'],
    maxDailyDose: "350 mg/day IV (rare emergency use only)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in cardiac disease" },
    dm: { safe: false, emoji: "❌", firstChoice: "Causes hyperglycemia - avoid in DM" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "May cause severe hypertension" }
},

// ======= RITUXIMAB - مجموعة أكواد =======  
{
    name: "RITUXIMAB",
    codes: ['103419', '107525'],
    maxDailyDose: "1000 mg IV per infusion (varies by indication)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor for hepatitis B reactivation" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "May cause cardiac arrhythmias" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Infusion reactions may affect BP" }
},

// ======= ROFLUMILAST - مجموعة أكواد =======  
{
    name: "ROFLUMILAST",
    codes: ['102757', '103805'],
    maxDailyDose: "500 mcg/day PO (once daily)",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in moderate-severe hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= ROSEHIP EXTRACT (IMMUNITY) - مجموعة أكواد =======  
{
    name: "ROSEHIP EXTRACT (IMMUNITY)",
    codes: ['508518'],
    maxDailyDose: "1500 mg/day PO (500 mg TID typical)",
    liver: { safe: true, emoji: "✅", firstChoice: "Natural supplement - generally safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "May have cardiovascular benefits" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May have mild antihypertensive effect" }
},

// ======= ROXITHROMYCIN - مجموعة أكواد =======  
{
    name: "ROXITHROMYCIN",
    codes: ['101980'],
    maxDailyDose: "300 mg/day PO (150 mg BID)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Use caution in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in severe renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "QT prolongation risk - monitor ECG" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= RUPATADINE - مجموعة أكواد =======  
{
    name: "RUPATADINE",
    codes: ['105887'],
    maxDailyDose: "20 mg/day PO (10 mg BID maximum)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},
// ======= POTASSIUM CHLORIDE,ICHTHAMMOL - مجموعة أكواد =======  
{
    name: "POTASSIUM CHLORIDE,ICHTHAMMOL",
    codes: ['100601'],
    maxDailyDose: "10 suppositories per course (as directed for treatment)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Beneficial for urinary tract disorders" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= POTASSIUM PRODUCTS - مجموعة أكواد =======  
{
    name: "POTASSIUM PRODUCTS",
    codes: ['102640', '106161'],
    maxDailyDose: "200 mEq/day PO (100 mEq typical maintenance)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic impairment" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <10 mL/min" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor ECG - arrhythmia risk with hyperkalemia" },
    dm: { safe: true, emoji: "✅", firstChoice: "No direct glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP" }
},

// ======= POTASSIUM SODIUM HYDROGEN CITRATE - مجموعة أكواد =======  
{
    name: "POTASSIUM SODIUM HYDROGEN CITRATE",
    codes: ['102270'],
    maxDailyDose: "12 g/day PO (4 g TID granules in water)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Beneficial for kidney stone prevention" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= POVIDONE IODINE (ANTISEPTIC) - مجموعة أكواد =======  
{
    name: "POVIDONE IODINE (ANTISEPTIC)",
    codes: ['102483', '102482', '100283', '100284', '100604', '100608'],
    maxDailyDose: "240 mL/day topical (4 times daily for 7 days max)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor in renal impairment - iodine accumulation" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= POVIDONE IODINE PREP - مجموعة أكواد =======  
{
    name: "POVIDONE IODINE PREP",
    codes: ['105263', '100282', '105262', '105261', '106163', '105820', '105821', '105822'],
    maxDailyDose: "200 g/day topical (apply as directed for wound care)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Avoid prolonged use in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= POVIDONE IODINE SPRAY - مجموعة أكواد =======  
{
    name: "POVIDONE IODINE SPRAY",
    codes: ['105024'],
    maxDailyDose: "55 g spray applied as needed (max 7 days)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for short-term use" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= POWDER LEAVES OF ARTICHOKE - مجموعة أكواد =======  
{
    name: "POWDER LEAVES OF ARTICHOKE",
    codes: ['100180'],
    maxDailyDose: "1800 mg/day PO (600 mg TID extract)",
    liver: { safe: true, emoji: "✅", firstChoice: "Hepatoprotective properties" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "May have cardioprotective effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "May help glucose metabolism" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May have mild antihypertensive effect" }
},

// ======= PRE-WORKOUT - مجموعة أكواد =======  
{
    name: "PRE-WORKOUT",
    codes: ['105011'],
    maxDailyDose: "234 g powder (as directed per serving size)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for healthy individuals" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe with adequate hydration" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP and HR - contains stimulants" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may contain sugars" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Avoid in uncontrolled HTN - stimulants present" }
},

// ======= PREDNISOLONE ACETATE - مجموعة أكواد =======  
{
    name: "PREDNISOLONE ACETATE",
    codes: ['100146', '100147', '101639', '101757'],
    maxDailyDose: "20 drops/day ophthalmic (1-2 drops QID max)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor IOP - may increase intraocular pressure" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant systemic effects" }
},

// ======= PREDNISOLONE,NEOMYCIN,POLYMYXIN B - مجموعة أكواد =======  
{
    name: "PREDNISOLONE,NEOMYCIN,POLYMYXIN B",
    codes: ['101517'],
    maxDailyDose: "8 drops/day ophthalmic (1-2 drops QID)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor for neomycin ototoxicity" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor IOP - steroid component" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant systemic effects" }
},

// ======= RANIBIZUMAB - مجموعة أكواد =======  
{
    name: "RANIBIZUMAB",
    codes: ['103572'],
    maxDailyDose: "0.5 mg intravitreal monthly (single injection)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for thromboembolic events" },
    dm: { safe: true, emoji: "✅", firstChoice: "Beneficial for diabetic retinopathy" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - may increase BP" }
},

// ======= RECOMBINANT DNA COAGULATING FACTOR - مجموعة أكواد =======  
{
    name: "RECOMBINANT DNA COAGULATING FACTOR",
    codes: ['103560', '107656'],
    maxDailyDose: "5 mg IV per episode (dose varies by indication)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe - used for liver bleeding" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for thrombotic events" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

// ======= RECOVERY, AMINO AND BCAA - مجموعة أكواد =======  
{
    name: "RECOVERY, AMINO AND BCAA",
    codes: ['100112', '100116', '105015', '105006', '105004', '105007', '105005', '105008', '105009', '105010', '103124', '103123', '103125', '102251', '102252', '103127', '103126'],
    maxDailyDose: "5400 g powder (varies by product and serving size)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for healthy individuals" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor protein intake in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - some contain carbohydrates" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

// ======= RHOPHYLAC - مجموعة أكواد =======  
{
    name: "RHOPHYLAC",
    codes: ['103359'],
    maxDailyDose: "300 mcg IM single dose (anti-D immunoglobulin)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},
// ======= PETROLATUM WHITE, MINERAL OIL - مجموعة أكواد =======  
{
    name: "PETROLATUM WHITE, MINERAL OIL",
    codes: ['101867'],
    maxDailyDose: "3.5 g ophthalmic ointment (apply PRN at bedtime)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= PERINDOPRIL, AMLODIPINE - مجموعة أكواد =======  
{
    name: "PERINDOPRIL, AMLODIPINE",
    codes: ['100555', '100556', '100557', '100558', '105085', '105084', '105083', '105082'],
    maxDailyDose: "16 mg/day PO (perindopril 8mg + amlodipine 10mg max)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor hepatic function - both agents metabolized" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in severe renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Excellent for cardiac protection" },
    dm: { safe: true, emoji: "✅", firstChoice: "Beneficial for diabetic nephropathy" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line combination therapy" }
},

// ======= PERINDOPRIL, INDAPAMIDE - مجموعة أكواد =======  
{
    name: "PERINDOPRIL, INDAPAMIDE",
    codes: ['100310', '101766'],
    maxDailyDose: "8/2.5 mg/day PO (perindopril 8mg + indapamide 2.5mg)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor hepatic function regularly" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Contraindicated if CrCl <30 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Proven cardiovascular protection" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - indapamide may worsen DM" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Excellent BP control combination" }
},
// ======= PARACETAMOL منفردًا - جميع الأشكال الصيدلانية =======
{
    name: "PARACETAMOL",
    codes: ['100035', '100036', '100037', '100038', '100039', '100040', '100365', '100605', '100757', '100758', '100861', '100862', '100863', '100864', '100868', '100869', '101683', '101685', '101686', '101687', '101712', '101713', '101897', '101912', '101913', '102191', '102253', '102254', '102255', '102256', '102561', '103671', '103782', '103835', '103836', '103958', '105169', '105453', '105813', '106914', '107460'],
    maxDailyDose: "4000 mg/day PO max (adults), 3000 mg/day (elderly)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose to 3g/day in mild hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe - no dose adjustment needed in normal CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No effect on blood pressure" }
},

// ======= PARACETAMOL + DIPHENHYDRAMINE =======
{
    name: "PARACETAMOL + DIPHENHYDRAMINE",
    codes: ['100045', '101692'],
    maxDailyDose: "3000 mg paracetamol + 150 mg diphenhydramine per day max",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid - both hepatotoxic, use melatonin instead" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor ECG - anticholinergic effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effect" }
},

// ======= PARACETAMOL + PHENYLEPHRINE =======
{
    name: "PARACETAMOL + PHENYLEPHRINE",
    codes: ['101693', '101691'],
    maxDailyDose: "3000 mg paracetamol + 30 mg phenylephrine per day max",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce paracetamol to 2.5g/day in liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
    heart: { safe: false, emoji: "❌", firstChoice: "Avoid in CAD - use paracetamol alone" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated - increases BP significantly" }
},

// ======= PARACETAMOL + CAFFEINE =======
{
    name: "PARACETAMOL + CAFFEINE",
    codes: ['106039', '100866', '101690'],
    maxDailyDose: "3000 mg paracetamol + 200 mg caffeine per day max",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce paracetamol dose in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Limit caffeine in arrhythmias" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - caffeine may increase pressure" }
},

// ======= PARACETAMOL + CAFFEINE + PHENYLEPHRINE =======
{
    name: "PARACETAMOL + CAFFEINE + PHENYLEPHRINE",
    codes: ['101689', '101688'],
    maxDailyDose: "2500 mg paracetamol + 150 mg caffeine + 24 mg phenylephrine per day max",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid in liver disease - use paracetamol alone" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in CAD - dual cardiac stimulation" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated - significant BP elevation risk" }
},

// ======= PARACETAMOL + PSEUDOEPHEDRINE =======
{
    name: "PARACETAMOL + PSEUDOEPHEDRINE", 
    codes: ['100041', '100046', '100911', '102079'],
    maxDailyDose: "3000 mg paracetamol + 240 mg pseudoephedrine per day max",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce paracetamol in hepatic impairment" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
    heart: { safe: false, emoji: "❌", firstChoice: "Avoid in CAD - use paracetamol + saline nasal spray" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May increase glucose - monitor closely" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated - significant hypertensive risk" }
},

// ======= PARACETAMOL + CAFFEINE + CODEINE =======
{
    name: "PARACETAMOL + CAFFEINE + CODEINE",
    codes: ['102094'],
    maxDailyDose: "2500 mg paracetamol + 120 mg caffeine + 240 mg codeine per day max",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid - triple hepatic burden" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce codeine dose in CKD" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for bradycardia from codeine" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor BP - caffeine effect" }
},

// ======= PARACETAMOL + ORPHENADRINE =======
{
    name: "PARACETAMOL + ORPHENADRINE",
    codes: ['101485'],
    maxDailyDose: "3000 mg paracetamol + 150 mg orphenadrine per day max",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid - dual hepatotoxicity risk" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor ECG - anticholinergic effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effect" }
},

// ======= PARACETAMOL + TRIPROLIDINE + PHENYLEPHRINE =======
{
    name: "PARACETAMOL + TRIPROLIDINE + PHENYLEPHRINE",
    codes: ['101951', '101952'],
    maxDailyDose: "2500 mg paracetamol + 7.5 mg triprolidine + 30 mg phenylephrine per day max",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid in liver disease - complex metabolism" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
    heart: { safe: false, emoji: "❌", firstChoice: "Avoid in CAD - phenylephrine contraindicated" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated - phenylephrine increases BP" }
},

// ======= PARACETAMOL + CHLORPHENIRAMINE + PHENYLEPHRINE =======
{
    name: "PARACETAMOL + CHLORPHENIRAMINE + PHENYLEPHRINE",
    codes: ['100865', '100906', '100907'],
    maxDailyDose: "2500 mg paracetamol + 24 mg chlorpheniramine + 30 mg phenylephrine per day max",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid - multiple hepatic metabolized drugs" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
    heart: { safe: false, emoji: "❌", firstChoice: "Avoid in cardiac patients - multiple contraindications" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated - phenylephrine effect" }
},

// ======= PARACETAMOL + SODIUM BICARBONATE =======
{
    name: "PARACETAMOL + SODIUM BICARBONATE",
    codes: ['100867', '101684'],
    maxDailyDose: "3000 mg paracetamol + 3000 mg sodium bicarbonate per day max",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor liver function - faster absorption" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Monitor sodium load in CKD" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor for sodium overload in heart failure" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "⚠️", firstChoice: "Monitor sodium intake - may worsen HTN" }
},

// ======= PARACETAMOL + DEXTROMETHORPHAN + PHENYLEPHRINE =======
{
    name: "PARACETAMOL + DEXTROMETHORPHAN + PHENYLEPHRINE",
    codes: ['100042'],
    maxDailyDose: "2500 mg paracetamol + 120 mg dextromethorphan + 30 mg phenylephrine per day max",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid - multiple hepatic metabolized components" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
    heart: { safe: false, emoji: "❌", firstChoice: "Avoid in cardiac disease - phenylephrine risk" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated - phenylephrine component" }
},

// ======= PARACETAMOL + PHENYLEPHRINE + DIPHENHYDRAMINE =======
{
    name: "PARACETAMOL + PHENYLEPHRINE + DIPHENHYDRAMINE",
    codes: ['100910', '101669'],
    maxDailyDose: "2500 mg paracetamol + 30 mg phenylephrine + 150 mg diphenhydramine per day max",
    liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated - triple hepatotoxic risk" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for kidney patients" },
    heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated - dual cardiac effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetic patients" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated - phenylephrine increases BP" }
},

// ======= PREGNANCY CALCIUM - مجموعة أكواد =======  
{
    name: "PREGNANCY CALCIUM",
    codes: ['101660'],
    maxDailyDose: "3000 mg/day PO (pregnancy max for ages 14-18)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe in pregnancy" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe - enhanced absorption in pregnancy" },
    heart: { safe: true, emoji: "✅", firstChoice: "Beneficial for maternal cardiac health" },
    dm: { safe: true, emoji: "✅", firstChoice: "May help prevent gestational diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May prevent pregnancy-induced HTN" }
},

// ======= PROBIOTICS - مجموعة أكواد =======  
{
    name: "PROBIOTICS",
    codes: ['105477', '103665', '106430', '105535', '103746', '103484', '105025', '105026', '103391', '105150', '106546', '102994', '102993', '105192', '103343', '107456', '107455', '105475', '105476', '106471', '106470', '105264', '105072', '105073', '105204', '106476', '106475', '106477', '106478', '101799', '101800'],
    maxDailyDose: "200 billion CFU/day (20 billion CFU typical for adults)",
    liver: { safe: true, emoji: "✅", firstChoice: "May improve liver function" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "May improve cardiovascular health" },
    dm: { safe: true, emoji: "✅", firstChoice: "May improve glycemic control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP slightly" }
},

// ======= PROBIOTICS RICH PRODUCTS - مجموعة أكواد =======  
{
    name: "PROBIOTICS RICH PRODUCTS",
    codes: ['103013', '103014'],
    maxDailyDose: "30 stick-packs/day (follow product directions)",
    liver: { safe: true, emoji: "✅", firstChoice: "Natural probiotic source - safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "May have cardiovascular benefits" },
    dm: { safe: true, emoji: "✅", firstChoice: "May help glucose metabolism" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Natural source - safe for HTN" }
},

// ======= PROBIOTICS RICH PRODUCTS (KIDS) - مجموعة أكواد =======  
{
    name: "PROBIOTICS RICH PRODUCTS (KIDS)",
    codes: ['103112', '107564', '107558', '107565'],
    maxDailyDose: "30 mL/day (pediatric formulation as directed)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric use" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in children with renal issues" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "May help prevent pediatric diabetes" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for children" }
},

// ======= PROPOLIS PRODUCTS - مجموعة أكواد =======  
{
    name: "PROPOLIS PRODUCTS",
    codes: ['105291', '103335', '105234', '103278', '107431', '107425', '507546'],
    maxDailyDose: "1500 mg/day PO (500 mg TID maximum safe dose)",
    liver: { safe: true, emoji: "✅", firstChoice: "May have hepatoprotective properties" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "May have cardioprotective effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "May help glucose metabolism" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Natural supplement - generally safe" }
},

// ======= PROPOLIS PRODUCTS (KIDS) - مجموعة أكواد =======  
{
    name: "PROPOLIS PRODUCTS (KIDS)",
    codes: ['507985', '101371'],
    maxDailyDose: "200 mg/day PO (pediatric dose - half of adult)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric use in appropriate doses" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for children" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for children" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for pediatric use" }
},

// ======= QUINAPRIL,HYDROCHLOROTHIAZIDE - مجموعة أكواد =======  
{
    name: "QUINAPRIL,HYDROCHLOROTHIAZIDE",
    codes: ['100005'],
    maxDailyDose: "40/25 mg/day PO (quinapril 40mg + HCTZ 25mg)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Monitor hepatic function" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <30 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Excellent for heart failure and HTN" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "HCTZ may worsen glucose tolerance" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line combination for HTN" }
},

// ======= ROSEHIP EXTRACT (JOINT) - مجموعة أكواد =======  
{
    name: "ROSEHIP EXTRACT (JOINT)",
    codes: ['106418'],
    maxDailyDose: "2500 mg/day PO (for joint health applications)",
    liver: { safe: true, emoji: "✅", firstChoice: "Natural supplement - generally safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "May have cardiovascular benefits" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May have mild antihypertensive effect" }
},
        // ======= SACUBITRIL,VALSARTAN - مجموعة أكواد =======  
        {
            name: "SACUBITRIL,VALSARTAN",
            codes: ['102979', '102978', '102976', '107481', '107482', '107480'],
            maxDailyDose: "400 mg/day PO max (97mg/103mg BID)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver - no hepatic adjustment needed" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose if eGFR <30 - start 24/26mg BID" },
            heart: { safe: true, emoji: "✅", firstChoice: "First-line for heart failure HFrEF" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics - no glucose effect" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "First-line for HTN in HF patients" }
        },

        // ======= SALBUTAMOL - مجموعة أكواد =======  
        {
            name: "SALBUTAMOL",
            codes: ['100356', '102732', '102294', '105872', '102939', '100828', '102295', '100216', '100353', '101989', '102291', '100354', '100355', '102292', '102293'],
            maxDailyDose: "800 mcg/day inhaled max (32mg/day PO max)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "⚠", firstChoice: "Monitor cardiac patients - may cause tachycardia" },
            dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - may cause hyperglycemia" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SALBUTAMOL,IPRATROPIUM BROMIDE - مجموعة أكواد =======  
        {
            name: "SALBUTAMOL,IPRATROPIUM BROMIDE",
            codes: ['100537', '100536'],
            maxDailyDose: "8 puffs/day max combination inhaler",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "⚠", firstChoice: "Monitor cardiac patients - dual bronchodilator" },
            dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose with salbutamol component" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SALICYLIC ACID - مجموعة أكواد =======  
        {
            name: "SALICYLIC ACID",
            codes: ['103668', '100064', '100065', '103800'],
            maxDailyDose: "Topical use only - no systemic absorption limit",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe topical use" }
        },

        // ======= SALMETEROL,FLUTICASONE - مجموعة أكواد =======  
        {
            name: "SALMETEROL,FLUTICASONE",
            codes: ['102882', '102881', '102880', '102947', '103271', '102934', '102026', '102027', '102028', '102029', '102030', '102031', '106355', '106356', '107293', '107294'],
            maxDailyDose: "2 puffs BID max (salmeterol 50mcg + fluticasone 500mcg)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "⚠", firstChoice: "Monitor cardiac patients - LABA component" },
            dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - steroid component" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SAW PALMETTO SUPPLEMENTS - مجموعة أكواد =======  
        {
            name: "SAW PALMETTO SUPPLEMENTS",
            codes: ['100114', '106368', '101217', '101406', '107547', '107582', '105590', '508066', '509338'],
            maxDailyDose: "320 mg/day max saw palmetto extract",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe supplement" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SAXAGLIPTIN - مجموعة أكواد =======  
        {
            name: "SAXAGLIPTIN",
            codes: ['102943', '101629', '102739', '102740', '102741'],
            maxDailyDose: "5 mg/day PO max (2.5mg if CrCl <50)",
            liver: { safe: true, emoji: "✅", firstChoice: "No hepatic dose adjustment needed" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce to 2.5mg if CrCl <50 mL/min" },
            heart: { safe: false, emoji: "❌", firstChoice: "FDA warning - increased HF risk" },
            dm: { safe: true, emoji: "✅", firstChoice: "Indicated for T2DM management" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SCAR TREATMENT - مجموعة أكواد =======  
        {
            name: "SCAR TREATMENT",
            codes: ['105582', '105583', '105307', '105306', '105495', '100545', '101390', '105533', '105534', '105532', '105376', '105594', '105593'],
            maxDailyDose: "Topical application as directed - no systemic limit",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe topical use" }
        },

        // ======= SECNIDAZOLE - مجموعة أكواد =======  
        {
            name: "SECNIDAZOLE",
            codes: ['102709', '102015'],
            maxDailyDose: "2000 mg/day PO max single dose",
            liver: { safe: false, emoji: "⚠", firstChoice: "Use caution - hepatic metabolism" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SECUKINUMAB - مجموعة أكواد =======  
        {
            name: "SECUKINUMAB",
            codes: ['103531'],
            maxDailyDose: "300 mg SC monthly max maintenance",
            liver: { safe: true, emoji: "✅", firstChoice: "No hepatic dose adjustment" },
            kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SELENIUM SUPPLEMENTS - مجموعة أكواد =======  
        {
            name: "SELENIUM SUPPLEMENTS",
            codes: ['107345', '102654', '107284', '103166', '102593', '508713', '102353'],
            maxDailyDose: "400 mcg/day max (200mcg recommended)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe supplement" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Antioxidant benefit for heart" },
            dm: { safe: true, emoji: "✅", firstChoice: "May improve insulin sensitivity" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SEMAGLUTIDE - مجموعة أكواد =======  
        {
            name: "SEMAGLUTIDE",
            codes: ['106862', '106859', '106860', '106861', '106856', '106857', '106858', '106093', '106094', '106095', '106090', '106091', '106092', '103749', '103750', '103751', '105523', '105524', '105525', '107386', '107387', '107388', '107389', '107390'],
            maxDailyDose: "2.4 mg SC weekly max (14mg PO daily max)",
            liver: { safe: true, emoji: "✅", firstChoice: "No hepatic dose adjustment needed" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Renal protective - no dose adjustment" },
            heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective GLP-1 agonist" },
            dm: { safe: true, emoji: "✅", firstChoice: "First-line for T2DM + obesity" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "May reduce BP - beneficial" }
        },

        // ======= SEROTONIN INHIBITORS - مجموعة أكواد =======  
        {
            name: "SEROTONIN INHIBITORS",
            codes: ['101457', '101458'],
            maxDailyDose: "Variable based on specific agent",
            liver: { safe: false, emoji: "⚠", firstChoice: "Monitor liver function" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Generally safe for CKD" },
            heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for cardiac effects" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SERTACONAZOLE - مجموعة أكواد =======  
        {
            name: "SERTACONAZOLE",
            codes: ['100629'],
            maxDailyDose: "Apply BID topically - no systemic limit",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe topical antifungal" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe topical use" }
        },

        // ======= SERTRALINE - مجموعة أكواد =======  
        {
            name: "SERTRALINE",
            codes: ['101351', '101928', '101929', '103703', '102038', '105846', '105845'],
            maxDailyDose: "200 mg/day PO max",
            liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in hepatic impairment" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD - no dose adjustment" },
            heart: { safe: false, emoji: "⚠", firstChoice: "Monitor QT interval - drug interactions" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SEVELAMER - مجموعة أكواد =======  
        {
            name: "SEVELAMER",
            codes: ['107290', '105624', '103735', '103301'],
            maxDailyDose: "14.4 g/day PO max with meals",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe - not absorbed systemically" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Indicated for CKD hyperphosphatemia" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SILDENAFIL - مجموعة أكواد =======  
        {
            name: "SILDENAFIL",
            codes: ['102810', '102764', '102743', '102904', '102903', '102799', '106564', '103196', '103195', '105818', '105819', '107255', '102938', '102307', '102308', '103745', '103432'],
            maxDailyDose: "100 mg/day PO max (25mg if hepatic/renal impairment)",
            liver: { safe: false, emoji: "⚠", firstChoice: "Start 25mg in hepatic impairment" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Start 25mg if CrCl <30 mL/min" },
            heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated with nitrates - hypotension risk" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP - additive hypotensive effect" }
        },

        // ======= SIMETHICONE - مجموعة أكواد =======  
        {
            name: "SIMETHICONE",
            codes: ['105703', '100685', '100686', '105798', '508623', '100606', '105874', '100618', '100886', '100887', '100888', '101991', '101992'],
            maxDailyDose: "500 mg/day PO max (no systemic absorption)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe - not absorbed" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe - not absorbed" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe - not absorbed" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe - not absorbed" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - not absorbed" }
        },

        // ======= SIMVASTATIN - مجموعة أكواد =======  
        {
            name: "SIMVASTATIN",
            codes: ['102053', '102054', '102055', '102056', '102057', '102058', '102059', '102060', '102061', '102062', '102063', '102064', '102065', '102066', '102067', '102068', '102069', '102284', '102285', '103681', '102425', '102426', '102427', '101130', '101131', '106298', '106299', '106463', '106464', '106465', '106462'],
            maxDailyDose: "40 mg/day PO max (80mg restricted use)",
            liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in active liver disease" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Start 5mg in severe CKD" },
            heart: { safe: true, emoji: "✅", firstChoice: "First-line for CAD prevention" },
            dm: { safe: false, emoji: "⚠", firstChoice: "May increase glucose - monitor HbA1c" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SIROLIMUS - مجموعة أكواد =======  
        {
            name: "SIROLIMUS",
            codes: ['105677'],
            maxDailyDose: "Variable based on therapeutic levels",
            liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in hepatic impairment" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Used post kidney transplant" },
            heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for cardiac effects" },
            dm: { safe: false, emoji: "⚠", firstChoice: "May worsen glucose tolerance" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SITAGLIPTIN - مجموعة أكواد =======  
        {
            name: "SITAGLIPTIN",
            codes: ['102586', '101158', '107286', '107291', '107292', '102588', '102587', '101156', '101157', '105710', '105711', '105709'],
            maxDailyDose: "100 mg/day PO max (50mg if CrCl 30-50)",
            liver: { safe: true, emoji: "✅", firstChoice: "No hepatic dose adjustment" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose based on CrCl" },
            heart: { safe: true, emoji: "✅", firstChoice: "Cardiovascular neutral" },
            dm: { safe: true, emoji: "✅", firstChoice: "Indicated for T2DM management" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SODIUM CHLORIDE - مجموعة أكواد =======  
        {
            name: "SODIUM CHLORIDE",
            codes: ['100155', '103812', '101494', '101560', '511347', '102990', '100156', '100197', '103458', '103457', '103135', '103456', '101492', '101495', '101545', '106499', '106498', '105340', '105341', '101593', '103264', '101670', '103245', '105349', '105350', '101953', '508165', '508166', '508167', '508163', '508164', '105505', '105219', '107405', '107404', '102818', '102076', '102077', '102078', '102080', '102081', '103182', '103183', '103184', '102500', '102501', '102454', '103578', '103910', '105282', '105283', '101559', '105454', '103742'],
            maxDailyDose: "No limit - physiological saline solution",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe physiological solution" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SODIUM CROMOGLICATE - مجموعة أكواد =======  
        {
            name: "SODIUM CROMOGLICATE",
            codes: ['100145', '102331'],
            maxDailyDose: "Apply QID to eyes - no systemic absorption",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe topical use" }
        },

        // ======= SODIUM HYALURONATE - مجموعة أكواد =======  
        {
            name: "SODIUM HYALURONATE",
            codes: ['100204', '106567', '106568', '100243', '105152', '105153', '102877', '101102', '105103', '101103', '106544', '107441', '102879', '103852', '107628', '102832', '102833', '106916', '106917', '106545', '107442', '107627', '102834', '103561', '103619', '101097', '102477', '102478', '102476', '103538', '103350', '103351'],
            maxDailyDose: "Variable based on formulation and indication",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SODIUM PICOSULFATE - مجموعة أكواد =======  
        {
            name: "SODIUM PICOSULFATE",
            codes: ['101741', '103841'],
            maxDailyDose: "10 mg/day PO max laxative dose",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SODIUM STIBOGLUCONATE - مجموعة أكواد =======  
        {
            name: "SODIUM STIBOGLUCONATE",
            codes: ['102933'],
            maxDailyDose: "20 mg/kg/day IV max (850mg max)",
            liver: { safe: false, emoji: "❌", firstChoice: "Monitor liver enzymes closely" },
            kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe CKD" },
            heart: { safe: false, emoji: "❌", firstChoice: "Monitor ECG - cardiotoxic" },
            dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose closely" },
            hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP during treatment" }
        },

        // ======= SOFOSBUVIR - مجموعة أكواد =======  
        {
            name: "SOFOSBUVIR",
            codes: ['103113', '103383', '103000', '106158', '103567'],
            maxDailyDose: "400 mg/day PO max",
            liver: { safe: true, emoji: "✅", firstChoice: "Indicated for hepatitis C treatment" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Avoid if CrCl <30 mL/min" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SOLIFENACIN SUCCINATE - مجموعة أكواد =======  
        {
            name: "SOLIFENACIN SUCCINATE",
            codes: ['105461', '105462', '105407', '105418', '105578', '105579', '105580', '105663', '105648', '102679', '102678', '102301', '102302'],
            maxDailyDose: "10 mg/day PO max (5mg if hepatic/renal impairment)",
            liver: { safe: false, emoji: "⚠", firstChoice: "Max 5mg in moderate hepatic impairment" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Max 5mg if CrCl <30 mL/min" },
            heart: { safe: false, emoji: "⚠", firstChoice: "Monitor QT interval" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SOMATROPIN - مجموعة أكواد =======  
        {
            name: "SOMATROPIN",
            codes: ['106224', '105779', '107333', '106109', '106110', '106111', '107535', '107536', '107534', '101558', '106108', '107267', '107268'],
            maxDailyDose: "Variable based on indication and weight",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "⚠", firstChoice: "Monitor cardiac function" },
            dm: { safe: false, emoji: "⚠", firstChoice: "May worsen glucose tolerance" },
            hypertension: { safe: false, emoji: "⚠", firstChoice: "May increase BP - monitor" }
        },

        // ======= SORAFENIB - مجموعة أكواد =======  
        {
            name: "SORAFENIB",
            codes: ['103355', '106081'],
            maxDailyDose: "800 mg/day PO max (400mg BID)",
            liver: { safe: false, emoji: "❌", firstChoice: "Monitor liver function - hepatotoxicity risk" },
            kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment" },
            heart: { safe: false, emoji: "⚠", firstChoice: "Monitor for cardiac ischemia" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "❌", firstChoice: "High HTN risk - monitor BP closely" }
        },

        // ======= SPIRONOLACTONE - مجموعة أكواد =======  
        {
            name: "SPIRONOLACTONE",
            codes: ['100058', '100059', '103675'],
            maxDailyDose: "400 mg/day PO max",
            liver: { safe: false, emoji: "⚠", firstChoice: "Monitor in cirrhosis - risk of hepatic encephalopathy" },
            kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <30 - hyperkalemia risk" },
            heart: { safe: true, emoji: "✅", firstChoice: "Beneficial in heart failure" },
            dm: { safe: false, emoji: "⚠", firstChoice: "Monitor potassium closely" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Effective antihypertensive" }
        },

        // ======= SULFAMETHOXAZOLE,TRIMETHOPRIM - مجموعة أكواد =======  
        {
            name: "SULFAMETHOXAZOLE,TRIMETHOPRIM",
            codes: ['100260', '100261', '106014', '102242', '102023', '100259', '102025', '102241', '105671', '105801'],
            maxDailyDose: "1600mg SMX + 320mg TMP daily max",
            liver: { safe: false, emoji: "⚠", firstChoice: "Monitor liver function" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose if CrCl <30" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: false, emoji: "⚠", firstChoice: "May cause hypoglycemia" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },
// ======= METOLAZONE =======
{
    name: "METOLAZONE",
    codes: ['105970'],
    maxDailyDose: "20 mg/day PO max (hypertension), 10 mg/day (edema)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients - minimal hepatic metabolism" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <30 mL/min - use furosemide" },
    heart: { safe: true, emoji: "✅", firstChoice: "Excellent for heart failure - synergy with loop diuretics" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor glucose - may worsen diabetes control" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "First-line thiazide-like diuretic for HTN" }
},

// ======= LITHIUM CARBONATE =======
{
    name: "LITHIUM CARBONATE",
    codes: ['106139'],
    maxDailyDose: "1800 mg/day PO max (acute mania), 900-1200 mg/day (maintenance)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe - not metabolized by liver" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <50 mL/min - use valproate" },
    heart: { safe: false, emoji: "⚠️", firstChoice: "Monitor ECG - T-wave changes and arrhythmias possible" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "May affect glucose tolerance - monitor closely" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effect - safe combination" }
},

        // ======= SUMATRIPTAN - مجموعة أكواد =======  
        {
            name: "SUMATRIPTAN",
            codes: ['101119', '101120', '101121', '101122', '103676', '105426', '105427', '105428', '105429', '103304', '101123'],
            maxDailyDose: "200 mg/day PO max (12mg/day SC max)",
            liver: { safe: false, emoji: "⚠", firstChoice: "Reduce dose in hepatic impairment" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in CAD - coronary vasospasm risk" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated in uncontrolled HTN" }
        },

        // ======= SUNITINIB - مجموعة أكواد =======  
        {
            name: "SUNITINIB",
            codes: ['103754', '103755', '103310'],
            maxDailyDose: "50 mg/day PO max",
            liver: { safe: false, emoji: "❌", firstChoice: "Monitor liver function - hepatotoxicity risk" },
            kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment" },
            heart: { safe: false, emoji: "❌", firstChoice: "High cardiotoxicity risk - monitor EF" },
            dm: { safe: false, emoji: "⚠", firstChoice: "May cause hyperglycemia" },
            hypertension: { safe: false, emoji: "❌", firstChoice: "High HTN risk - monitor BP" }
        },

        // ======= TACROLIMUS - مجموعة أكواد =======  
        {
            name: "TACROLIMUS",
            codes: ['106060', '101805', '101806', '106096', '105847', '106020', '105549', '105550', '103232', '103231', '103763', '103823', '103880', '106079', '106078', '106080', '102926'],
            maxDailyDose: "Variable based on therapeutic levels",
            liver: { safe: false, emoji: "⚠", firstChoice: "Monitor levels - hepatic metabolism" },
            kidney: { safe: false, emoji: "❌", firstChoice: "Nephrotoxic - monitor CrCl closely" },
            heart: { safe: false, emoji: "⚠", firstChoice: "May cause cardiomyopathy" },
            dm: { safe: false, emoji: "❌", firstChoice: "Diabetogenic - monitor glucose" },
            hypertension: { safe: false, emoji: "⚠", firstChoice: "May increase BP" }
        },
        // ======= SILYMARINE - مجموعة أكواد =======  
        {
            name: "SILYMARINE",
            codes: ['103576', '106376', '105467', '102455', '101068', '101253', '102765', '105455', '102325'],
            maxDailyDose: "420 mg/day PO max divided doses",
            liver: { safe: true, emoji: "✅", firstChoice: "Hepatoprotective - first-line for liver disease" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SULPIRIDE - مجموعة أكواد =======  
        {
            name: "SULPIRIDE",
            codes: ['100692', '100978', '100691', '100977'],
            maxDailyDose: "1200 mg/day PO max (2400mg/day for severe cases)",
            liver: { safe: false, emoji: "⚠", firstChoice: "Monitor liver function closely" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose based on CrCl" },
            heart: { safe: false, emoji: "⚠", firstChoice: "Monitor QT interval - arrhythmia risk" },
            dm: { safe: false, emoji: "⚠", firstChoice: "May increase prolactin - monitor glucose" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SULFASALAZINE - مجموعة أكواد =======  
        {
            name: "SULFASALAZINE",
            codes: ['103550'],
            maxDailyDose: "4000 mg/day PO max divided doses",
            liver: { safe: false, emoji: "⚠", firstChoice: "Monitor liver enzymes - hepatotoxicity risk" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor renal function closely" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SUCRALFATE - مجموعة أكواد =======  
        {
            name: "SUCRALFATE",
            codes: ['100969'],
            maxDailyDose: "4000 mg/day PO max (1g QID)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Use caution - aluminum accumulation risk" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SULFACETAMIDE - مجموعة أكواد =======  
        {
            name: "SULFACETAMIDE",
            codes: ['100157'],
            maxDailyDose: "Apply to eyes QID - no systemic absorption",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe topical antibiotic" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe topical use" }
        },

        // ======= SULPHADIAZINE - مجموعة أكواد =======  
        {
            name: "SULPHADIAZINE",
            codes: ['100881'],
            maxDailyDose: "Apply topically BID - minimal systemic absorption",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe topical antimicrobial" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe topical use" }
        },

        // ======= STRONTIUM RANELATE - مجموعة أكواد =======  
        {
            name: "STRONTIUM RANELATE",
            codes: ['101798'],
            maxDailyDose: "2000 mg/day PO max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in CAD/CVD - MI risk" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated in uncontrolled HTN" }
        },

        // ======= ST.JOHN'S WORT PRODUCTS - مجموعة أكواد =======  
        {
            name: "ST.JOHN'S WORT PRODUCTS",
            codes: ['100200', '105230'],
            maxDailyDose: "1800 mg/day PO max divided doses",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe herbal supplement" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "⚠", firstChoice: "Drug interactions with cardiac medications" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "⚠", firstChoice: "Drug interactions with BP medications" }
        },

        // ======= SKIN-MED-EMOLLIENT - مجموعة أكواد =======  
        {
            name: "SKIN-MED-EMOLLIENT",
            codes: ['102808', '100373', '100374', '101099', '101100', '101101', '101181', '101182', '101290', '101453', '101454', '101455', '101589', '101590', '102909', '102759', '101829', '101830', '102762', '101831', '101836', '101837', '101840', '101841', '102760', '102761', '101842', '101864', '102009', '102123', '102124', '102125', '102126', '102470', '102127', '102128', '102130', '102146', '102147'],
            maxDailyDose: "Apply as needed topically - no systemic limit",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe topical moisturizers" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Beneficial for diabetic skin care" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe topical use" }
        },

        // ======= SKIN COLLAGEN - مجموعة أكواد =======  
        {
            name: "SKIN COLLAGEN",
            codes: ['107484', '107520', '107219', '103500', '103068', '107203', '107202', '107459', '107236', '103102', '508506', '507367', '105401', '107422', '107099', '508520', '508519', '107603', '107111', '107112', '107113'],
            maxDailyDose: "10000 mg/day PO max collagen peptides",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe supplement" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SHOWER GEL-BEAUTY - مجموعة أكواد =======  
        {
            name: "SHOWER GEL-BEAUTY",
            codes: ['102496'],
            maxDailyDose: "External use only - no systemic absorption",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe cosmetic product" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe external use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe external use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe external use" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe external use" }
        },

        // ======= SORE THROAT TABLET - مجموعة أكواد =======  
        {
            name: "SORE THROAT TABLET",
            codes: ['101648'],
            maxDailyDose: "Variable based on active ingredients",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe lozenges" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Check sugar content in diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SOYBEAN (PHYTOESTROGENS) - مجموعة أكواد =======  
        {
            name: "SOYBEAN (PHYTOESTROGENS)",
            codes: ['100198', '102695'],
            maxDailyDose: "100 mg isoflavones/day max",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe supplement" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "May have cardioprotective effects" },
            dm: { safe: true, emoji: "✅", firstChoice: "May improve insulin sensitivity" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP" }
        },

        // ======= SPERM COUNT & MOTILITY ENHANCE - مجموعة أكواد =======  
        {
            name: "SPERM COUNT & MOTILITY ENHANCE",
            codes: ['107489', '105402', '106327', '107546', '102794', '106427', '106412', '106423', '106428', '106416', '106409', '107541', '107544', '106452', '106143', '102950', '105285', '107098', '102896', '102616', '102631', '106486'],
            maxDailyDose: "Variable based on formulation and ingredients",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe supplements" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SUN BLOCK - مجموعة أكواد =======  
        {
            name: "SUN BLOCK",
            codes: ['102956', '102577', '102145', '102259', '102260', '102261', '102958', '102959', '102955', '102953', '102954', '103078', '102957'],
            maxDailyDose: "Apply liberally every 2 hours - topical use only",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe topical protection" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Essential for diabetic skin protection" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe topical use" }
        },

        // ======= SNACKS & DRINKS - مجموعة أكواد =======  
        {
            name: "SNACKS & DRINKS",
            codes: ['105491'],
            maxDailyDose: "As per nutritional requirements",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe food products" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Monitor electrolytes in CKD" },
            heart: { safe: true, emoji: "✅", firstChoice: "Check sodium content" },
            dm: { safe: false, emoji: "⚠", firstChoice: "Monitor carbohydrate content" },
            hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor sodium content" }
        },
        // ======= SILYMARINE - مجموعة أكواد =======  
        {
            name: "SILYMARINE",
            codes: ['103576', '106376', '105467', '102455', '101068', '101253', '102765', '105455', '102325'],
            maxDailyDose: "420 mg/day PO max divided doses",
            liver: { safe: true, emoji: "✅", firstChoice: "Hepatoprotective - first-line for liver disease" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SULPIRIDE - مجموعة أكواد =======  
        {
            name: "SULPIRIDE",
            codes: ['100692', '100978', '100691', '100977'],
            maxDailyDose: "1200 mg/day PO max (2400mg/day for severe cases)",
            liver: { safe: false, emoji: "⚠", firstChoice: "Monitor liver function closely" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose based on CrCl" },
            heart: { safe: false, emoji: "⚠", firstChoice: "Monitor QT interval - arrhythmia risk" },
            dm: { safe: false, emoji: "⚠", firstChoice: "May increase prolactin - monitor glucose" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SULFASALAZINE - مجموعة أكواد =======  
        {
            name: "SULFASALAZINE",
            codes: ['103550'],
            maxDailyDose: "4000 mg/day PO max divided doses",
            liver: { safe: false, emoji: "⚠", firstChoice: "Monitor liver enzymes - hepatotoxicity risk" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Monitor renal function closely" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SUCRALFATE - مجموعة أكواد =======  
        {
            name: "SUCRALFATE",
            codes: ['100969'],
            maxDailyDose: "4000 mg/day PO max (1g QID)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe - minimal systemic absorption" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Use caution - aluminum accumulation risk" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SULFACETAMIDE - مجموعة أكواد =======  
        {
            name: "SULFACETAMIDE",
            codes: ['100157'],
            maxDailyDose: "Apply to eyes QID - no systemic absorption",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe topical antibiotic" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe topical use" }
        },

        // ======= SULPHADIAZINE - مجموعة أكواد =======  
        {
            name: "SULPHADIAZINE",
            codes: ['100881'],
            maxDailyDose: "Apply topically BID - minimal systemic absorption",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe topical antimicrobial" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe topical use" }
        },

        // ======= STRONTIUM RANELATE - مجموعة أكواد =======  
        {
            name: "STRONTIUM RANELATE",
            codes: ['101798'],
            maxDailyDose: "2000 mg/day PO max",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe for liver patients" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated in CAD/CVD - MI risk" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated in uncontrolled HTN" }
        },

        // ======= ST.JOHN'S WORT PRODUCTS - مجموعة أكواد =======  
        {
            name: "ST.JOHN'S WORT PRODUCTS",
            codes: ['100200', '105230'],
            maxDailyDose: "1800 mg/day PO max divided doses",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe herbal supplement" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: false, emoji: "⚠", firstChoice: "Drug interactions with cardiac medications" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "⚠", firstChoice: "Drug interactions with BP medications" }
        },

        // ======= SKIN-MED-EMOLLIENT - مجموعة أكواد =======  
        {
            name: "SKIN-MED-EMOLLIENT",
            codes: ['102808', '100373', '100374', '101099', '101100', '101101', '101181', '101182', '101290', '101453', '101454', '101455', '101589', '101590', '102909', '102759', '101829', '101830', '102762', '101831', '101836', '101837', '101840', '101841', '102760', '102761', '101842', '101864', '102009', '102123', '102124', '102125', '102126', '102470', '102127', '102128', '102130', '102146', '102147'],
            maxDailyDose: "Apply as needed topically - no systemic limit",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe topical moisturizers" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Beneficial for diabetic skin care" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe topical use" }
        },

        // ======= SKIN COLLAGEN - مجموعة أكواد =======  
        {
            name: "SKIN COLLAGEN",
            codes: ['107484', '107520', '107219', '103500', '103068', '107203', '107202', '107459', '107236', '103102', '508506', '507367', '105401', '107422', '107099', '508520', '508519', '107603', '107111', '107112', '107113'],
            maxDailyDose: "10000 mg/day PO max collagen peptides",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe supplement" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SHOWER GEL-BEAUTY - مجموعة أكواد =======  
        {
            name: "SHOWER GEL-BEAUTY",
            codes: ['102496'],
            maxDailyDose: "External use only - no systemic absorption",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe cosmetic product" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe external use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe external use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe external use" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe external use" }
        },

        // ======= SORE THROAT TABLET - مجموعة أكواد =======  
        {
            name: "SORE THROAT TABLET",
            codes: ['101648'],
            maxDailyDose: "Variable based on active ingredients",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe lozenges" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Check sugar content in diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SOYBEAN (PHYTOESTROGENS) - مجموعة أكواد =======  
        {
            name: "SOYBEAN (PHYTOESTROGENS)",
            codes: ['100198', '102695'],
            maxDailyDose: "100 mg isoflavones/day max",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe supplement" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "May have cardioprotective effects" },
            dm: { safe: true, emoji: "✅", firstChoice: "May improve insulin sensitivity" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP" }
        },

        // ======= SPERM COUNT & MOTILITY ENHANCE - مجموعة أكواد =======  
        {
            name: "SPERM COUNT & MOTILITY ENHANCE",
            codes: ['107489', '105402', '106327', '107546', '102794', '106427', '106412', '106423', '106428', '106416', '106409', '107541', '107544', '106452', '106143', '102950', '105285', '107098', '102896', '102616', '102631', '106486'],
            maxDailyDose: "Variable based on formulation and ingredients",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe supplements" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SUN BLOCK - مجموعة أكواد =======  
        {
            name: "SUN BLOCK",
            codes: ['102956', '102577', '102145', '102259', '102260', '102261', '102958', '102959', '102955', '102953', '102954', '103078', '102957'],
            maxDailyDose: "Apply liberally every 2 hours - topical use only",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe topical protection" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            dm: { safe: true, emoji: "✅", firstChoice: "Essential for diabetic skin protection" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe topical use" }
        },

        // ======= SNACKS & DRINKS - مجموعة أكواد =======  
        {
            name: "SNACKS & DRINKS",
            codes: ['105491'],
            maxDailyDose: "As per nutritional requirements",
            liver: { safe: true, emoji: "✅", firstChoice: "Generally safe food products" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Monitor electrolytes in CKD" },
            heart: { safe: true, emoji: "✅", firstChoice: "Check sodium content" },
            dm: { safe: false, emoji: "⚠", firstChoice: "Monitor carbohydrate content" },
            hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor sodium content" }
        },

        // ======= SOLVENT WATER - مجموعة أكواد =======  
        {
            name: "SOLVENT WATER",
            codes: ['105647', '102475', '102356'],
            maxDailyDose: "As needed for pharmaceutical preparation",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe pharmaceutical excipient" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SOLVENT WATER - مجموعة أكواد =======  
        {
            name: "SOLVENT WATER",
            codes: ['105647', '102475', '102356'],
            maxDailyDose: "As needed for pharmaceutical preparation",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe pharmaceutical excipient" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },
        // ======= SILICONE DIOXIDE,DIMETHYLPOLYS - مجموعة أكواد =======  
        {
            name: "SILICONE DIOXIDE,DIMETHYLPOLYS",
            codes: ['105703', '100685', '100686', '105798', '508623'],
            maxDailyDose: "500 mg/day PO max (similar to simethicone - no systemic absorption)",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe - not absorbed systemically" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe - not absorbed systemically" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe - not absorbed systemically" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe - not absorbed systemically" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - not absorbed systemically" }
        },

        // ======= SILICONE OIL - مجموعة أكواد =======  
        {
            name: "SILICONE OIL",
            codes: ['102910', '105284'],
            maxDailyDose: "Apply topically as needed - no systemic absorption limit",
            liver: { safe: true, emoji: "✅", firstChoice: "Safe topical use - minimal absorption" },
            kidney: { safe: true, emoji: "✅", firstChoice: "Safe topical use - minimal absorption" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe topical use - minimal absorption" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe topical use" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe topical use" }
        },

        // ======= GLECAPREVIR,PIBRENTASVIR - مجموعة أكواد =======  
        {
            name: "GLECAPREVIR,PIBRENTASVIR",
            codes: ['103576'],
            maxDailyDose: "300mg glecaprevir + 120mg pibrentasvir daily (3 tablets)",
            liver: { safe: false, emoji: "❌", firstChoice: "Contraindicated in moderate-severe hepatic impairment" },
            kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment needed for CKD" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= SULFAMETHOXAZOLE - مجموعة أكواد =======  
        {
            name: "SULFAMETHOXAZOLE",
            codes: ['102023'],
            maxDailyDose: "6000 mg/day PO max (as monotherapy)",
            liver: { safe: false, emoji: "⚠", firstChoice: "Monitor liver function - hepatotoxicity risk" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Reduce dose if CrCl <50 mL/min" },
            heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
            dm: { safe: false, emoji: "⚠", firstChoice: "May cause hypoglycemia - monitor glucose" },
            hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for HTN patients" }
        },

        // ======= TADALAFIL - مجموعة أكواد =======  
        {
            name: "TADALAFIL",
            codes: ['105557', '103811', '100450', '102607', '105487', '106005', '106160', '106159', '103133', '103132', '105075', '103134', '105451', '105149', '105148', '105147', '105214', '105215', '107377', '105479', '102088', '103211', '103641', '106504', '106503', '105737', '105759', '105748', '105211', '105237', '103504', '103325', '103673', '103672'],
            maxDailyDose: "20 mg/day PO max ED (40mg/day PAH)",
            liver: { safe: false, emoji: "⚠", firstChoice: "Max 10mg in hepatic impairment" },
            kidney: { safe: false, emoji: "⚠", firstChoice: "Max 10mg if CrCl <30 mL/min" },
            heart: { safe: false, emoji: "❌", firstChoice: "Contraindicated with nitrates - severe hypotension" },
            dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
            hypertension: { safe: false, emoji: "⚠", firstChoice: "Monitor BP - additive hypotensive effect" }
        },

// ======= ROSEMARY OIL + FENNEL OIL - مجموعة أكواد =======  
{
    name: "ROSEMARY OIL + FENNEL OIL",
    codes: ['508727', '508726', '507833'],
    maxDailyDose: "600 mg/day PO (combination herbal supplement)",
    liver: { safe: true, emoji: "✅", firstChoice: "Natural herbs - generally safe" },
    kidney: { safe: true, emoji: "✅", firstChoice: "May support kidney function" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Natural supplements - safe" }
},

// ======= RIMEXOLONE - مجموعة أكواد =======  
{
    name: "RIMEXOLONE",
    codes: ['102305'],
    maxDailyDose: "4 drops/day ophthalmic (1 drop QID)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe in renal impairment" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: false, emoji: "⚠️", firstChoice: "Monitor IOP - may increase intraocular pressure" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant systemic effects" }
},

// ======= REGORAFENIB - مجموعة أكواد =======  
{
    name: "REGORAFENIB",
    codes: ['103396'],
    maxDailyDose: "160 mg/day PO (3 weeks on, 1 week off)",
    liver: { safe: false, emoji: "❌", firstChoice: "Severe hepatotoxicity risk - monitor closely" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No renal dose adjustment needed" },
    heart: { safe: false, emoji: "❌", firstChoice: "High cardiotoxicity risk - monitor LVEF" },
    dm: { safe: true, emoji: "✅", firstChoice: "No significant glycemic effects" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "High HTN risk - aggressive management needed" }
},

// ======= RUXOLITINIB - مجموعة أكواد =======  
{
    name: "RUXOLITINIB",
    codes: ['106088', '106571', '103648', '103649', '103534'],
    maxDailyDose: "50 mg/day PO (25 mg BID max)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose in hepatic impairment" },
    kidney: { safe: false, emoji: "⚠️", firstChoice: "Reduce dose if CrCl 15-59 mL/min" },
    heart: { safe: true, emoji: "✅", firstChoice: "Monitor for cardiac events" },
    dm: { safe: true, emoji: "✅", firstChoice: "No direct glycemic effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

// ======= RIVAROXABAN - مجموعة أكواد =======  
{
    name: "RIVAROXABAN",
    codes: ['105411', '105412', '105406', '105413', '106506', '106505', '106126', '106127', '106128', '106129', '106130', '107557', '107556', '103801', '103802', '103803', '102783', '102784', '103793', '102785'],
    maxDailyDose: "20 mg/day PO with food (15 mg BID for VTE treatment)",
    liver: { safe: false, emoji: "⚠️", firstChoice: "Apixaban (safer in mild hepatic impairment)" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Contraindicated if CrCl <30 mL/min - use Apixaban" },
    heart: { safe: true, emoji: "✅", firstChoice: "Preferred DOAC for AF with heart disease" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glycemic interactions" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No significant BP effects" }
},

  // ===== ANTAZOLINE + NAPHAZOLINE =====
  {
    name: "ANTAZOLINE, NAPHAZOLINE",
    codes: ["103594", "101566"],
    maxDailyDose: "8 drops/day (1–2 drops each eye up to QID)",
    liver: { safe: true, emoji: "✅", firstChoice: "Minimal systemic absorption" },
    kidney: { safe: true, emoji: "✅", firstChoice: "No dose adjustment" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Tachycardia risk—monitor" },
    dm: { safe: true, emoji: "✅", firstChoice: "No effect" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "May raise BP—monitor" }
  },

  // ===== ANTHRAQUINONE GLYCOSIDES + SALICYLIC ACID =====
  {
    name: "ANTHRAQUINONE GLYCOSIDES, SALICYLIC ACID",
    codes: ["101824"],
    maxDailyDose: "4 applications/day topical oral paint",
    liver: { safe: true, emoji: "✅", firstChoice: "Negligible systemic exposure" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe" }
  },

// ======= VITAMIN B3 (NIACIN) - مجموعة أكواد =======  
{
    name: "VITAMIN B3 (NIACIN)",
    codes: ['103444'],
    maxDailyDose: "35 mg/day max (UL limit) - therapeutic doses up to 500mg under supervision",
    liver: { safe: false, emoji: "❌", firstChoice: "Nicotinamide safer - avoid if liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Monitor BP - can cause hypotension" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Monitor glucose - may worsen insulin resistance" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Can cause dangerous hypotension with antihypertensives" }
},

// ======= VITAMIN B6 (PYRIDOXINE) - مجموعة أكواد =======  
{
    name: "VITAMIN B6 (PYRIDOXINE)",
    codes: ['101825'],
    maxDailyDose: "100 mg/day max (UL limit) - neuropathy risk above 1000mg",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe - metabolized normally" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD - may need monitoring at high doses" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective - reduces homocysteine" },
    dm: { safe: true, emoji: "✅", firstChoice: "May improve glucose tolerance" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - no direct BP effects" }
},

// ======= CYANOCOBALAMIN - مجموعة أكواد =======  
{
    name: "CYANOCOBALAMIN",
    codes: ['107339', '103010', '100526', '100625', '106334', '106352', '101529', '106910', '508730'],
    maxDailyDose: "1000 mcg/day max (contains cyanide - avoid high doses)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe - no hepatotoxicity reported" },
    kidney: { safe: false, emoji: "❌", firstChoice: "Methylcobalamin safer - cyanide accumulation risk" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective - reduces homocysteine" },
    dm: { safe: true, emoji: "✅", firstChoice: "Beneficial - prevents diabetic neuropathy" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe - may improve endothelial function" }
},

// ======= METHYLCOBALAMIN - مجموعة أكواد =======  
{
    name: "METHYLCOBALAMIN",
    codes: ['101422', '101421', '107429'],
    maxDailyDose: "2000 mcg/day (no upper limit - natural form)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safer than cyanocobalamin - no cyanide" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Preferred in CKD - no cyanide accumulation" },
    heart: { safe: true, emoji: "✅", firstChoice: "Superior cardioprotective effects" },
    dm: { safe: true, emoji: "✅", firstChoice: "Better for diabetic neuropathy than cyanocobalamin" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Excellent endothelial protection" }
},
// ======= AMBROXOL - مجموعة أكواد =======
{
    name: "AMBROXOL",
    codes: ['100077', '101474', '105318', '101902', '101475', '105704', '101476', '101903'],
    maxDailyDose: "75 mg daily (30mg BID or 75mg sustained release daily)",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe for hepatic patients" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for renal patients" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "No glucose effects" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "No BP effects" }
},
{
    name: "CHLORZOXAZONE + PARACETAMOL",
    codes: ['105794', '101871', '101714', '101711'],
    maxDailyDose: "Chlorzoxazone 3000 mg/day max (750mg QID) + Paracetamol 4000 mg/day max (1000mg QID)",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid - Both hepatotoxic. Use Methocarbamol + Paracetamol instead" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe - No renal dose adjustment needed" },
    heart: { safe: true, emoji: "⚠", firstChoice: "Caution - May enhance CNS depression with cardiac meds" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

{
    name: "PARACETAMOL + CAFFEINE",
    codes: ['101690', '100866', '106039'],
    maxDailyDose: "Paracetamol 4000 mg/day + Caffeine 520 mg/day max (8 tablets max)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Caution - Reduce paracetamol to 2000mg/day with liver disease" },
    kidney: { safe: true, emoji: "✅", firstChoice: "Safe for CKD patients" },
    heart: { safe: false, emoji: "⚠", firstChoice: "Caution - Caffeine may increase HR and BP slightly" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
    hypertension: { safe: false, emoji: "⚠", firstChoice: "Caution - Caffeine may counter antihypertensive effects" }
},

{
    name: "PARACETAMOL + CAFFEINE + CODEINE",
    codes: ['102094'],
    maxDailyDose: "Paracetamol 4000 mg/day + Caffeine 520 mg/day + Codeine 240 mg/day max",
    liver: { safe: false, emoji: "❌", firstChoice: "Avoid in severe liver disease - use paracetamol alone" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Caution - Codeine metabolites accumulate in CKD" },
    heart: { safe: true, emoji: "✅", firstChoice: "Safe for cardiac patients" },
    dm: { safe: true, emoji: "✅", firstChoice: "Safe for diabetics" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "Safe for hypertensive patients" }
},

{
    name: "PARACETAMOL + CHLORPHENIRAMINE + PHENYLEPHRINE + CAFFEINE",
    codes: ['100907'],
    maxDailyDose: "Paracetamol 4000 mg/day + Chlorpheniramine 24 mg/day + Phenylephrine 60 mg/day + Caffeine 520 mg/day max",
    liver: { safe: false, emoji: "⚠", firstChoice: "Caution - Reduce paracetamol dose with liver disease" },
    kidney: { safe: false, emoji: "⚠", firstChoice: "Caution - Avoid phenylephrine with severe CKD" },
    heart: { safe: false, emoji: "❌", firstChoice: "Avoid - Phenylephrine raises BP (up to 20 mmHg increase)" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Caution - Phenylephrine may affect blood glucose" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated in severe HTN - phenylephrine raises BP significantly" }
},{
    name: "VITAMIN B COMPLEX",
    codes: ['106435', '100001','100000', '106435', '107347', '102498', '107592', '107412', '107414', '102449', '103655', '101524', '103601', '101525', '101528', '103502', '101530', '106908', '508718', '102039', '102234', '105499', '102329', '103689', '107516'],
    maxDailyDose: "B1: No upper limit (safe) | B6: 100 mg/day max (toxicity >200mg) | B12: No upper limit (safe up to 2000 mcg) | B3: 35 mg/day max",
    liver: { safe: true, emoji: "✅", firstChoice: "Safe - No hepatotoxicity at therapeutic doses" },
    kidney: { safe: true, emoji: "⚠", firstChoice: "Safe but caution with CKD - avoid high doses" },
    heart: { safe: true, emoji: "✅", firstChoice: "Cardioprotective - may reduce BP and homocysteine" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Caution - High-dose B3 (>1500mg) may raise blood glucose" },
    hypertension: { safe: true, emoji: "✅", firstChoice: "May help reduce BP - especially B2, B6, B9, B12" }
},
{
    name: "PARACETAMOL + DEXTROMETHORPHAN + PHENYLEPHRINE",
    codes: ['100042'],
    maxDailyDose: "Paracetamol 3250 mg/day + Dextromethorphan 120 mg/day + Phenylephrine 60 mg/day max (12 caplets max)",
    liver: { safe: false, emoji: "⚠", firstChoice: "Caution - Reduce paracetamol to 2000mg/day with liver disease" },
    kidney: { safe: true, emoji: "⚠", firstChoice: "Safe for dextromethorphan but caution with phenylephrine in CKD" },
    heart: { safe: false, emoji: "❌", firstChoice: "Avoid - Phenylephrine raises BP and increases cardiac stress" },
    dm: { safe: false, emoji: "⚠", firstChoice: "Caution - Monitor blood glucose with phenylephrine" },
    hypertension: { safe: false, emoji: "❌", firstChoice: "Contraindicated in uncontrolled HTN - use guaifenesin + dextromethorphan instead" }
},
        
        // 🔥 يمكن إضافة أدوية جديدة هنا بنفس النمط!
    ];