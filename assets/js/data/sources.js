/* BEYOND THE BRAND — research data: evidence types and sources.
   Every claim on the site cites one or more of these IDs.
   type: off = official record · rep = independent reporting · ngo = NGO / union / research finding
         alg = allegation · unv = unverified claim · rq = research question */
window.BTB = window.BTB || {};

BTB.EVIDENCE = {
  off:{t:"Official record", d:"A company register, customs record, statute, statistic or government document."},
  rep:{t:"Independent reporting", d:"Published by a named news organisation or investigative outlet."},
  ngo:{t:"NGO / research finding", d:"Published by an NGO, union, think tank or research body."},
  alg:{t:"Allegation", d:"A claim under investigation, disputed, or made by one party. Not proven."},
  unv:{t:"Unverified", d:"A link or claim that the available records do not confirm."},
  rq:{t:"Research question", d:"Something this investigation could not answer. An open lead."}
};

/* id: [title, publisher, url, type, date, note] */
BTB.SOURCES = {
  /* official records, retrieved via Sayari Graph */
  S01:["Atlantic Eagle Dhabi Partners Holding Ltd — company record","Abu Dhabi Global Market registry, via Sayari Graph","https://graph.sayari.com/resource/entity/RZ7g9NSkBy-l80zHTkGfig","off","Retrieved 2 Nov 2026","Directors: Jared Corey Kushner, Mohamed Ali Rashed Alabbar. Shareholders: Eagle Hills Skyline Investment Holdings Ltd; Atlantic Incubation Partners LLC (ADGM). Reg. 21425, incorporated 21 Oct 2024."],
  S02:["Albania Land Development shpk — company and beneficial-owner record","Albania National Business Center, via Sayari Graph","https://graph.sayari.com/resource/entity/a8Qnvpj7gk9b6N462g47_Q","off","Retrieved 2 Nov 2026","NIPT M56727208I, Vlorë, registered 21 May 2025. Beneficial owners 50% / 50%; a different local individual registered as 100% shareholder and administrator."],
  S03:["Atlantic Incubation Partners LLC — Delaware record","Delaware Secretary of State, via Sayari Graph","https://graph.sayari.com/resource/entity/kkiWiryCCGzgdfX8q9W7Mw","off","Retrieved 2 Nov 2026","File no. 7390750, registered 5 Apr 2023. Registered agent: Corporation Service Company."],
  S04:["\"SAZAN\" trademark application (serial 98822950)","US Patent and Trademark Office, via Sayari Graph","https://graph.sayari.com/resource/entity/-RfJr1FrpjAzc9jrORHwHA","off","Retrieved 2 Nov 2026","Owner: Atlantic Incubation Partners LLC, Sunny Isles Beach, Florida."],
  S05:["Shipment records departing Albania (aggregate facets)","Customs datasets of importing countries, via Sayari Graph","https://graph.sayari.com/","off","Retrieved 2 Nov 2026","Counts of shipment records Sayari holds, not national trade totals. Coverage skews to countries that publish customs data."],
  S06:["Kastrati Group shpk — company record","Albania National Business Center, via Sayari Graph","https://graph.sayari.com/resource/entity/-EHllki7KxGtru87kLTE9w","off","Retrieved 2 Nov 2026","NIPT M42419029G, registered 17 Dec 2024. Shareholder Kastrati Aviation Holding (100%); beneficial owner Shefqet Kastrati."],
  S07:["AlbChrome shpk — company, ownership and trade record","Albania registers and customs datasets, via Sayari Graph","https://graph.sayari.com/resource/entity/nfoO5PLtz49Yy_Fb30u2xQ","off","Retrieved 2 Nov 2026","Registered 2000; LEI 789000L7CNRQQXK0RK98. One beneficial owner listed at 50%. Buyers on record include Eti Krom, Mitsubishi Corp. RtM Japan, Marubeni Tetsugen, Polymetcore Trading."],
  S08:["Chrome-ore exporters from Albania (HS 2610)","Customs datasets, via Sayari Graph","https://graph.sayari.com/resource/entity/J4aT_tE7tW0GiQHmhfSh2Q","off","Retrieved 2 Nov 2026","Jackson Minerals (HK) 1,527 shipments; Stella Mare shpk 1,242; Oaktron FZE (UAE) 1,120."],
  S09:["Buyers of Albanian footwear (HS 6403) and T-shirts (HS 6109)","Customs datasets, via Sayari Graph","https://graph.sayari.com/resource/entity/rK0DNjZEoxtBIlPdEnmh9A","off","Retrieved 2 Nov 2026","Footwear: ITX Turkey 303, Massimo Dutti México 72, Tempe Giyim 544. T-shirts: ITX Turkey 69, ITX Turkey Stradivarius branch 41, Stradivarius México 24, Decathlon Indonesia 44. Mostly dated 2020–2022."],
  S10:["Edi Rama — politically exposed person profile","Acuris Risk Intelligence, via Sayari Graph","https://graph.sayari.com/resource/entity/vWWLbWhxqimRHtU0d1txYA","off","Retrieved 2 Nov 2026","Listed as PEP; not sanctioned. Adverse-media flags are third-party data, not court findings. No ownership link to project companies found."],
  S11:["Sayari risk-factor definitions","Sayari Graph","https://graph.sayari.com/","off","Retrieved 2 Nov 2026","\"Possibly the same as\" (PSA) links rest on closely matching attributes without enough shared information to establish identity."],

  /* official statistics, statutes, government */
  S20:["Wage Statistics Q1 2026","INSTAT (Albania's statistics institute)","https://www.instat.gov.al/en/themes/labour-market-and-education/wages/publications/2026/wage-statistics-q1-2026/","off","2026","Minimum wage 50,000 lek from 1 Jan 2026; average gross wage 90,119 lek in Q1 2026."],
  S21:["Lowest minimum wage in Europe despite recent increase","Albanian Daily News (citing Eurostat)","https://albaniandailynews.com/news/lowest-minimum-wage-in-europe-despite-recent-increase","rep","2026","About €517 a month, lowest among European countries with a national minimum wage."],
  S22:["Albania falls even lower on the corruption index","Citizens.al (reporting Transparency International CPI 2025)","https://citizens.al/en/2026/02/10/Albania-falls-even-lower-on-the-corruption-index/","rep","10 Feb 2026","Score 39/100 (down from 42); rank 91 of 180 (from 80)."],
  S23:["Public designation of Sali Berisha for significant corruption","US Department of State","https://2021-2025.state.gov/public-designation-of-albanian-sali-berisha-due-to-involvement-in-significant-corruption","off","May 2021","Section 7031(c) designation."],
  S24:["US lifts the \"non grata\" designation on Sali Berisha","European Western Balkans","http://europeanwesternbalkans.com/2026/06/12/us-lifts-the-non-grata-designation-on-sali-berisha","rep","12 Jun 2026",""],
  S25:["Albania sees record 12.4 million tourists in 2025","Gazeta Tema (reporting INSTAT)","https://english.gazetatema.net/economy/albania-sees-record-124-million-tourists-in-2025-i343808","rep","2026","INSTAT: 12.47 million foreign tourists in 2025, up 6.6%."],
  S26:["Law on Strategic Investments (English translation)","AIDA, Albanian Investment Development Agency","https://aida.gov.al/wp-content/uploads/2024/04/STRATEGIC-INVESTMENT-LAW-eng.pdf","off","2015, as amended",""],
  S27:["Amendments to the Law on Strategic Investments: application deadline extended to December 2027","Karanovic & Partners","https://www.karanovicpartners.com/news/amendments-to-law-on-strategic-investments-deadline-for-applications-extended-until-december-2027/","ngo","",""],
  S28:["Govt to abolish its strategic investment law","Gazeta Tema","https://english.gazetatema.net/politics/govt-abolishes-its-strategic-investment-law-i346229","rep","14 Jul 2026","Rama announces abolition in Brussels."],
  S29:["Govt prepares new strategic investment law","Gazeta Tema","https://english.gazetatema.net/economy/govt-prepares-new-strategic-investment-law-i346320","rep","20 Jul 2026","No bill text or vote date published."],
  S12:["Strategic investors: the law that gave the coast to private individuals","Citizens.al","https://www.citizens.al/en/2026/06/02/strategic-investors--the-law-that-gave-the-coast-to-private-individuals/","rep","2 Jun 2026","Critical analysis of the strategic-investment regime."],
  S13:["10 years of Karaburun-Sazan National Marine Park","UNDP Albania","https://www.undp.org/albania/blog/10-years-karaburun-sazan-national-marine-park","ngo","","Albania's first marine national park, proclaimed by the Council of Ministers on 28 April 2010."],
  S14:["New Albanian airport raises cronyism, environment concerns","OCCRP","https://www.occrp.org/en/investigations/new-albanian-airport-raises-cronyism-environment-concerns","rep","",""],
  S15:["Albania moves to terminate Vlora International Airport concession over project delays","Albanian Daily News","https://albaniandailynews.com/news/albania-moves-to-terminate-vlora-international-airport-concession-over-project-delays","rep","Aug 2026",""],
  S16:["Vlora International Airport","Wikipedia","https://en.wikipedia.org/wiki/Vlora_International_Airport","rep","Accessed Nov 2026","Secondary summary; located in the Vjosa-Narta Protected Landscape."],

  /* independent reporting */
  S30:["Albanian authorities probe seaside resort project linked to Jared Kushner","Politico Europe","https://www.politico.eu/article/albanian-authorities-probe-seaside-resort-project-linked-to-jared-kushner","rep","Jun 2026","SPAK confirms investigation into 2024 protected-status change and land ownership."],
  S31:["What we know about Jared Kushner-backed luxury resort sparking outrage in Albania","France 24 / AFP","https://www.france24.com/en/europe/20260604-what-we-know-about-jared-kushner-backed-luxury-resort-sparking-outrage-in-albania","rep","4 Jun 2026","Government names Power International Holding co-owners; AFP finds no legal trace of \"Sazan Real Estate Development\"."],
  S32:["Kushner Island? Why a planned resort has provoked protests in Albania","Al Jazeera","https://www.aljazeera.com/news/2026/6/5/why-the-kushners-plan-to-build-an-albanian-resort-has-sparked-protests","rep","5 Jun 2026",""],
  S33:["'Horizontal revolt': Why Albania's young protesters want PM Rama to go","Al Jazeera","https://www.aljazeera.com/news/2026/10/20/horizontal-revolt-why-albanias-young-protesters-want-pm-rama-to-go","rep","20 Oct 2026",""],
  S34:["Jared Kushner's Albanian resort faces a corruption probe and mass protests","Mother Jones (citing BIRN)","https://www.motherjones.com/politics/2026/06/jared-kushner-albanian-resort-corruption-probe-mass-protests-environmental-harms-albania-edi-rama","rep","Jun 2026",""],
  S35:["Kushner project being developed on disputed land, Albanian villagers say","Reuters","https://www.reuters.com/world/europe/kushner-project-being-developed-disputed-land-albanian-villagers-say-2026-06-13","rep","13 Jun 2026",""],
  S36:["Violent anti-government protests rock Albania","NPR","https://www.npr.org/2026/10/26/nx-s1-6016143/violent-anti-government-protests-rock-albania","rep","26 Oct 2026",""],
  S37:["Flamingo Revolution: Albania protests escalate","Democracy Now!","https://www.democracynow.org/2026/10/21/albania_protests_edi_rama","rep","21 Oct 2026",""],
  S38:["Clashes in Albania: protesters attack the Council of Ministers","Novinite","https://www.novinite.com/articles/241378/Clashes+in+Albania:+Protesters+attack+the+Council+of+Ministers,+Edi+Rama+refuses+to+resign","rep","1 Nov 2026",""],
  S39:["Albania unrest: protesters demand Rama's resignation (video)","APT","https://www.youtube.com/watch?v=0ybKoDntOYg","rep","Oct 2026","Source of protester quotes."],
  S40:["Medical students join the protest","BalkanWeb","https://www.balkanweb.com/en/video-dosja-partizani-nen-akuze-per-korrupsion-sali-berisha-paraqitet-ne-spak-ne-zbatim-te-mases","rep","2 Nov 2026",""],
  S41:["Erion Veliaj (charges and detention, with primary citations)","Wikipedia","https://en.wikipedia.org/wiki/Erion_Veliaj","rep","Accessed Nov 2026","Secondary source; cites Shqiptarja, Balkan Insight and others."],
  S42:["Albania Is Not For Sale","Reactionary International","https://reactionary.international/investigations/albania-is-not-for-sale/en","rep","2026","Single source for the reported account freeze and 22-fold price claim."],
  S43:["Sazan Island Resort","Wikipedia","https://en.wikipedia.org/wiki/Sazan_Island_Resort","rep","Accessed Nov 2026","Secondary summary of reporting; used for approval timing."],
  S44:["Explaining Albania: what's going on with the miners' strikes","Exit News","https://exit.al/en/explaining-albania-whats-going-on-with-the-miners-strikes","rep","",""],
  S45:["Bulqiza mineworkers trade union responds to AlbChrome's denial","Exit News","https://exit.al/en/bulqiza-mineworkers-trade-union-responds-to-albchromes-denial-of-neglect-and-unlawful-intimidation","rep","",""],
  S46:["Bulqiza miners in protest: we are working until our demands are met","Citizens.al","https://www.citizens.al/en/2025/03/12/Bulqiza-miners-in-protest--we-are-working-until-our-demands-are-met/","rep","12 Mar 2025",""],
  S47:["Former Albanian prime minister's corruption trial delayed again","Gazeta Tema","https://english.gazetatema.net/politics/former-albanian-prime-ministers-corruption-trial-delayed-again-i347613","rep","12 Oct 2026",""],

  /* NGO, union, research */
  S50:["Wetlands @ Risk — the Vjosa-Narta","Wetlands International Europe","https://europe.wetlands.org/wetlands-risk-the-vjosa-narta","ngo","2026","Law 21/2024; satellite analysis of construction by May 2026; NGO consultation boycott."],
  S51:["Alarming developments in the Narta Lagoon","EuroNatur","https://www.euronatur.org/en/what-we-do/news/alarming-developments-in-the-narta-lagoon","ngo","2026","Construction map; suspension of works (11 Jun 2026); EU Commission and Parliament positions."],
  S52:["Wage and labour conditions of shoe and garment workers in Albania","Gender Alliance for Development Centre (GADC) / Clean Clothes Campaign","https://gadc.org.al/d/33/wage-and-labour-conditions-of-shoe-and-garment-workers-in-albania","ngo","Feb 2016","Interviews with 52 workers in 4 factories."],
  S53:["Labour on a Shoestring: shoe and garment workers in Eastern Europe (includes Albania)","Clean Clothes Campaign","https://cleanclothes.org/file-repository/resources-recommended-reading-labour-on-a-shoestring","ngo","2016",""],
  S54:["Albania: mine workers protest against poor working conditions","Business & Human Rights Resource Centre","https://business-humanrights.org/de/neuste-meldungen/albania-mine-workers-protest-against-poor-working-conditions-that-lead-to-numerous-accidents-at-workplace","ngo","",""],
  S55:["Albania external relations briefing","China-CEE Institute","https://china-cee.eu/wp-content/uploads/2026/03/2026er02_Albania.pdf","ngo","Mar 2026","Cites the AIDA strategic-investor decision of 30 Dec 2024."],
  S56:["The Flamingo Movement: why Albania needs a new political contract","Institut Jacques Delors","https://institutdelors.eu/en/publications/the-flamingo-movement-why-albania-needs-a-new-political-contract","ngo","2026","Eagle Hills and the Durrës port agreement."],

  /* law and policy texts */
  S60:["Directive (EU) 2022/2464 — Corporate Sustainability Reporting Directive (CSRD)","EUR-Lex","https://eur-lex.europa.eu/eli/dir/2022/2464/oj","off","2022",""],
  S61:["Directive (EU) 2024/1760 — Corporate Sustainability Due Diligence Directive (CSDDD)","EUR-Lex","https://eur-lex.europa.eu/eli/dir/2024/1760/oj","off","2024",""],
  S62:["Regulation (EU) 2024/3015 — prohibiting products made with forced labour","EUR-Lex","https://eur-lex.europa.eu/eli/reg/2024/3015/oj","off","2024","Applies from 14 December 2027."],
  S63:["Regulation (EU) 2024/1781 — Ecodesign for Sustainable Products (ESPR)","EUR-Lex","https://eur-lex.europa.eu/eli/reg/2024/1781/oj","off","2024","Framework for Digital Product Passports."],
  S64:["Regulation (EU) 2023/1115 — deforestation-free products (EUDR)","EUR-Lex","https://eur-lex.europa.eu/eli/reg/2023/1115/oj","off","2023","Covers cattle products including leather."],
  S65:["UN Guiding Principles on Business and Human Rights","UN OHCHR","https://www.ohchr.org/sites/default/files/documents/publications/guidingprinciplesbusinesshr_en.pdf","off","2011",""],
  S66:["OECD Guidelines for Multinational Enterprises on Responsible Business Conduct","OECD","https://mneguidelines.oecd.org/","off","Updated 2023",""],
  S67:["Act on Corporate Due Diligence Obligations in Supply Chains (LkSG)","German Federal Office for Economic Affairs and Export Control (BAFA)","https://www.bafa.de/EN/Supply_Chain_Act/supply_chain_act_node.html","off","2023",""],
  S68:["Uyghur Forced Labor Prevention Act","US Customs and Border Protection","https://www.cbp.gov/trade/forced-labor/UFLPA","off","2021",""],
  S69:["Directive (EU) 2026/470 — \"Omnibus I\" amendments to the CSRD and CSDDD","EUR-Lex","https://eur-lex.europa.eu/eli/dir/2026/470/oj","off","Published 26 Feb 2026; in force 18 Mar 2026","CSDDD now limited to companies with more than 5,000 employees and more than €1.5bn turnover; applies from 26 July 2029; transposition by 26 July 2028."],
  S70:["EU CSDDD/CSRD Omnibus published in the Official Journal","Covington & Burling","https://www.cov.com/en/news-and-insights/insights/2026/02/eu-csddd-csrd-omnibus-published-in-official-journal-transposition-delegated-acts-and-guidelines-are-next","ngo","Feb 2026","Law-firm summary of the amended thresholds and dates."],
  S71:["EU Deforestation Regulation application postponed to 30 December 2026","EY Tax News","https://taxnews.ey.com/news/2026-0237-eu-deforestation-regulation-application-postponed-to-30-december-2026","ngo","20 Jan 2026","Regulation (EU) 2025/2650; small and micro operators from 30 June 2027."],

  /* technology standards */
  S80:["Verifiable Credentials Data Model v2.0","W3C","https://www.w3.org/TR/vc-data-model-2.0/","off","",""],
  S81:["Decentralized Identifiers (DIDs) v1.0","W3C","https://www.w3.org/TR/did-core/","off","",""],
  S82:["Introducing the verifiable LEI (vLEI)","GLEIF","https://www.gleif.org/en/vlei/introducing-the-verifiable-lei-vlei","off","",""],
  S83:["EPCIS & CBV traceability standard","GS1","https://www.gs1.org/standards/epcis","off","",""],
  S84:["UN Transparency Protocol (UNTP)","UN/CEFACT","https://untp.unece.org/","off","",""],
  S85:["Sentinel-2 mission","Copernicus (European Union / ESA)","https://sentiwiki.copernicus.eu/web/s2-mission","off","",""],
  S86:["Open Supply Hub","Open Supply Hub","https://opensupplyhub.org/","ngo","",""],
  S87:["Open Contracting Data Standard","Open Contracting Partnership","https://standard.open-contracting.org/","ngo","",""]
};

/* image credits: file, title, author, licence, licence url, source page */
BTB.IMAGES = {
  "durres-port":["Container ship in Durrës harbour","Albinfo","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","https://commons.wikimedia.org/wiki/File:Durres_harbor_container_ship.jpg"],
  "durres-cranes":["Port of Durrës","Albinfo","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","https://commons.wikimedia.org/wiki/File:Durres_harbor_cranes.jpg"],
  "sazan-karaburun":["Sazan Island viewed from the Karaburun peninsula","Pasztilla aka Attila Terbócs","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","https://commons.wikimedia.org/wiki/File:Sazan_Island,_Albania_2016_02.jpg"],
  "sazan-bunkers":["Bunkers and old military buildings on the west coast of Sazan Island","Albinfo","CC BY 4.0","https://creativecommons.org/licenses/by/4.0/","https://commons.wikimedia.org/wiki/File:Bunkers_on_Sazan_Island.jpg"],
  "narta":["The Narta Lagoon meeting the Adriatic Sea, Zvërnec","Pasztilla aka Attila Terbócs","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","https://commons.wikimedia.org/wiki/File:Zv%C3%ABrnec,_Albania_%E2%80%93_Narta_Lagoon_01.jpg"],
  "bulqize-mine":["Bulqizë chromium mine","Kejsi. hoxha","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/","https://commons.wikimedia.org/wiki/File:Miniera_e_kromit_Bulqiz%C3%AB.jpg"],
  "sentinel-vjosa":["Vjosa river delta and Vlorë airport site, Copernicus Sentinel-2C, 11 Dec 2024 (false colour)","European Union, Copernicus Sentinel-2 imagery","Attribution","https://commons.wikimedia.org/wiki/Commons:Copernicus","https://commons.wikimedia.org/wiki/File:20250106_Vjosa_and_Semani_rivers_A3_%E2%80%93_Copernicus_Sentinel-2C_(Vlora_Airport).png"]
};
