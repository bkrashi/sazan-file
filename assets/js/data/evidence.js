/* BEYOND THE INVESTMENT — Follow the Evidence: case files and evidence-type exercises. */
window.BTB = window.BTB || {};
/* verdicts a visitor can choose */
BTB.VERDICTS = {
  proven:["Proven","An official record establishes it."],
  supported:["Supported, not confirmed","Credible evidence points to it, but no official record confirms it."],
  disputed:["Disputed","Parties make conflicting claims."],
  unknown:["Unknown","The available evidence cannot settle it."]
};
/* case files: claim, documents [title, type, what it says, src], answer, explanation */
BTB.CASEFILES = [
 {id:"c1",claim:"Jared Kushner is a director of an Abu Dhabi company co-owned by an Eagle Hills entity.",
  docs:[["Abu Dhabi Global Market company record","off","Atlantic Eagle Dhabi Partners Holding Ltd: directors Jared Corey Kushner and Mohamed Ali Rashed Alabbar; shareholders Eagle Hills Skyline Investment Holdings and Atlantic Incubation Partners LLC.","S01"]],
  answer:"proven",why:"A company register lists both the directorship and the shareholders. What it does not show is any Albanian asset held by this company."},
 {id:"c2",claim:"A Kushner-linked company holds strategic-investor status for Sazan Island.",
  docs:[["Think-tank briefing citing AIDA","ngo","Cites AIDA's 30 Dec 2024 approval of strategic-investor status for the Sazan Island resort project.","S55"],["Delaware company record","off","Atlantic Incubation Partners LLC registered 5 Apr 2023; registered agent only.","S03"],["US trademark application","off","Atlantic Incubation Partners LLC (Florida address) filed for the mark \"SAZAN\".","S04"],["News reporting","rep","Describes Atlantic Incubation Partners as affiliated with Kushner's Affinity Partners.","S43"]],
  answer:"supported",why:"The status and the trademark point to Atlantic Incubation Partners, and reporting links that name to Affinity Partners. But the AIDA decision itself was not reviewed directly, and three companies share the name with no common identifier."},
 {id:"c3",claim:"Construction at Zvërnec began without a valid permit.",
  docs:[["NGO satellite analysis","ngo","A new road, bridge and clearing by May 2026 \"without a published environmental impact assessment, public consultation, or valid permit\".","S50"],["NGO construction map","ngo","Documents bulldozers clearing coastal forest and dunes; works suspended 11 Jun 2026.","S51"],["Government statement to AFP","rep","Describes the Zvërnec land as private property.","S31"]],
  answer:"supported",why:"Independent satellite evidence shows the works, and NGOs found no published permit. No official permit register or court ruling was reviewed, so the absence of a permit is not officially confirmed."},
 {id:"c4",claim:"The Zvërnec investors are the two co-owners of Power International Holding of Qatar.",
  docs:[["Government statement to AFP","rep","\"The project's investors are the two co-owners of Power International Holding W.L.L from Qatar.\"","S31"],["Albania beneficial-owner register","off","Albania Land Development (Vlorë) is owned 50/50 by two Alkhayyat brothers; no holding company is named.","S02"]],
  answer:"unknown",why:"This is the government's claim. The register names two brothers as owners of a Vlorë land company, but no record links them to Power International Holding or the land company to the project."},
 {id:"c5",claim:"Bulqizë miners were dismissed because of union activity.",
  docs:[["Union account","alg","The independent union SMBB says nine miners lost their jobs over union activity after 2019.","S44"],["Company response, as reported","rep","AlbChrome denies neglect and intimidation and says the union represents a minority of workers.","S45"]],
  answer:"disputed",why:"The union and the company give conflicting accounts, and no court or labour-inspection finding was reviewed."},
 {id:"c6",claim:"Workers in Albanian shoe and garment workshops are paid below the legal minimum.",
  docs:[["NGO study (2016)","ngo","About half of 52 workers interviewed in four factories were not paid the legal minimum wage.","S52"],["Official statistics (2026)","off","The minimum wage is now 50,000 lek; average gross wage 90,119 lek.","S20"]],
  answer:"supported",why:"The finding is credible but dated and based on a small sample. No newer factory-level wage data was found, so it can't be generalised to 2026."},
 {id:"c7",claim:"Prosecutors froze the bank accounts of Albania Land Development.",
  docs:[["Investigative outlet","rep","Reports SPAK froze the company's accounts over allegedly fraudulent property titles.","S42"]],
  answer:"unknown",why:"Only one outlet reports this, and no court or prosecutor document was reviewed. Treat it as a lead to verify."},
 {id:"c8",claim:"Prime Minister Edi Rama has a personal financial stake in the resort projects.",
  docs:[["PEP profile and ownership search","off","Rama is listed as a politically exposed person; no ownership or business link to any project company was found.","S10"],["Analysis of protest claims","rep","Some protesters claim the government serves private or foreign interests; Al Jazeera notes \"these claims have not been proven\".","S33"]],
  answer:"unknown",why:"This investigation found no evidence of a personal stake. That doesn't prove there is none, but it can't be stated as fact. Political responsibility for the decisions is a separate question."}
];

/* evidence-type exercise: what can each source establish? statements: [text, canEstablish, explanation] */
BTB.EVTYPES = [
 {id:"register",ic:"Official record",t:"A company-register entry",stmts:[
   ["Who is legally registered as shareholder of Albania Land Development",true,"That is exactly what a register records."],
   ["Who really controls and profits from the company",false,"A register shows declared owners; nominees and trusts can sit behind them."],
   ["That the company owns land at Zvërnec",false,"Land ownership is in the cadastre, not the company register."]]},
 {id:"customs",ic:"Official record",t:"A customs shipment record",stmts:[
   ["That ITX Turkey received shoes shipped from Albania",true,"Shipper, receiver, product code and date are what customs records contain."],
   ["Which workshop made the shoes",false,"The exporter is listed; the workshop that sewed them usually isn't."],
   ["What the workers were paid",false,"Customs records contain no labour information."]]},
 {id:"satellite",ic:"Remote sensing",t:"Satellite imagery of Zvërnec",stmts:[
   ["That land was cleared between two dates",true,"Before-and-after images show physical change."],
   ["That the clearing was illegal",false,"Legality depends on permits and law, which images can't show."],
   ["Who ordered the clearing",false,"Images show what changed, not who decided."]]},
 {id:"report",ic:"Corporate document",t:"A brand's sustainability report",stmts:[
   ["What the brand says its policies are",true,"A report is the company's own statement of policy."],
   ["That a specific Albanian workshop pays the minimum wage",false,"Reports are self-declared and usually aggregated across thousands of suppliers."],
   ["The brand's legal disclosure duties under the CSRD, if it is in scope",true,"In-scope companies must publish this information; accuracy still needs checking."]]},
 {id:"audit",ic:"Third-party check",t:"An announced social audit",stmts:[
   ["Conditions on the day the auditor visited",true,"An audit records what was observed during the visit."],
   ["That workers are never paid below the minimum",false,"Announced audits can be prepared for; cash pay and off-the-books hours can be hidden."],
   ["That no unregistered subcontractor was used",false,"Auditors see the site they visit, not undisclosed ones."]]},
 {id:"cert",ic:"Third-party check",t:"A third-party certification",stmts:[
   ["That a site met a standard's criteria when assessed",true,"That is what certification attests."],
   ["That the certified site made this specific product",false,"Without chain-of-custody records, a certificate doesn't follow the goods."],
   ["That conditions stayed the same after the assessment",false,"Certificates are snapshots with validity periods."]]},
 {id:"iot",ic:"Sensor data",t:"IoT weighbridge data at a mine gate",stmts:[
   ["How much ore left a gate, and when",true,"Sensors record physical events automatically."],
   ["That the ore was mined under safe conditions",false,"Weight and location say nothing about working conditions."],
   ["That the sensor wasn't tampered with",false,"Sensors need independent calibration and security."]]},
 {id:"chain",ic:"Digital record",t:"A blockchain traceability record",stmts:[
   ["That an entry hasn't been altered since it was written",true,"Tamper-evidence is what a blockchain provides."],
   ["That the first entry was true",false,"The oracle problem: a false input is preserved faithfully."],
   ["That a shipment of chrome came from Bulqizë",false,"Only if trustworthy data was entered at the mine."]]},
 {id:"interview",ic:"Testimony",t:"Anonymous worker interviews",stmts:[
   ["How workers describe their pay and treatment",true,"Testimony is direct evidence of workers' experience."],
   ["Conditions across the whole sector",false,"A handful of interviews is a sample, not a census."],
   ["Facts that cash-pay records would never show",true,"Interviews catch informal pay and overtime that documents miss."]]}
];
