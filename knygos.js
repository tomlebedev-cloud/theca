// Lietuvių ir pasaulio klasikai bei jų knygos lietuvių kalba.
// Lietuviškai parašytoms knygoms originalas = pavadinimas (tada jis atskirai nerodomas).
// Norėdami pridėti autorių ar knygą – nukopijuokite esamą įrašą ir pakeiskite laukus.
// spalva – viršelio spalva (bet kokia CSS spalva).
// zanras – "Romanas", "Poezija", "Drama" arba "Trumpoji proza" (pagal jį veikia žanro filtras).
// metai – epochos filtras ima pirmą šiame lauke esantį skaičių.
const RASYTOJAI = [
  {
    vardas: "Homeras",
    gyvenimas: "apie VIII a. pr. Kr.",
    salis: "Senovės Graikija",
    apie: "Legendinis senovės graikų poetas, laikomas dviejų seniausių Europos literatūros epų autoriumi.",
    knygos: [
      {
        pavadinimas: "Iliada",
        originalas: "Ἰλιάς",
        metai: "VIII a. pr. Kr.",
        zanras: "Poezija",
        spalva: "#8a5a2b",
        trumpai: "Epas apie Trojos karo paskutinius mėnesius ir Achilo rūstybę.",
        aprasymas: "Poema pasakoja apie kelias Trojos apgulties savaites, kai įžeistas Achilas atsisako kautis už graikus. Tik žuvus jo draugui Patroklui jis grįžta į mūšį ir nugali Trojos gynėją Hektorą. Kūrinys kalba apie garbę, pyktį, netektį ir žmogaus likimą dievų valioje."
      },
      {
        pavadinimas: "Odisėja",
        originalas: "Ὀδύσσεια",
        metai: "VIII a. pr. Kr.",
        zanras: "Poezija",
        spalva: "#2c5f7c",
        trumpai: "Dešimt metų trunkanti Odisėjo kelionė namo po Trojos karo.",
        aprasymas: "Gudrusis Itakės karalius Odisėjas po Trojos žlugimo klaidžioja jūromis: susiduria su kiklopu Polifemu, burtininke Kirke, sirenomis ir nimfa Kalipsone. Tuo metu jo žmona Penelopė namuose atsilaiko prieš įkyrius piršlius. Epas – kelionės, ištikimybės ir sugrįžimo istorija."
      }
    ]
  },
  {
    vardas: "Dante Alighieri",
    gyvenimas: "1265–1321",
    salis: "Italija",
    apie: "Florencijos poetas ir mąstytojas, vadinamas italų kalbos tėvu.",
    knygos: [
      {
        pavadinimas: "Dieviškoji komedija",
        originalas: "La Divina Commedia",
        metai: "1321",
        zanras: "Poezija",
        spalva: "#6b1f1f",
        trumpai: "Poeto kelionė per Pragarą, Skaistyklą ir Rojų.",
        aprasymas: "Pasiklydęs tamsiame miške, Dantė, vedamas poeto Vergilijaus, nusileidžia per devynis Pragaro ratus, kopia Skaistyklos kalnu, o Rojuje jį lydi mylimoji Beatričė. Poema sujungia viduramžių teologiją, filosofiją ir to meto Italijos politiką į vientisą pasaulio vaizdą."
      }
    ]
  },
  {
    vardas: "Miguelis de Cervantesas",
    gyvenimas: "1547–1616",
    salis: "Ispanija",
    apie: "Ispanų rašytojas, kurio kūrinys laikomas pirmuoju moderniu Europos romanu.",
    knygos: [
      {
        pavadinimas: "Don Kichotas",
        originalas: "Don Quijote de la Mancha",
        metai: "1605–1615",
        zanras: "Romanas",
        spalva: "#a0732a",
        trumpai: "Riterių romanų prisiskaitęs bajoras leidžiasi ginti pasaulio teisybės.",
        aprasymas: "Nusigyvenęs bajoras Alonsas Kichanas pasivadina Don Kichotu ir kartu su ginklanešiu Sanču Pansa keliauja po Ispaniją, malūnus laikydamas milžinais, o smukles – pilimis. Komiškas pasakojimas pamažu tampa jautria knyga apie idealizmą, vaizduotę ir tikrovę."
      }
    ]
  },
  {
    vardas: "Williamas Shakespeare'as",
    gyvenimas: "1564–1616",
    salis: "Anglija",
    apie: "Anglų dramaturgas ir poetas, dažnai vadinamas didžiausiu visų laikų rašytoju anglų kalba.",
    knygos: [
      {
        pavadinimas: "Hamletas",
        originalas: "Hamlet",
        metai: "apie 1600",
        zanras: "Drama",
        spalva: "#2e2e3a",
        trumpai: "Danijos princas siekia atkeršyti už nužudytą tėvą.",
        aprasymas: "Tėvo vaiduoklis atskleidžia Hamletui, kad jį nužudė brolis Klaudijus, dabar užėmęs sostą ir vedęs karalienę. Princas apsimeta pamišusiu ir dvejoja, ar ir kaip keršyti. Tragedija apie abejonę, sąžinę ir mirtį, kurios monologas „Būti ar nebūti“ žinomas visame pasaulyje."
      },
      {
        pavadinimas: "Romeo ir Džuljeta",
        originalas: "Romeo and Juliet",
        metai: "apie 1597",
        zanras: "Drama",
        spalva: "#8e2b4a",
        trumpai: "Dviejų priešiškų Veronos giminių vaikų meilės tragedija.",
        aprasymas: "Monteki ir Kapulečių šeimos ilgai nesantaikoje, tačiau jų vaikai Romeo ir Džuljeta įsimyli ir slapta susituokia. Lemtingų nesusipratimų grandinė veda į tragišką pabaigą. Pjesė tapo amžinos jaunystės meilės simboliu."
      }
    ]
  },
  {
    vardas: "Johannas Wolfgangas Goethe",
    gyvenimas: "1749–1832",
    salis: "Vokietija",
    apie: "Vokiečių poetas, dramaturgas, romanistas ir gamtininkas, vokiečių klasicizmo viršūnė.",
    knygos: [
      {
        pavadinimas: "Faustas",
        originalas: "Faust",
        metai: "1808–1832",
        zanras: "Drama",
        spalva: "#3a2b4f",
        trumpai: "Mokslininkas parduoda sielą velniui už žinojimą ir gyvenimo pilnatvę.",
        aprasymas: "Viskuo nusivylęs daktaras Faustas sudaro sutartį su Mefistofeliu: jei kada nors panorės sustabdyti akimirką, jo siela atiteks velniui. Prasideda kelionė per meilę Margaritai, valdžią ir kūrybą. Dramos poema klausia, kur žmogaus siekių riba ir kas jį išgelbsti."
      }
    ]
  },
  {
    vardas: "Jane Austen",
    gyvenimas: "1775–1817",
    salis: "Anglija",
    apie: "Anglų romanistė, garsėjanti ironišku žvilgsniu į to meto visuomenę ir santuokos papročius.",
    knygos: [
      {
        pavadinimas: "Puikybė ir prietarai",
        originalas: "Pride and Prejudice",
        metai: "1813",
        zanras: "Romanas",
        spalva: "#5d7a5a",
        trumpai: "Elizabetė Benet ir ponas Darsis – nuo antipatijos iki meilės.",
        aprasymas: "Bajoraitė Elizabetė Benet iš pirmo žvilgsnio nusprendžia, kad turtingasis ponas Darsis yra išdidus ir nemalonus. Pamažu abu supranta, kad juos klaidino puikybė ir išankstinės nuomonės. Šmaikštus romanas apie charakterį, luomus ir sąmoningą pasirinkimą."
      }
    ]
  },
  {
    vardas: "Viktoras Hugo",
    gyvenimas: "1802–1885",
    salis: "Prancūzija",
    apie: "Prancūzų romantizmo lyderis – poetas, dramaturgas ir romanistas.",
    knygos: [
      {
        pavadinimas: "Vargdieniai",
        originalas: "Les Misérables",
        metai: "1862",
        zanras: "Romanas",
        spalva: "#3d4a5c",
        trumpai: "Buvusio katoržininko Žano Valžano kelias į atgailą ir gerumą.",
        aprasymas: "Už duonos kepalo vagystę ilgus metus kalėjęs Žanas Valžanas, sutikęs gailestingą vyskupą, nusprendžia pradėti naują gyvenimą. Jį persekioja inspektorius Žaveras, o likimas susieja su našlaite Kozeta. Platus romanas apie teisingumą, gailestingumą ir XIX a. Paryžiaus skurdą."
      },
      {
        pavadinimas: "Paryžiaus katedra",
        originalas: "Notre-Dame de Paris",
        metai: "1831",
        zanras: "Romanas",
        spalva: "#6a5536",
        trumpai: "Kuprotas varpininkas Kvazimodas ir gražuolė čigonė Esmeralda.",
        aprasymas: "XV a. Paryžiuje Esmeraldą įsimyli trys vyrai: archidiakonas Klodas Frolas, kapitonas Febas ir katedros varpininkas Kvazimodas. Aistra, pavydas ir visuomenės žiaurumas veda į tragediją. Romanas taip pat yra meilės laiškas pačiai Dievo Motinos katedrai."
      }
    ]
  },
  {
    vardas: "Fiodoras Dostojevskis",
    gyvenimas: "1821–1881",
    salis: "Rusija",
    apie: "Rusų rašytojas, gilinęsis į žmogaus psichologiją, tikėjimą ir moralinius pasirinkimus.",
    knygos: [
      {
        pavadinimas: "Nusikaltimas ir bausmė",
        originalas: "Преступление и наказание",
        metai: "1866",
        zanras: "Romanas",
        spalva: "#4b3b2a",
        trumpai: "Studentas Raskolnikovas nužudo palūkininkę ir kenčia sąžinės graužatį.",
        aprasymas: "Skurstantis buvęs studentas Rodionas Raskolnikovas įtikina save, kad „ypatingas“ žmogus turi teisę peržengti moralės ribas, ir nužudo seną palūkininkę. Po nusikaltimo jį kankina baimė ir kaltė, o tyrėjas Porfirijus vis artėja. Romanas apie sąžinę, kančią ir atpirkimą."
      },
      {
        pavadinimas: "Broliai Karamazovai",
        originalas: "Братья Карамазовы",
        metai: "1880",
        zanras: "Romanas",
        spalva: "#2f3d2f",
        trumpai: "Tėvažudystė ir trijų skirtingų brolių likimai.",
        aprasymas: "Ištvirkęs Fiodoras Karamazovas nužudomas, o įtarimas krinta ant jo sūnų – aistringojo Dmitrijaus, racionalisto Ivano ir dvasingojo Aliošos. Detektyvinis siužetas tampa didžiuoju pokalbiu apie Dievą, laisvę ir atsakomybę. Paskutinis ir daugelio laikomas brandžiausiu Dostojevskio romanu."
      }
    ]
  },
  {
    vardas: "Levas Tolstojus",
    gyvenimas: "1828–1910",
    salis: "Rusija",
    apie: "Rusų rašytojas ir mąstytojas, didžiųjų epinių romanų autorius.",
    knygos: [
      {
        pavadinimas: "Karas ir taika",
        originalas: "Война и мир",
        metai: "1869",
        zanras: "Romanas",
        spalva: "#5a3a2e",
        trumpai: "Rusijos visuomenė Napoleono karų metu.",
        aprasymas: "Romane susipina kelių bajorų šeimų – Rostovų, Bolkonskių, Bezuchovų – likimai 1805–1812 m. Pjeras ieško gyvenimo prasmės, Andrejus – garbės, o Nataša bręsta per meilę ir netektis. Tolstojus kartu apmąsto istorijos dėsnius ir žmogaus vietą joje."
      },
      {
        pavadinimas: "Ana Karenina",
        originalas: "Анна Каренина",
        metai: "1878",
        zanras: "Romanas",
        spalva: "#7a2e3b",
        trumpai: "Ištekėjusios moters meilė karininkui Vronskiui ir visuomenės smerktis.",
        aprasymas: "Ana Karenina palieka šaltą vyrą dėl aistros grafui Vronskiui, tačiau aukštuomenė jos nebepriima, o jausmai virsta pavydu ir vienatve. Lygiagrečiai pasakojama apie Levino paieškas kaime ir šeimoje. Romanas atsiveria garsiu sakiniu apie laimingas ir nelaimingas šeimas."
      }
    ]
  },
  {
    vardas: "Gustave'as Flaubert'as",
    gyvenimas: "1821–1880",
    salis: "Prancūzija",
    apie: "Prancūzų realizmo meistras, garsėjęs kruopščiu stiliumi ir „tiksliu žodžiu“.",
    knygos: [
      {
        pavadinimas: "Ponia Bovari",
        originalas: "Madame Bovary",
        metai: "1857",
        zanras: "Romanas",
        spalva: "#4f6b7a",
        trumpai: "Provincijos gydytojo žmona Ema svajoja apie romantišką gyvenimą.",
        aprasymas: "Romanų prisiskaičiusi Ema išteka už paprasto gydytojo Šarlio Bovari, tačiau provincijos kasdienybė ją dusina. Ieškodama aistros ji įsivelia į meilės romanus ir skolas, kurios veda į pražūtį. Kūrinys – realistinio romano pavyzdys ir apysaka apie iliuzijų kainą."
      }
    ]
  },
  {
    vardas: "Charlesas Dickensas",
    gyvenimas: "1812–1870",
    salis: "Anglija",
    apie: "Viktorijos epochos anglų rašytojas, vaizdavęs vargingųjų gyvenimą ir socialinę neteisybę.",
    knygos: [
      {
        pavadinimas: "Oliverio Tvisto nuotykiai",
        originalas: "Oliver Twist",
        metai: "1838",
        zanras: "Romanas",
        spalva: "#4a4a3a",
        trumpai: "Našlaitis berniukas Londono vargšų lūšnose ir vagių gaujoje.",
        aprasymas: "Prieglaudoje užaugęs Oliveris pabėga į Londoną ir patenka į senio Fagino vadovaujamą kišenvagių gaują. Nepaisant aplinkos, berniukas išlieka doras, o jo kilmės paslaptis pamažu atsiskleidžia. Romanas atkreipė visuomenės dėmesį į vaikų skurdą ir prieglaudų žiaurumą."
      }
    ]
  },
  {
    vardas: "Franzas Kafka",
    gyvenimas: "1883–1924",
    salis: "Austrija-Vengrija (Praha)",
    apie: "Vokiškai rašęs Prahos rašytojas, kurio vardu pavadintas „kafkiškas“ absurdo pojūtis.",
    knygos: [
      {
        pavadinimas: "Procesas",
        originalas: "Der Process",
        metai: "1925",
        zanras: "Romanas",
        spalva: "#333333",
        trumpai: "Jozefas K. suimamas, nors niekas nepasako, kuo jis kaltinamas.",
        aprasymas: "Vieną rytą banko tarnautojas Jozefas K. sužino, kad yra suimtas, tačiau gali laisvai gyventi toliau. Jis bando suprasti paslaptingą teismą ir apsiginti, bet vis giliau grimzta į beprasmę biurokratiją. Po autoriaus mirties išleistas romanas – XX a. nerimo ir bejėgiškumo simbolis."
      }
    ]
  },
  {
    vardas: "Sofoklis",
    gyvenimas: "apie 496–406 pr. Kr.",
    salis: "Senovės Graikija",
    apie: "Vienas iš trijų didžiųjų Atėnų tragikų, pakeitęs graikų teatro sandarą ir veikėjų psichologiją.",
    knygos: [
      {
        pavadinimas: "Karalius Oidipas",
        originalas: "Οἰδίπους Τύραννος",
        metai: "apie 429 pr. Kr.",
        zanras: "Drama",
        spalva: "#7a3b1e",
        trumpai: "Tėbų karalius ieško maro priežasties ir sužino baisią tiesą apie save.",
        aprasymas: "Norėdamas išgelbėti Tėbus nuo maro, karalius Oidipas pradeda ieškoti buvusio valdovo Lajo žudiko. Tyrimas pamažu atskleidžia, kad išsipildė pranašystė: jis pats nužudė savo tėvą ir vedė motiną. Tragedija apie likimą, tiesos troškimą ir žmogaus aklumą."
      },
      {
        pavadinimas: "Antigonė",
        originalas: "Ἀντιγόνη",
        metai: "apie 441 pr. Kr.",
        zanras: "Drama",
        spalva: "#5c4a2a",
        trumpai: "Mergina nepaklūsta karaliaus įsakymui ir palaidoja brolį.",
        aprasymas: "Karalius Kreontas uždraudžia laidoti išdaviku paskelbtą Polineiką, tačiau jo sesuo Antigonė, paklusdama dievų įstatymams, brolį palaidoja. Susidūrus valstybės įstatymui ir sąžinei, abi pusės lieka nepalenkiamos. Pjesė iki šiol skaitoma kaip kūrinys apie pilietinį nepaklusnumą."
      }
    ]
  },
  {
    vardas: "Giovanni Boccaccio",
    gyvenimas: "1313–1375",
    salis: "Italija",
    apie: "Italų rašytojas ir humanistas, vienas Renesanso prozos pradininkų.",
    knygos: [
      {
        pavadinimas: "Dekameronas",
        originalas: "Decameron",
        metai: "apie 1353",
        zanras: "Trumpoji proza",
        spalva: "#8a6a2a",
        trumpai: "Šimtas novelių, kurias pasakoja nuo maro pabėgę jaunuoliai.",
        aprasymas: "1348 m. marui siaučiant Florencijoje, septynios merginos ir trys jaunuoliai pasitraukia į užmiesčio vilą. Dešimt dienų kiekvienas papasakoja po istoriją – apie meilę, gudrybes, likimo vingius ir veidmainius dvasininkus. Linksmas, kartais šiurkštus rinkinys vaizduoja gyvą, žemišką žmogų."
      }
    ]
  },
  {
    vardas: "Molière",
    gyvenimas: "1622–1673",
    salis: "Prancūzija",
    apie: "Prancūzų komedijų autorius ir aktorius, išjuokęs savo laikų ydas ir veidmainystę.",
    knygos: [
      {
        pavadinimas: "Tartiufas",
        originalas: "Le Tartuffe",
        metai: "1664",
        zanras: "Drama",
        spalva: "#4a2e5a",
        trumpai: "Apsimetėlis dievobaimingasis užvaldo patiklaus šeimininko namus.",
        aprasymas: "Turtingasis Orgonas yra sužavėtas pamaldžiu Tartiufu, kuriam pasiruošęs atiduoti dukterį ir visą turtą. Visi aplinkiniai mato, kad tai sukčius, tik Orgonas lieka aklas, kol pats neišgirsta tiesos. Komedija ilgai buvo draudžiama dėl religinės veidmainystės kritikos."
      }
    ]
  },
  {
    vardas: "Danielis Defoe",
    gyvenimas: "apie 1660–1731",
    salis: "Anglija",
    apie: "Anglų rašytojas ir žurnalistas, vienas anglų romano pradininkų.",
    knygos: [
      {
        pavadinimas: "Robinzonas Kruzas",
        originalas: "Robinson Crusoe",
        metai: "1719",
        zanras: "Romanas",
        spalva: "#3f6a4a",
        trumpai: "Jūreivis po laivo sudužimo 28 metus gyvena negyvenamoje saloje.",
        aprasymas: "Vienintelis išsigelbėjęs po audros Robinzonas atsiduria saloje ir turi viską susikurti iš nieko: būstą, įrankius, ūkį. Metams bėgant jis apmąsto savo gyvenimą ir tikėjimą, o vėliau sutinka čiabuvį, kurį pavadina Penktadieniu. Knyga tapo nuotykių ir išgyvenimo istorijų pavyzdžiu."
      }
    ]
  },
  {
    vardas: "Jonathanas Swiftas",
    gyvenimas: "1667–1745",
    salis: "Airija",
    apie: "Airių satyrikas ir dvasininkas, aštriausias savo laikų visuomenės kritikas.",
    knygos: [
      {
        pavadinimas: "Guliverio kelionės",
        originalas: "Gulliver's Travels",
        metai: "1726",
        zanras: "Romanas",
        spalva: "#2f5a6b",
        trumpai: "Laivo gydytojas pakliūva pas liliputus, milžinus ir kitas keistas tautas.",
        aprasymas: "Lemiuelis Guliveris keliauja į Liliputiją, kur žmonės nedidesni už pirštą, į milžinų šalį Brobdingnegą, skraidančią salą Laputą ir protingųjų arklių kraštą. Vaikams žinoma kaip pasaka, knyga iš tiesų yra kandi satyra apie politiką, mokslą ir žmogaus prigimtį."
      }
    ]
  },
  {
    vardas: "Stendhalis",
    gyvenimas: "1783–1842",
    salis: "Prancūzija",
    apie: "Prancūzų rašytojas, psichologinio romano pradininkas.",
    knygos: [
      {
        pavadinimas: "Raudona ir juoda",
        originalas: "Le Rouge et le Noir",
        metai: "1830",
        zanras: "Romanas",
        spalva: "#7a1e1e",
        trumpai: "Ambicingas staliaus sūnus Žiulienas Sorelis kopia visuomenės laiptais.",
        aprasymas: "Gabus ir išdidus provincijos jaunuolis Žiulienas Sorelis, žavėdamasis Napoleonu, siekia iškilti Restauracijos epochos Prancūzijoje – pirmiausia per bažnyčią, vėliau per aukštuomenės salonus. Jo meilės ir išskaičiavimai veda į tragišką finalą. Romanas tiksliai atskleidžia veikėjo vidinius prieštaravimus."
      }
    ]
  },
  {
    vardas: "Honoré de Balzacas",
    gyvenimas: "1799–1850",
    salis: "Prancūzija",
    apie: "Prancūzų realistas, ciklo „Žmogiškoji komedija“ autorius.",
    knygos: [
      {
        pavadinimas: "Tėvas Gorijo",
        originalas: "Le Père Goriot",
        metai: "1835",
        zanras: "Romanas",
        spalva: "#5a4632",
        trumpai: "Senas tėvas viską paaukoja dukterims, kurios jį pamiršta.",
        aprasymas: "Paryžiaus pensione gyvena buvęs pirklys Gorijo, atidavęs visą turtą dviem dukterims, kad jos įsitvirtintų aukštuomenėje. Šalia jo jaunas studentas Rastinjakas mokosi, kaip Paryžiuje pasiekiama sėkmė. Romanas – negailestingas pinigų ir garbės troškimo valdomos visuomenės paveikslas."
      }
    ]
  },
  {
    vardas: "Alexandre'as Dumas",
    gyvenimas: "1802–1870",
    salis: "Prancūzija",
    apie: "Prancūzų rašytojas, populiariausių istorinių nuotykių romanų autorius.",
    knygos: [
      {
        pavadinimas: "Trys muškietininkai",
        originalas: "Les Trois Mousquetaires",
        metai: "1844",
        zanras: "Romanas",
        spalva: "#2a4a7a",
        trumpai: "D'Artanjanas ir jo draugai Atas, Portas ir Aramis gina karalienės garbę.",
        aprasymas: "Jaunas gaskonas d'Artanjanas atvyksta į Paryžių tapti karaliaus muškietininku ir susidraugauja su trimis drąsiais kariais. Kartu jie kovoja prieš kardinolo Rišeljė intrigas ir klastingąją miledi. Nuotykių romanas apie draugystę: „Vienas už visus, visi už vieną.“"
      },
      {
        pavadinimas: "Grafas Monte Kristas",
        originalas: "Le Comte de Monte-Cristo",
        metai: "1844–1846",
        zanras: "Romanas",
        spalva: "#1e3d4f",
        trumpai: "Nekaltai įkalintas jūreivis pabėga, praturtėja ir keršija.",
        aprasymas: "Edmonas Dantesas apkalbamas ir įkalinamas If pilyje, kur kalėjimo draugas abatas Faria atskleidžia jam paslėpto lobio vietą. Ištrūkęs į laisvę, jis tampa paslaptinguoju grafu Monte Kristu ir kruopščiai atkeršija kaltininkams. Romanas apie teisingumą, kerštą ir atleidimą."
      }
    ]
  },
  {
    vardas: "Nikolajus Gogolis",
    gyvenimas: "1809–1852",
    salis: "Rusija",
    apie: "Ukrainoje gimęs rusų rašytojas, satyros ir groteskos meistras.",
    knygos: [
      {
        pavadinimas: "Mirusios sielos",
        originalas: "Мёртвые души",
        metai: "1842",
        zanras: "Romanas",
        spalva: "#4a5a3a",
        trumpai: "Aferistas Čičikovas superka mirusius baudžiauninkus.",
        aprasymas: "Pavelas Čičikovas važinėja po provincijos dvarus ir superka „mirusias sielas“ – mirusius, bet dokumentuose dar įrašytus baudžiauninkus, kad galėtų juos įkeisti. Kiekvienas dvarininkas – atskiras komiškas tipas. Poema prozoje – juokinga ir liūdna Rusijos provincijos panorama."
      }
    ]
  },
  {
    vardas: "Charlotte Brontë",
    gyvenimas: "1816–1855",
    salis: "Anglija",
    apie: "Anglų rašytoja, viena iš trijų seserų Brontë.",
    knygos: [
      {
        pavadinimas: "Džeinė Eir",
        originalas: "Jane Eyre",
        metai: "1847",
        zanras: "Romanas",
        spalva: "#5a3a4a",
        trumpai: "Našlaitė guvernantė ir paslaptingasis ponas Ročesteris.",
        aprasymas: "Sunkią vaikystę išgyvenusi Džeinė Eir tampa guvernante Tornfildo dvare ir įsimyli jo šeimininką Ročesterį. Dvaras slepia paslaptį, kuri sugriauna jų planus. Romanas apie moters orumą, savarankiškumą ir meilę, nepaminančią savigarbos."
      }
    ]
  },
  {
    vardas: "Emily Brontë",
    gyvenimas: "1818–1848",
    salis: "Anglija",
    apie: "Anglų poetė ir rašytoja, parašiusi vienintelį, bet legendinį romaną.",
    knygos: [
      {
        pavadinimas: "Vėtrų kalnas",
        originalas: "Wuthering Heights",
        metai: "1847",
        zanras: "Romanas",
        spalva: "#3a3f4a",
        trumpai: "Aistringa ir griaunanti Hitklifo ir Katerinos meilė Jorkšyro dykvietėse.",
        aprasymas: "Rastinukas Hitklifas užauga Ernšo šeimoje ir pamilsta jų dukterį Kateriną, tačiau ji išteka už turtingo kaimyno. Pažemintas Hitklifas grįžta ir keršija dviem šeimoms per kelias kartas. Niūrus, audringas romanas apie meilę, kuri tampa apsėdimu."
      }
    ]
  },
  {
    vardas: "Hermanas Melville'is",
    gyvenimas: "1819–1891",
    salis: "JAV",
    apie: "Amerikiečių rašytojas, pats plaukiojęs banginių medžiokliniais laivais.",
    knygos: [
      {
        pavadinimas: "Mobis Dikas",
        originalas: "Moby-Dick",
        metai: "1851",
        zanras: "Romanas",
        spalva: "#1f4a5f",
        trumpai: "Kapitonas Ahabas persekioja baltąjį banginį.",
        aprasymas: "Jūreivis Izmaelis įsidarbina banginių medžioklės laive „Pekvodas“, kurio kapitonas Ahabas trokšta atkeršyti baltajam banginiui, nukandusiam jam koją. Nuotykių pasakojimas virsta filosofine knyga apie apsėstumą, gamtą ir žmogaus ribas."
      }
    ]
  },
  {
    vardas: "Ivanas Turgenevas",
    gyvenimas: "1818–1883",
    salis: "Rusija",
    apie: "Rusų rašytojas, subtilus gamtos ir kartų konfliktų vaizduotojas.",
    knygos: [
      {
        pavadinimas: "Tėvai ir vaikai",
        originalas: "Отцы и дети",
        metai: "1862",
        zanras: "Romanas",
        spalva: "#5a6b3a",
        trumpai: "Jaunas nihilistas Bazarovas ir senoji bajorų karta.",
        aprasymas: "Studentas Arkadijus parsiveža į tėvo dvarą draugą Jevgenijų Bazarovą – nihilistą, neigiantį meną, tradicijas ir autoritetus. Jo ginčai su vyresniąja karta ir netikėta meilė išbando jo įsitikinimus. Romanas davė vardą visai epochos kartų priešpriešai."
      }
    ]
  },
  {
    vardas: "Markas Tvenas",
    gyvenimas: "1835–1910",
    salis: "JAV",
    apie: "Amerikiečių rašytojas ir humoristas, vadinamas amerikiečių literatūros tėvu.",
    knygos: [
      {
        pavadinimas: "Tomo Sojerio nuotykiai",
        originalas: "The Adventures of Tom Sawyer",
        metai: "1876",
        zanras: "Romanas",
        spalva: "#8a5a2a",
        trumpai: "Išdykėlio berniuko vasara Misisipės pakrantės miestelyje.",
        aprasymas: "Tomas Sojeris gyvena pas tetą Poli ir nuolat sugalvoja išdaigų – nuo tvoros dažymo iki lobio paieškų. Kartu su draugu Heklberiu Finu jis tampa nusikaltimo liudininku ir patenka į tikrą nuotykį. Šilta ir linksma knyga apie vaikystę."
      },
      {
        pavadinimas: "Heklberio Fino nuotykiai",
        originalas: "Adventures of Huckleberry Finn",
        metai: "1884",
        zanras: "Romanas",
        spalva: "#3a5a6b",
        trumpai: "Hekas ir pabėgęs vergas Džimas plaukia sielu Misisipe.",
        aprasymas: "Pabėgęs nuo smurtaujančio tėvo, Hekas kartu su vergu Džimu leidžiasi sielu Misisipe. Kelionėje jie sutinka sukčių, kerštaujančių šeimų ir veidmainių, o Hekas turi rinktis tarp visuomenės taisyklių ir savo sąžinės. Romanas laikomas vienu svarbiausių amerikiečių kūrinių."
      }
    ]
  },
  {
    vardas: "Oscaras Wilde'as",
    gyvenimas: "1854–1900",
    salis: "Airija",
    apie: "Airių rašytojas ir dramaturgas, garsėjęs sąmoju ir estetizmu.",
    knygos: [
      {
        pavadinimas: "Doriano Grėjaus portretas",
        originalas: "The Picture of Dorian Gray",
        metai: "1890",
        zanras: "Romanas",
        spalva: "#4a2a3a",
        trumpai: "Jaunuolis nesensta, o jo nuodėmes atspindi portretas.",
        aprasymas: "Gražuolis Dorianas Grėjus panori, kad senstų ne jis, o jo portretas – ir norą išpildo likimas. Lordo Henrio įkalbėtas, jis atsiduoda malonumams ir nusikaltimams, o paveikslas slaptame kambaryje darosi vis baisesnis. Romanas apie grožį, moralę ir sielos kainą."
      }
    ]
  },
  {
    vardas: "Antonas Čechovas",
    gyvenimas: "1860–1904",
    salis: "Rusija",
    apie: "Rusų dramaturgas ir novelistas, gydytojas, pakeitęs modernųjį teatrą.",
    knygos: [
      {
        pavadinimas: "Vyšnių sodas",
        originalas: "Вишнёвый сад",
        metai: "1904",
        zanras: "Drama",
        spalva: "#8a4a5a",
        trumpai: "Nusigyvenusi bajorų šeima praranda savo dvarą ir sodą.",
        aprasymas: "Liubovė Ranevskaja grįžta iš Paryžiaus į gimtąjį dvarą, kuris bus parduotas už skolas. Pirklys Lopachinas siūlo išeitį – iškirsti vyšnių sodą ir statyti vasarnamius, bet šeima nesiryžta veikti. Komedija ir drama apie praeinančią epochą ir neveiklumą."
      }
    ]
  },
  {
    vardas: "Thomas Mannas",
    gyvenimas: "1875–1955",
    salis: "Vokietija",
    apie: "Vokiečių romanistas, 1929 m. Nobelio literatūros premijos laureatas.",
    knygos: [
      {
        pavadinimas: "Budenbrokai",
        originalas: "Buddenbrooks",
        metai: "1901",
        zanras: "Romanas",
        spalva: "#3a4a5a",
        trumpai: "Turtingos Liubeko pirklių šeimos nuosmukis per keturias kartas.",
        aprasymas: "Romane sekama Budenbrokų giminė – nuo klestėjimo iki žlugimo. Kiekviena karta vis mažiau tinka prekybai ir vis labiau linksta į meną, ligas ir abejones. Platus, ironiškas pasakojimas apie miesčionijos pasaulį ir jo pabaigą."
      },
      {
        pavadinimas: "Užburtas kalnas",
        originalas: "Der Zauberberg",
        metai: "1924",
        zanras: "Romanas",
        spalva: "#4a6a7a",
        trumpai: "Jaunas inžinierius septynerius metus praleidžia kalnų sanatorijoje.",
        aprasymas: "Hansas Kastorpas atvyksta trims savaitėms aplankyti pusbrolio Šveicarijos sanatorijoje Davose, bet pasilieka septynerius metus. Ten jis susiduria su skirtingomis idėjomis, meile ir mirtimi, o laikas tarsi sustoja. Filosofinis romanas apie Europą prieš Pirmąjį pasaulinį karą."
      }
    ]
  },
  {
    vardas: "Erichas Maria Remarque'as",
    gyvenimas: "1898–1970",
    salis: "Vokietija",
    apie: "Vokiečių rašytojas, Pirmojo pasaulinio karo dalyvis.",
    knygos: [
      {
        pavadinimas: "Vakarų fronte nieko naujo",
        originalas: "Im Westen nichts Neues",
        metai: "1929",
        zanras: "Romanas",
        spalva: "#5a5a4a",
        trumpai: "Jauno kareivio Paulio Boimerio išgyvenimai apkasuose.",
        aprasymas: "Mokytojo įkalbėti, devyniolikmečiai klasės draugai savanoriais išeina į karą. Fronte jie greitai praranda iliuzijas, o draugai žūsta vienas po kito. Romanas apie „prarastąją kartą“, kurią sunaikino karas, net jei ji ir išliko gyva."
      }
    ]
  },
  {
    vardas: "Francis Scottas Fitzgeraldas",
    gyvenimas: "1896–1940",
    salis: "JAV",
    apie: "Amerikiečių rašytojas, „džiazo amžiaus“ metraštininkas.",
    knygos: [
      {
        pavadinimas: "Didysis Getsbis",
        originalas: "The Great Gatsby",
        metai: "1925",
        zanras: "Romanas",
        spalva: "#1e3a5a",
        trumpai: "Paslaptingas milijonierius rengia prabangius vakarėlius dėl vienos moters.",
        aprasymas: "Nikas Karavėjus apsigyvena šalia mįslingojo Džėjaus Getsbio, kurio dvare nesibaigia vakarėliai. Paaiškėja, kad visa ši prabanga skirta susigrąžinti buvusiai mylimajai Deizei. Trumpas, bet galingas romanas apie amerikietiškąją svajonę ir jos tuštumą."
      }
    ]
  },
  {
    vardas: "Ernestas Hemingway'us",
    gyvenimas: "1899–1961",
    salis: "JAV",
    apie: "Amerikiečių rašytojas, garsėjęs glaustu stiliumi, 1954 m. Nobelio premijos laureatas.",
    knygos: [
      {
        pavadinimas: "Senis ir jūra",
        originalas: "The Old Man and the Sea",
        metai: "1952",
        zanras: "Trumpoji proza",
        spalva: "#2a5a7a",
        trumpai: "Senas Kubos žvejys kovoja su milžiniška žuvimi.",
        aprasymas: "Po 84 dienų be laimikio senas žvejys Santjagas išplaukia toli į jūrą ir užkimba didžiulis marlinas. Kelias dienas trunka atkakli kova, o grįžtant laimikį puola rykliai. Apysaka apie orumą, ištvermę ir žmogų, kurį galima sunaikinti, bet ne nugalėti."
      }
    ]
  },
  {
    vardas: "Michailas Bulgakovas",
    gyvenimas: "1891–1940",
    salis: "Rusija",
    apie: "Kijeve gimęs rusų rašytojas ir dramaturgas, sovietų cenzūros persekiotas.",
    knygos: [
      {
        pavadinimas: "Meistras ir Margarita",
        originalas: "Мастер и Маргарита",
        metai: "1967",
        zanras: "Romanas",
        spalva: "#2b2b52",
        trumpai: "Velnias apsilanko sovietinėje Maskvoje, o greta vyksta pasakojimas apie Poncijų Pilotą.",
        aprasymas: "Į 1930-ųjų Maskvą atvyksta paslaptingas profesorius Volandas su savo palyda ir sukelia chaosą tarp biurokratų ir literatų. Tuo pat metu pasakojama apie Meistrą, parašiusį romaną apie Poncijų Pilotą, ir jo mylimąją Margaritą, pasiryžusią dėl jo viskam. Knyga jungia satyrą, fantastiką ir meilės istoriją."
      }
    ]
  },
  {
    vardas: "George'as Orwellas",
    gyvenimas: "1903–1950",
    salis: "Anglija",
    apie: "Anglų rašytojas ir publicistas, totalitarizmo kritikas.",
    knygos: [
      {
        pavadinimas: "1984-ieji",
        originalas: "Nineteen Eighty-Four",
        metai: "1949",
        zanras: "Romanas",
        spalva: "#1f3b4d",
        trumpai: "Distopija apie totalitarinę valstybę, kurioje Didysis Brolis stebi kiekvieną.",
        aprasymas: "Winstonas Smithas dirba Tiesos ministerijoje ir perrašinėja istoriją pagal Partijos poreikius. Okeanijoje sekama kiekviena mintis, o kalba siaurinama, kad maištas taptų neįmanomas. Kai Winstonas įsimyli Džuliją ir pradeda abejoti sistema, jis rizikuoja viskuo."
      },
      {
        pavadinimas: "Gyvulių ūkis",
        originalas: "Animal Farm",
        metai: "1945",
        zanras: "Trumpoji proza",
        spalva: "#6b5a2a",
        trumpai: "Gyvuliai išvaro ūkininką, bet kiaulės tampa naujais šeimininkais.",
        aprasymas: "Ūkio gyvuliai sukyla prieš girtuoklį ūkininką ir sukuria lygybės bendruomenę. Netrukus valdžią perima kiaulės, o šūkis pakeičiamas: visi gyvuliai lygūs, bet kai kurie lygesni. Trumpa alegorija apie revoliucijos išdavystę."
      }
    ]
  },
  {
    vardas: "Albert'as Camus",
    gyvenimas: "1913–1960",
    salis: "Prancūzija",
    apie: "Alžyre gimęs prancūzų rašytojas ir filosofas, 1957 m. Nobelio premijos laureatas.",
    knygos: [
      {
        pavadinimas: "Svetimas",
        originalas: "L'Étranger",
        metai: "1942",
        zanras: "Romanas",
        spalva: "#b07a3a",
        trumpai: "Abejingas žmogus Alžyro paplūdimyje nužudo arabą.",
        aprasymas: "Merso nesielvarta per motinos laidotuves, gyvena be didelių jausmų ir vieną karštą dieną beveik be priežasties nužudo žmogų. Teisme jis smerkiamas labiau už savo abejingumą nei už nusikaltimą. Trumpas romanas apie absurdą ir žmogaus santykį su pasauliu."
      }
    ]
  },
  {
    vardas: "Antoine'as de Saint-Exupéry",
    gyvenimas: "1900–1944",
    salis: "Prancūzija",
    apie: "Prancūzų lakūnas ir rašytojas, rašęs apie skrydžius, draugystę ir atsakomybę.",
    knygos: [
      {
        pavadinimas: "Mažasis princas",
        originalas: "Le Petit Prince",
        metai: "1943",
        zanras: "Trumpoji proza",
        spalva: "#2d6a8a",
        trumpai: "Poetiška pasaka apie berniuką iš mažos planetos ir lakūną dykumoje.",
        aprasymas: "Sacharoje nusileidęs lakūnas sutinka Mažąjį princą, atkeliavusį iš asteroido B-612. Princas pasakoja apie savo rožę ir keliones po planetas, kuriose gyvena keisti suaugusieji. Paprasta, bet gili istorija apie draugystę ir tai, kas iš tiesų svarbu."
      }
    ]
  },
  {
    vardas: "Gabrielis García Márquezas",
    gyvenimas: "1927–2014",
    salis: "Kolumbija",
    apie: "Kolumbiečių rašytojas, magiškojo realizmo meistras, 1982 m. Nobelio premijos laureatas.",
    knygos: [
      {
        pavadinimas: "Šimtas metų vienatvės",
        originalas: "Cien años de soledad",
        metai: "1967",
        zanras: "Romanas",
        spalva: "#a8692a",
        trumpai: "Septynių Buendijų kartų istorija išgalvotame Makondo miestelyje.",
        aprasymas: "Chosė Arkadijus Buendija įkuria Makondą, ir romane sekamas jo palikuonių likimas per šimtmetį – karai, meilės, beprotybės ir stebuklai. Magiškasis realizmas leidžia kasdienybei susipinti su antgamtiškais įvykiais. Laikomas Lotynų Amerikos literatūros šedevru."
      }
    ]
  },

  // ── Lietuvių klasikai ──
  {
    vardas: "Kristijonas Donelaitis",
    gyvenimas: "1714–1780",
    salis: "Lietuva",
    apie: "Mažosios Lietuvos evangelikų kunigas ir poetas, lietuvių grožinės literatūros pradininkas.",
    knygos: [
      {
        pavadinimas: "Metai",
        originalas: "Metai",
        metai: "apie 1765–1775, išleista 1818",
        zanras: "Poezija",
        spalva: "#5f7a3a",
        trumpai: "Poema apie Mažosios Lietuvos valstiečių būrų gyvenimą per keturis metų laikus.",
        aprasymas: "Hegzametru parašyta poema susideda iš keturių dalių: „Pavasario linksmybės“, „Vasaros darbai“, „Rudens gėrybės“ ir „Žiemos rūpesčiai“. Joje vaizduojami būrų darbai, šventės, vargai ir ydos, giriami darbštūs ir dori, barami tinginiai. Parašyta XVIII a. antroje pusėje, išleista tik po autoriaus mirties – tai pirmasis didelis lietuvių grožinės literatūros kūrinys."
      }
    ]
  },
  {
    vardas: "Antanas Baranauskas",
    gyvenimas: "1835–1902",
    salis: "Lietuva",
    apie: "Poetas, kalbininkas ir vyskupas, romantizmo epochos lietuvių poezijos klasikas.",
    knygos: [
      {
        pavadinimas: "Anykščių šilelis",
        originalas: "Anykščių šilelis",
        metai: "1858–1859",
        zanras: "Poezija",
        spalva: "#2f5a3a",
        trumpai: "Poema apie nuostabų Anykščių mišką ir jo iškirtimą.",
        aprasymas: "Poetas prisimena kadaise ošusį šilą – jo kvapus, garsus, grybus, paukščius ir ramybę, kurią miškas teikdavo žmogui. Dabar likę tik kelmai ir plynės: mišką sunaikino svetima valdžia ir skurdas. Gamtos paveikslas tampa pasakojimu apie tautos istoriją ir lietuvių kalbos grožį."
      }
    ]
  },
  {
    vardas: "Žemaitė",
    gyvenimas: "1845–1921",
    salis: "Lietuva",
    apie: "Julija Beniuševičiūtė-Žymantienė – realistinės lietuvių prozos kūrėja, pradėjusi rašyti beveik penkiasdešimties.",
    knygos: [
      {
        pavadinimas: "Marti",
        originalas: "Marti",
        metai: "1896",
        zanras: "Trumpoji proza",
        spalva: "#7a4a3a",
        trumpai: "Darbšti Katrė ištekinama į apsileidusių Vingių namus.",
        aprasymas: "Tėvo valia Katrė išteka už tinginio Vingių Jonuko. Naujuose namuose visi darbai užgriūva ją vieną, o vyras ir uošviai tik priekaištauja. Apsakymas be pagražinimų rodo XIX a. pabaigos kaimo moters dalią ir santuokas iš išskaičiavimo."
      }
    ]
  },
  {
    vardas: "Maironis",
    gyvenimas: "1862–1932",
    salis: "Lietuva",
    apie: "Jonas Mačiulis – kunigas ir poetas, tautinio atgimimo dainius.",
    knygos: [
      {
        pavadinimas: "Pavasario balsai",
        originalas: "Pavasario balsai",
        metai: "1895",
        zanras: "Poezija",
        spalva: "#3a6a8a",
        trumpai: "Eilėraščių rinkinys, tapęs tautinio atgimimo simboliu.",
        aprasymas: "Rinkinyje – eilėraščiai apie Lietuvos praeitį, gamtą, meilę tėvynei ir poeto pašaukimą: „Trakų pilis“, „Kur bėga Šešupė“, „Lietuva brangi“. Daugelis jų virto dainomis. Autorius rinkinį pildė ir taisė visą gyvenimą, o lietuvių poezijai jis davė naują, skambią eilėdarą."
      }
    ]
  },
  {
    vardas: "Vaižgantas",
    gyvenimas: "1869–1933",
    salis: "Lietuva",
    apie: "Juozas Tumas – kunigas, rašytojas ir visuomenės veikėjas, ieškojęs „deimančiukų“ paprastuose žmonėse.",
    knygos: [
      {
        pavadinimas: "Dėdės ir dėdienės",
        originalas: "Dėdės ir dėdienės",
        metai: "1920–1921",
        zanras: "Trumpoji proza",
        spalva: "#6a5a3a",
        trumpai: "Tylaus Mykoliuko meilė Severiutei ir nugyventi svetimi gyvenimai.",
        aprasymas: "Mykoliukas visą amžių dirba brolio ūkyje be atlygio ir vienintelę paguodą randa smuikelyje. Jo mylima Severija išteka už dvaro tijūno Rapolo Geišės, ir jos gyvenimas taip pat virsta sunkia tarnyste kitiems. Apysaka apie „dėdes“ ir „dėdienes“ – žmones, likusius be savo namų ir savo dalios."
      }
    ]
  },
  {
    vardas: "Šatrijos Ragana",
    gyvenimas: "1877–1930",
    salis: "Lietuva",
    apie: "Marija Pečkauskaitė – rašytoja ir pedagogė, lyrinės psichologinės prozos kūrėja.",
    knygos: [
      {
        pavadinimas: "Sename dvare",
        originalas: "Sename dvare",
        metai: "1922",
        zanras: "Trumpoji proza",
        spalva: "#6a4a6a",
        trumpai: "Vaikystės prisiminimai apie Žemaitijos dvarą ir jautrią mamatę.",
        aprasymas: "Apysaką sudaro dukters Irusios pasakojimas ir motinos dienoraščio puslapiai. Svajinga, muziką mylinti mamatė ilgisi dvasinio gyvenimo, bet atsiduoda šeimai ir kaimo žmonėms. Šviesus ir liūdnas kūrinys apie nykstantį dvarų pasaulį, tikėjimą ir prarastą vaikystę."
      }
    ]
  },
  {
    vardas: "Jonas Biliūnas",
    gyvenimas: "1879–1907",
    salis: "Lietuva",
    apie: "Lyrinės prozos pradininkas, per trumpą gyvenimą parašęs jautriausius lietuvių apsakymus.",
    knygos: [
      {
        pavadinimas: "Liūdna pasaka",
        originalas: "Liūdna pasaka",
        metai: "1907",
        zanras: "Trumpoji proza",
        spalva: "#4a4a5a",
        trumpai: "Juozapotos ir Petro laimę sugriauna 1863 metų sukilimas.",
        aprasymas: "Jauna valstiečių pora džiaugiasi baudžiavos panaikinimu ir laukia kūdikio, tačiau Petras išeina į sukilimą ir yra pakariamas. Tai pamačiusi Juozapota netenka proto ir visą likusį gyvenimą klausinėja praeivių apie savo Petriuką. Apysaka apie mažo žmogaus skausmą didžiųjų istorijos įvykių fone."
      }
    ]
  },
  {
    vardas: "Vincas Krėvė",
    gyvenimas: "1882–1954",
    salis: "Lietuva",
    apie: "Prozininkas ir dramaturgas, kūręs didingus Lietuvos praeities ir Dzūkijos kaimo paveikslus.",
    knygos: [
      {
        pavadinimas: "Skirgaila",
        originalas: "Skirgaila",
        metai: "1925",
        zanras: "Drama",
        spalva: "#5a2e2e",
        trumpai: "Kunigaikštis valdo Lietuvą tarp senojo tikėjimo ir krikščionybės.",
        aprasymas: "XIV a. pabaigoje Lietuvą valdantis Skirgaila spaudžiamas iš visų pusių – kryžiuočių, lenkų, savų bajorų ir žynių. Stiprus, bet vienišas valdovas nebetiki nei senaisiais dievais, nei naujuoju, ir darosi vis žiauresnis. Istorinė drama apie valdžios naštą ir tautos lūžio metą."
      },
      {
        pavadinimas: "Dainavos šalies senų žmonių padavimai",
        originalas: "Dainavos šalies senų žmonių padavimai",
        metai: "1912",
        zanras: "Trumpoji proza",
        spalva: "#3a5a5a",
        trumpai: "Tautosakos stiliumi parašytos legendos apie narsius Dainavos karžygius.",
        aprasymas: "Rinkinyje – ritminga, dainas primenančia proza papasakoti padavimai, tarp jų „Gilšė“ ir „Perkūnas, Vaiva ir Straublys“; vėlesniame leidime pridėta pasaka apie Punios valdovą kunigaikštį Margirį. Krėvė sukuria herojišką, romantišką senosios Lietuvos viziją. Kūrinys žavi iškilmingu, dainingu kalbėjimu."
      }
    ]
  },
  {
    vardas: "Vincas Mykolaitis-Putinas",
    gyvenimas: "1893–1967",
    salis: "Lietuva",
    apie: "Poetas simbolistas, prozininkas ir literatūros tyrinėtojas.",
    knygos: [
      {
        pavadinimas: "Altorių šešėly",
        originalas: "Altorių šešėly",
        metai: "1933",
        zanras: "Romanas",
        spalva: "#2e2e4a",
        trumpai: "Kunigas poetas Liudas Vasaris renkasi tarp pašaukimo ir kūrybos.",
        aprasymas: "Tėvų noru į seminariją įstojęs Liudas Vasaris pamažu supranta, kad kunigystė varžo jo prigimtį ir poeto talentą. Trys romano dalys seka jo abejones seminarijoje, parapijoje ir grįžus iš užsienio, taip pat jausmus Liucei, baronienei ir Auksei. Pirmasis lietuvių psichologinis intelektualinis romanas."
      }
    ]
  },
  {
    vardas: "Balys Sruoga",
    gyvenimas: "1896–1947",
    salis: "Lietuva",
    apie: "Poetas, dramaturgas ir teatrologas, Štuthofo koncentracijos stovyklos kalinys.",
    knygos: [
      {
        pavadinimas: "Dievų miškas",
        originalas: "Dievų miškas",
        metai: "1957",
        zanras: "Romanas",
        spalva: "#3a3a2e",
        trumpai: "Atsiminimai apie Štuthofo koncentracijos stovyklą, parašyti su karčia ironija.",
        aprasymas: "1943 m. nacių suimtas ir į Štuthofą išvežtas autorius aprašo lagerio kasdienybę – badą, mušimą, mirtį ir absurdišką tvarką. Vietoj skundo jis renkasi juodą humorą ir groteską, kurie padeda išsaugoti žmogiškumą. Knyga parašyta 1945 m., bet išleista tik po autoriaus mirties."
      }
    ]
  },
  {
    vardas: "Ieva Simonaitytė",
    gyvenimas: "1897–1978",
    salis: "Lietuva",
    apie: "Klaipėdos krašto rašytoja, Mažosios Lietuvos lietuvininkų metraštininkė.",
    knygos: [
      {
        pavadinimas: "Aukštujų Šimonių likimas",
        originalas: "Aukštujų Šimonių likimas",
        metai: "1935",
        zanras: "Romanas",
        spalva: "#6a3a3a",
        trumpai: "Garbingos lietuvininkų giminės nuosmukis per kelis šimtmečius.",
        aprasymas: "Romanas seka Šimonių giminę beveik du šimtmečius, nuo XVIII a.: iš turtingų, išdidžių ūkininkų palikuonys virsta bežemiais. Kartu nyksta ir lietuviška Mažosios Lietuvos dvasia, spaudžiama vokiečių kolonizacijos. Šeimos saga, už kurią autorė gavo pirmąją Lietuvos valstybinę literatūros premiją."
      }
    ]
  },
  {
    vardas: "Salomėja Nėris",
    gyvenimas: "1904–1945",
    salis: "Lietuva",
    apie: "Viena žymiausių lietuvių lyrikių, trumpo, dainingo ir jausmingo eilėraščio meistrė.",
    knygos: [
      {
        pavadinimas: "Diemedžiu žydėsiu",
        originalas: "Diemedžiu žydėsiu",
        metai: "1938",
        zanras: "Poezija",
        spalva: "#5a7a6a",
        trumpai: "Brandžiausias poetės eilėraščių rinkinys apie meilę, laiką ir trapią būtį.",
        aprasymas: "Rinkinio eilėraščiuose skamba gyvenimo trumpumo nuojauta, motinystės džiaugsmas, gimtųjų laukų ilgesys ir tikėjimas, kad žmogus tęsiasi gamtoje. Kalba paprasta, artima liaudies dainai, o jausmas – atviras ir stiprus. Už šią knygą poetė gavo Valstybinę literatūros premiją."
      }
    ]
  },
  {
    vardas: "Antanas Škėma",
    gyvenimas: "1910–1961",
    salis: "Lietuva",
    apie: "Išeivijos prozininkas, dramaturgas ir aktorius, lietuvių modernizmo klasikas.",
    knygos: [
      {
        pavadinimas: "Balta drobulė",
        originalas: "Balta drobulė",
        metai: "1958",
        zanras: "Romanas",
        spalva: "#8a8a7a",
        trumpai: "Poetas emigrantas dirba liftininku Niujorko viešbutyje.",
        aprasymas: "Antanas Garšva kelia ir leidžia liftą didžiuliame viešbutyje, o jo mintys šokinėja tarp vaikystės Lietuvoje, karo, okupacijų, meilės Elenai ir nebaigtų eilėraščių. Sąmonės srauto technika parašytas romanas rodo menininko vienatvę ir artėjančią beprotybę. Vienas moderniausių XX a. lietuvių kūrinių."
      }
    ]
  },
  {
    vardas: "Justinas Marcinkevičius",
    gyvenimas: "1930–2011",
    salis: "Lietuva",
    apie: "Poetas ir dramaturgas, sovietmečiu žadinęs istorinę atmintį.",
    knygos: [
      {
        pavadinimas: "Mažvydas",
        originalas: "Mažvydas",
        metai: "1977",
        zanras: "Drama",
        spalva: "#4a3a2a",
        trumpai: "Drama apie pirmosios lietuviškos knygos autorių Martyną Mažvydą.",
        aprasymas: "Senas Ragainės klebonas Mažvydas žvelgia į nugyventą gyvenimą: paliktą tėvynę, kaltę dėl mylėtos moters ir sūnaus, savo knygos prasmę. Garsiojoje scenoje jis moko parapijiečius skiemenuoti žodį „Lie-tu-va“. Trilogijos dalis kartu su dramomis „Mindaugas“ ir „Katedra“."
      }
    ]
  },

  // ── Pasaulio klasika (papildymas) ──
  {
    vardas: "Vergilijus",
    gyvenimas: "70–19 pr. Kr.",
    salis: "Senovės Roma",
    apie: "Žymiausias Romos poetas, kūręs imperatoriaus Augusto laikais.",
    knygos: [
      {
        pavadinimas: "Eneida",
        originalas: "Aeneis",
        metai: "19 pr. Kr.",
        zanras: "Poezija",
        spalva: "#7a2e2e",
        trumpai: "Trojėno Enėjo kelionė į Italiją, kur jo palikuonys įkurs Romą.",
        aprasymas: "Po Trojos žlugimo Enėjas su tėvu ir sūnumi bėga iš degančio miesto ir ilgai klajoja jūromis. Kartaginoje jį pamilsta karalienė Didonė, bet dievų valia jis turi plaukti toliau. Italijoje laukia karas dėl naujos tėvynės. Epas tapo Romos tautine poema."
      }
    ]
  },
  {
    vardas: "Aleksandras Puškinas",
    gyvenimas: "1799–1837",
    salis: "Rusija",
    apie: "Rusų poetas, laikomas šiuolaikinės rusų literatūrinės kalbos kūrėju.",
    knygos: [
      {
        pavadinimas: "Eugenijus Oneginas",
        originalas: "Евгений Онегин",
        metai: "1833",
        zanras: "Poezija",
        spalva: "#3a4a6a",
        trumpai: "Eiliuotas romanas apie nuobodžiaujantį dendį ir Tatjanos meilę.",
        aprasymas: "Viskuo persisotinęs Peterburgo jaunuolis Oneginas atvyksta į kaimą, kur jį pamilsta svajinga Tatjana Larina. Jis šaltai atstumia jos prisipažinimą, o vėliau dvikovoje nušauna draugą Lenskį. Po kelerių metų vaidmenys apsikeičia. Kūrinys vadinamas „rusų gyvenimo enciklopedija“."
      }
    ]
  },
  {
    vardas: "Julesas Verne'as",
    gyvenimas: "1828–1905",
    salis: "Prancūzija",
    apie: "Prancūzų rašytojas, mokslinės fantastikos ir nuotykių romano pradininkas.",
    knygos: [
      {
        pavadinimas: "Aplink Žemę per 80 dienų",
        originalas: "Le Tour du monde en quatre-vingts jours",
        metai: "1872",
        zanras: "Romanas",
        spalva: "#2a6a6a",
        trumpai: "Anglų džentelmenas susilažina, kad apkeliaus pasaulį per aštuoniasdešimt dienų.",
        aprasymas: "Punktualusis Fileasas Fogas su tarnu Paspartu leidžiasi aplink pasaulį traukiniais, garlaiviais ir net drambliu. Juos persekioja seklys Fiksas, įsitikinęs, kad Fogas apiplėšė banką. Linksmas, veržlus romanas apie lenktynes su laiku."
      },
      {
        pavadinimas: "Kapitono Granto vaikai",
        originalas: "Les Enfants du capitaine Grant",
        metai: "1868",
        zanras: "Romanas",
        spalva: "#2a4a6a",
        trumpai: "Dingusio kapitono paieškos palei 37-ąją lygiagretę.",
        aprasymas: "Ryklio pilve randamas butelis su apgadintu laišku: kapitonas Grantas sudužo kažkur 37-ojoje pietų platumoje. Lordas Glenarvanas, kapitono vaikai ir išsiblaškęs geografas Paganelis keliauja per Pietų Ameriką, Australiją ir Naująją Zelandiją. Klasikinis nuotykių ir geografijos romanas."
      }
    ]
  },
  {
    vardas: "Henrykas Sienkiewiczius",
    gyvenimas: "1846–1916",
    salis: "Lenkija",
    apie: "Lenkų istorinių romanų autorius, 1905 m. Nobelio premijos laureatas.",
    knygos: [
      {
        pavadinimas: "Kryžiuočiai",
        originalas: "Krzyżacy",
        metai: "1900",
        zanras: "Romanas",
        spalva: "#5a5a5a",
        trumpai: "Lenkų ir lietuvių kova su Kryžiuočių ordinu iki Žalgirio mūšio.",
        aprasymas: "Jaunas riteris Zbyška iš Bogdaneco pamilsta Danusę ir prisiekia jai kryžiuočių šalmų plunksnas. Asmeninė meilės ir keršto istorija susipina su didžiąja politika, o romanas baigiasi 1410 m. Žalgirio mūšiu. Spalvingas viduramžių paveikslas, kuriame veikia ir Vytautas bei žemaičiai."
      },
      {
        pavadinimas: "Quo vadis",
        originalas: "Quo vadis",
        metai: "1896",
        zanras: "Romanas",
        spalva: "#8a3a2a",
        trumpai: "Romos patricijaus meilė krikščionei Nerono laikais.",
        aprasymas: "Karvedys Markas Vinicijus įsimyli krikščionę Ligiją ir pamažu pats pasikeičia. Fone – Nerono dvaro prabanga, Romos gaisras ir pirmųjų krikščionių persekiojimai. Romanas apie dviejų pasaulių – pagoniškos imperijos ir naujojo tikėjimo – susidūrimą."
      }
    ]
  },
  {
    vardas: "Jackas Londonas",
    gyvenimas: "1876–1916",
    salis: "JAV",
    apie: "Amerikiečių rašytojas, aukso ieškotojas ir jūreivis, rašęs apie kovą už būvį.",
    knygos: [
      {
        pavadinimas: "Martinas Idenas",
        originalas: "Martin Eden",
        metai: "1909",
        zanras: "Romanas",
        spalva: "#3a5a4a",
        trumpai: "Jūreivis savamokslis siekia tapti rašytoju.",
        aprasymas: "Neišsilavinęs jūreivis Martinas Idenas įsimyli turtingų tėvų dukterį Rūtą ir dėl jos imasi atkakliai mokytis bei rašyti. Ilgai skursta ir yra atstumiamas, o kai pagaliau išgarsėja, sėkmė jam atrodo tuščia. Iš dalies autobiografinis romanas apie talentą ir nusivylimą."
      },
      {
        pavadinimas: "Baltoji Iltis",
        originalas: "White Fang",
        metai: "1906",
        zanras: "Romanas",
        spalva: "#6a7a8a",
        trumpai: "Pusiau vilko, pusiau šuns kelias iš laukinės Šiaurės pas žmogų.",
        aprasymas: "Kanados Šiaurėje, Jukono giriose, gimęs vilkšunis patenka pas indėnus, vėliau – pas žiaurų šeimininką, kuris verčia jį kautis šunų peštynėse. Tik kantrus ir geras žmogus išmoko Baltąją Iltį pasitikėti. Pasakojimas, matomas gyvūno akimis, apie žiaurumą ir prisijaukinimą."
      }
    ]
  },
  {
    vardas: "Hermannas Hesse",
    gyvenimas: "1877–1962",
    salis: "Vokietija",
    apie: "Vokiečių ir šveicarų rašytojas, 1946 m. Nobelio premijos laureatas.",
    knygos: [
      {
        pavadinimas: "Stepių vilkas",
        originalas: "Der Steppenwolf",
        metai: "1927",
        zanras: "Romanas",
        spalva: "#3a3a4a",
        trumpai: "Vienišas intelektualas, pasidalijęs į žmogų ir vilką.",
        aprasymas: "Penkiasdešimtmetis Haris Haleris jaučiasi svetimas miesčionių pasaulyje ir galvoja apie savižudybę. Sutikta Hermina išmoko jį šokti, juoktis ir atveria duris į „Magiškąjį teatrą“. Romanas apie vidinį susiskaldymą ir bandymą susitaikyti su savimi."
      },
      {
        pavadinimas: "Sidharta",
        originalas: "Siddhartha",
        metai: "1922",
        zanras: "Romanas",
        spalva: "#a07a2a",
        trumpai: "Brahmano sūnaus dvasinės paieškos senovės Indijoje.",
        aprasymas: "Sidharta palieka tėvų namus, tampa asketu, sutinka Budą, tačiau nusprendžia, kad išminties neįmanoma išmokti iš kito. Jis patiria meilę, turtą ir nuosmukį, kol galiausiai randa ramybę prie upės. Trumpa, poetiška knyga apie savo kelio ieškojimą."
      }
    ]
  },
  {
    vardas: "Jaroslavas Hašekas",
    gyvenimas: "1883–1923",
    salis: "Čekija",
    apie: "Čekų satyrikas ir žurnalistas, garsiausio antikarinio komiško romano autorius.",
    knygos: [
      {
        pavadinimas: "Šauniojo kareivio Šveiko nuotykiai",
        originalas: "Osudy dobrého vojáka Švejka za světové války",
        metai: "1921–1923",
        zanras: "Romanas",
        spalva: "#6a6a3a",
        trumpai: "Geraširdis plepys Šveikas Austrijos-Vengrijos kariuomenėje.",
        aprasymas: "Prahos šunų prekeivis Jozefas Šveikas pašaukiamas į Pirmąjį pasaulinį karą ir uoliai vykdo visus įsakymus – taip uoliai, kad viską paverčia nesąmone. Niekas nesupranta, ar jis kvailys, ar gudruolis. Nebaigtas romanas negailestingai išjuokia karą ir biurokratiją."
      }
    ]
  },
  {
    vardas: "Jerome'as Davidas Salingeris",
    gyvenimas: "1919–2010",
    salis: "JAV",
    apie: "Amerikiečių rašytojas, po ankstyvos šlovės pasirinkęs atsiskyrėlio gyvenimą.",
    knygos: [
      {
        pavadinimas: "Rugiuose prie bedugnės",
        originalas: "The Catcher in the Rye",
        metai: "1951",
        zanras: "Romanas",
        spalva: "#9a3a2a",
        trumpai: "Iš mokyklos išmestas paauglys kelias dienas klaidžioja po Niujorką.",
        aprasymas: "Šešiolikmetis Holdenas Kolfildas, nenorėdamas grįžti namo, bastosi po miestą ir visur mato suaugusiųjų apsimetinėjimą. Vienintelis jam artimas žmogus – jaunesnioji sesuo Fibė. Atviru paauglio balsu parašytas romanas apie vienatvę ir norą apsaugoti vaikystę."
      }
    ]
  },
  {
    vardas: "Ray'us Bradbury",
    gyvenimas: "1920–2012",
    salis: "JAV",
    apie: "Amerikiečių rašytojas, poetiškos mokslinės fantastikos meistras.",
    knygos: [
      {
        pavadinimas: "451° Farenheito",
        originalas: "Fahrenheit 451",
        metai: "1953",
        zanras: "Romanas",
        spalva: "#a0401e",
        trumpai: "Ateities visuomenė, kurioje gaisrininkai degina knygas.",
        aprasymas: "Gajus Montegas dirba gaisrininku – jo pareiga deginti knygas ir namus, kuriuose jos slepiamos. Pažintis su smalsia kaimyne Klarisa priverčia jį suabejoti savo darbu ir slapta pradėti skaityti. Distopija apie pramogų užliūliuotą visuomenę ir atminties vertę."
      }
    ]
  },

  // ── Lietuvių klasikai (antras papildymas) ──
  {
    vardas: "Motiejus Valančius",
    gyvenimas: "1801–1875",
    salis: "Lietuva",
    apie: "Žemaičių vyskupas, švietėjas ir blaivybės sąjūdžio vadovas, lietuvių prozos pradininkas.",
    knygos: [
      {
        pavadinimas: "Palangos Juzė",
        originalas: "Palangos Juzė",
        metai: "1869",
        zanras: "Trumpoji proza",
        spalva: "#6a5a2a",
        trumpai: "Keliaujantis siuvėjas trylika vakarų pasakoja, ką matė Lietuvoje.",
        aprasymas: "Po ilgų klajonių į tėvų namus grįžęs siuvėjas Juzė Viskantas vakarais pasakoja apie aplankytus Žemaitijos ir Aukštaitijos kraštus. Jo pasakojimuose – vestuvių papročiai, žaidimai, dainos, valgiai ir linksmi nutikimai. Knyga yra gyvas XIX a. Lietuvos kaimo buities paveikslas."
      }
    ]
  },
  {
    vardas: "Vincas Pietaris",
    gyvenimas: "1850–1902",
    salis: "Lietuva",
    apie: "Gydytojas ir rašytojas, pirmojo lietuvių istorinio romano autorius.",
    knygos: [
      {
        pavadinimas: "Algimantas",
        originalas: "Algimantas",
        metai: "1904–1905",
        zanras: "Romanas",
        spalva: "#4a3a3a",
        trumpai: "Pirmasis lietuvių istorinis nuotykių romanas apie XIII a. Lietuvą.",
        aprasymas: "Visas pavadinimas – „Algimantas, arba Lietuviai XIII šimtmetyje“. Romane vaizduojama, kaip susiskaldžiusiose lietuvių žemėse kuriasi viena valdžia, pasakojama apie kunigaikščių tarpusavio kovas ir karo žygius. Romantiškas, idealizuotas senosios Lietuvos vaizdas, parašytas 1900–1902 m. ir išleistas jau po autoriaus mirties."
      }
    ]
  },
  {
    vardas: "Vincas Kudirka",
    gyvenimas: "1858–1899",
    salis: "Lietuva",
    apie: "Gydytojas, „Varpo“ redaktorius, „Tautiškos giesmės“ autorius ir aštrus satyrikas.",
    knygos: [
      {
        pavadinimas: "Viršininkai",
        originalas: "Viršininkai",
        metai: "1895",
        zanras: "Trumpoji proza",
        spalva: "#5a2a2a",
        trumpai: "Satyra apie kyšininką caro valdininką Lietuvos apskrityje.",
        aprasymas: "Neišsilavinęs ir godus valdininkas Kruglodurovas paskiriamas apskrities viršininku ir ima lupti kyšius iš visų, kas tik pasitaiko. Kudirka negailestingai išjuokia carinės administracijos savivalę, girtuoklystę ir kvailumą. Viena pirmųjų ir aštriausių lietuvių satyrų."
      }
    ]
  },
  {
    vardas: "Kazys Binkis",
    gyvenimas: "1893–1942",
    salis: "Lietuva",
    apie: "Poetas ir dramaturgas, avangardinio „Keturių vėjų“ sąjūdžio vadas.",
    knygos: [
      {
        pavadinimas: "100 pavasarių",
        originalas: "100 pavasarių",
        metai: "1923",
        zanras: "Poezija",
        spalva: "#3a7a4a",
        trumpai: "Žaismingas, maištingas avangardo eilėraščių rinkinys.",
        aprasymas: "Rinkinyje pavasaris šėlsta kaip jaunystė: vėjai, saulė ir upės kalba šnekamąja, kartais tyčia šiurkščia kalba. Binkis laužo tradicinę eilėdarą ir šaiposi iš sentimentalios poezijos. Knyga tapo lietuvių futurizmo ir ekspresionizmo ženklu."
      }
    ]
  },
  {
    vardas: "Juozas Grušas",
    gyvenimas: "1901–1986",
    salis: "Lietuva",
    apie: "Prozininkas ir dramaturgas, istorinių ir moralinių dramų kūrėjas.",
    knygos: [
      {
        pavadinimas: "Herkus Mantas",
        originalas: "Herkus Mantas",
        metai: "1957",
        zanras: "Drama",
        spalva: "#3a3a5a",
        trumpai: "Prūsų sukilimo vadas tarp savo tautos ir jį išauklėjusių kryžiuočių.",
        aprasymas: "Jaunystėje kryžiuočių paimtas įkaitu ir Magdeburge išmokslintas Herkus Mantas grįžta ir stoja vadovauti didžiajam prūsų sukilimui. Jis kovoja ne tik su Ordinu, bet ir su savųjų žiaurumu bei senųjų žynių valdžia. Tragedija apie laisvę, kuri pareikalauja visko."
      }
    ]
  },
  {
    vardas: "Kazys Boruta",
    gyvenimas: "1905–1965",
    salis: "Lietuva",
    apie: "Poetas ir prozininkas, maištingos dvasios rašytojas.",
    knygos: [
      {
        pavadinimas: "Baltaragio malūnas",
        originalas: "Baltaragio malūnas",
        metai: "1945",
        zanras: "Romanas",
        spalva: "#5a6a4a",
        trumpai: "Malūnininko sandėris su velniu ir jo dukters Jurgos meilė.",
        aprasymas: "Malūnininkas Baltaragis kadaise neapgalvotai pažadėjo pelkių velniui Pinčukui tai, ko dar neturėjo, – būsimą dukterį. Užaugusią gražuolę Jurgą pamilsta Girdvainis su savo obuolmušiais žirgais, bet velnias visaip trukdo jų laimei. Tautosakos motyvais sukurta poetiška ir liūdna pasaka suaugusiems."
      }
    ]
  },
  {
    vardas: "Bernardas Brazdžionis",
    gyvenimas: "1907–2002",
    salis: "Lietuva",
    apie: "Poetas, išeivijoje tapęs tautos laisvės vilties balsu.",
    knygos: [
      {
        pavadinimas: "Per pasaulį keliauja žmogus",
        originalas: "Per pasaulį keliauja žmogus",
        metai: "1943",
        zanras: "Poezija",
        spalva: "#4a5a7a",
        trumpai: "Poeto rinktinė apie žmogų – keleivį tarp žemės ir amžinybės.",
        aprasymas: "Rinktinėje sudėti geriausi ankstesnių knygų eilėraščiai, kuriuose biblinė intonacija jungiasi su lietuviško peizažo vaizdais. Žmogus čia – piligrimas, einantis per laikiną pasaulį ir ieškantis Dievo. Knyga buvo itin populiari karo metais."
      }
    ]
  },
  {
    vardas: "Henrikas Radauskas",
    gyvenimas: "1910–1970",
    salis: "Lietuva",
    apie: "Poetas estetas, tvirtinęs tikįs ne pasauliu, o pasaka.",
    knygos: [
      {
        pavadinimas: "Fontanas",
        originalas: "Fontanas",
        metai: "1935",
        zanras: "Poezija",
        spalva: "#2a6a7a",
        trumpai: "Pirmasis rinkinys, kuriame kasdienybė virsta spalvingu reginiu.",
        aprasymas: "Radausko eilėraščiuose medžiai, lietus, miesto gatvės ir kambario daiktai atgyja tarsi teatro scenoje. Poetas vengia išpažinčių ir šūkių – jam svarbiausia tiksli forma, netikėta metafora ir žaismė. Rinkinys išsiskyrė iš to meto lietuvių lyrikos savo europietišku santūrumu."
      }
    ]
  },
  {
    vardas: "Marius Katiliškis",
    gyvenimas: "1914–1980",
    salis: "Lietuva",
    apie: "Išeivijos prozininkas, šiaurės Lietuvos gamtos ir kaimo dainius.",
    knygos: [
      {
        pavadinimas: "Miškais ateina ruduo",
        originalas: "Miškais ateina ruduo",
        metai: "1957",
        zanras: "Romanas",
        spalva: "#7a5a2a",
        trumpai: "Jauno darbininko Tiliaus meilė ir aistra miškų apsuptame kaime.",
        aprasymas: "Tarpukario šiaurės Lietuvoje kertami miškai ir sausinamos pelkės, o senasis kaimo gyvenimas keičiasi. Darbininkas Tilius blaškosi tarp tyros meilės Agnei ir aistros ūkininko Doveikos žmonai Monikai. Sodria kalba parašytas romanas apie gamtos ir žmogaus stichiją."
      }
    ]
  },
  {
    vardas: "Jonas Avyžius",
    gyvenimas: "1922–1999",
    salis: "Lietuva",
    apie: "Prozininkas, rašęs apie Lietuvos kaimą ir karo metų pasirinkimus.",
    knygos: [
      {
        pavadinimas: "Sodybų tuštėjimo metas",
        originalas: "Sodybų tuštėjimo metas",
        metai: "1970",
        zanras: "Romanas",
        spalva: "#4a4a3a",
        trumpai: "Lietuvos miestelis nacių okupacijos metais ir žmonių pasirinkimai.",
        aprasymas: "Mokytojas Gediminas Džiugas mėgina likti nuošalyje nuo politikos, o jo draugas Adomas Vainoras tampa policijos viršininku. Okupacija nepalieka vietos neutralumui – kiekvienas turi apsispręsti. Platus psichologinis romanas apie kaltę, prisitaikymą ir sąžinę."
      }
    ]
  },
  {
    vardas: "Icchokas Meras",
    gyvenimas: "1934–2014",
    salis: "Lietuva",
    apie: "Kelmėje gimęs rašytojas, vaikystėje išgelbėtas nuo Holokausto, lietuviškai rašęs ir gyvendamas Izraelyje.",
    knygos: [
      {
        pavadinimas: "Lygiosios trunka akimirką",
        originalas: "Lygiosios trunka akimirką",
        metai: "1963",
        zanras: "Romanas",
        spalva: "#2a2a2a",
        trumpai: "Geto jaunuolis lošia šachmatų partiją, nuo kurios priklauso gyvybės.",
        aprasymas: "Geto komendantas Šogeris pasiūlo jaunam šachmatininkui Izaokui Lipmanui partiją: laimėjęs jis mirs, bet geto vaikai liks, pralaimėjęs – gyvens, bet vaikus išveš. Vienintelė išeitis – lygiosios. Tarp ėjimų pasakojama apie Izaoko meilę Esterai ir apie jo tėvo Abraomo vaikų likimus. Trumpas, baladę primenantis romanas apie orumą."
      }
    ]
  },
  {
    vardas: "Romualdas Granauskas",
    gyvenimas: "1939–2014",
    salis: "Lietuva",
    apie: "Prozininkas, rašęs apie nykstantį žemaičių kaimą ir senųjų žmonių pasaulį.",
    knygos: [
      {
        pavadinimas: "Gyvenimas po klevu",
        originalas: "Gyvenimas po klevu",
        metai: "1988",
        zanras: "Trumpoji proza",
        spalva: "#6a6a2a",
        trumpai: "Senosios Kairienės akimis – vienos kaimo šeimos ir viso kaimo nykimas.",
        aprasymas: "Kairių sodybos viduryje auga klevas, po kuriuo prabėgo visas šeimos gyvenimas. Senoji Kairienė prisimena laikus, kai viskas sukosi apie žemę, duoną ir darbą, ir mato, kaip kolektyvizacija bei kėlimas į gyvenvietes tą pasaulį sugriovė. Apysaka apie kolūkinio kaimo fizinį ir moralinį nuosmukį ir nutrūkusį kartų ryšį."
      }
    ]
  },
  {
    vardas: "Bronius Radzevičius",
    gyvenimas: "1940–1980",
    salis: "Lietuva",
    apie: "Prozininkas, lietuvių psichologinės prozos atnaujintojas.",
    knygos: [
      {
        pavadinimas: "Priešaušrio vieškeliai",
        originalas: "Priešaušrio vieškeliai",
        metai: "1979–1985",
        zanras: "Romanas",
        spalva: "#3a4a4a",
        trumpai: "Juozo Daukinčio kelias iš pokario kaimo į miestą ir į save.",
        aprasymas: "Pirmoje dalyje – jautraus berniuko vaikystė pokario kaime, antroje – suaugusio inteligento blaškymasis mieste. Juozas Daukintis ieško prasmės, meilės ir tikrumo, bet vis labiau jaučiasi praradęs šaknis. Antroji romano dalis išleista po autoriaus mirties."
      }
    ]
  },
  {
    vardas: "Ričardas Gavelis",
    gyvenimas: "1950–2002",
    salis: "Lietuva",
    apie: "Prozininkas, vienas ryškiausių lietuvių postmodernistų.",
    knygos: [
      {
        pavadinimas: "Vilniaus pokeris",
        originalas: "Vilniaus pokeris",
        metai: "1989",
        zanras: "Romanas",
        spalva: "#3a2a3a",
        trumpai: "Sovietinis Vilnius keturių pasakotojų akimis – tamsus ir haliucinuojantis.",
        aprasymas: "Buvęs lagerių kalinys Vytautas Vargalys įsitikinęs, kad žmones valdo slapta jėga, kurią jis vadina „Jie“. Tuos pačius įvykius paeiliui perpasakoja dar trys balsai, ir tiesa vis labiau slysta iš rankų. Atviras, šokiruojantis romanas apie sistemos suluošintą žmogų ir miestą."
      }
    ]
  },

  // ── Pasaulio klasika (antras papildymas) ──
  {
    vardas: "Ovidijus",
    gyvenimas: "43 pr. Kr. – 17 m. e.",
    salis: "Senovės Roma",
    apie: "Romos poetas, gyvenimo pabaigoje ištremtas prie Juodosios jūros.",
    knygos: [
      {
        pavadinimas: "Metamorfozės",
        originalas: "Metamorphoses",
        metai: "apie 8 m. e.",
        zanras: "Poezija",
        spalva: "#7a5a3a",
        trumpai: "Mitų apie virsmus rinkinys – nuo pasaulio sukūrimo iki Cezario.",
        aprasymas: "Poemoje sujungta apie pustrečio šimto graikų ir romėnų mitų, kuriuose dievai ir žmonės virsta medžiais, žvaigždėmis, gyvūnais. Čia pasakojama apie Dafnę, Narcizą, Orfėją ir Euridikę, Pigmalioną, Ikarą. Kūrinys šimtmečius buvo svarbiausias antikinės mitologijos šaltinis Europos menui."
      }
    ]
  },
  {
    vardas: "Voltaire'as",
    gyvenimas: "1694–1778",
    salis: "Prancūzija",
    apie: "Prancūzų Apšvietos filosofas ir rašytojas, fanatizmo ir prietarų kritikas.",
    knygos: [
      {
        pavadinimas: "Kandidas, arba Optimizmas",
        originalas: "Candide, ou l'Optimisme",
        metai: "1759",
        zanras: "Trumpoji proza",
        spalva: "#8a6a3a",
        trumpai: "Naivus jaunuolis patiria visas pasaulio nelaimes ir vis dar mokomas, kad viskas gerai.",
        aprasymas: "Išvarytas iš pilies, Kandidas keliauja per karus, žemės drebėjimą, inkvizicijos laužus ir Eldoradą, o jo mokytojas Panglosas kartoja, kad gyvename geriausiame iš pasaulių. Kandi filosofinė apysaka išjuokia aklą optimizmą ir baigiasi garsiu patarimu dirbti savo sodą."
      }
    ]
  },
  {
    vardas: "Friedrichas Schilleris",
    gyvenimas: "1759–1805",
    salis: "Vokietija",
    apie: "Vokiečių poetas, dramaturgas ir istorikas, Goethe's bičiulis.",
    knygos: [
      {
        pavadinimas: "Plėšikai",
        originalas: "Die Räuber",
        metai: "1781",
        zanras: "Drama",
        spalva: "#5a2a3a",
        trumpai: "Du broliai – kilnus maištininkas ir klastingas intrigantas.",
        aprasymas: "Brolio Franco apšmeižtas ir tėvo atstumtas Karlas Moras tampa plėšikų gaujos vadu ir svajoja keršyti neteisingai visuomenei. Tuo metu Francas siekia užvaldyti tėvo turtą ir Karlo mylimąją Amaliją. „Audros ir veržimosi“ epochos drama apie laisvę ir jos kainą."
      }
    ]
  },
  {
    vardas: "Adomas Mickevičius",
    gyvenimas: "1798–1855",
    salis: "Lenkija",
    apie: "Naugarduko krašte gimęs, Vilniuje studijavęs, lenkiškai rašęs romantizmo poetas, Lietuvą vadinęs savo tėvyne.",
    knygos: [
      {
        pavadinimas: "Ponas Tadas",
        originalas: "Pan Tadeusz",
        metai: "1834",
        zanras: "Poezija",
        spalva: "#3a6a3a",
        trumpai: "Bajorų gyvenimas Lietuvoje Napoleono žygio išvakarėse.",
        aprasymas: "1811–1812 m. Soplicų dvare verda dviejų giminių ginčas dėl pilies, jaunasis Tadas įsimyli Zosę, o paslaptingas vienuolis Robakas rengia sukilimą. Poema su ilgesiu piešia medžiokles, puotas ir papročius ir prasideda garsiu kreipiniu į Lietuvą – tėvynę."
      }
    ]
  },
  {
    vardas: "Henrikas Ibsenas",
    gyvenimas: "1828–1906",
    salis: "Norvegija",
    apie: "Norvegų dramaturgas, moderniosios realistinės dramos kūrėjas.",
    knygos: [
      {
        pavadinimas: "Lėlių namai",
        originalas: "Et dukkehjem",
        metai: "1879",
        zanras: "Drama",
        spalva: "#6a3a4a",
        trumpai: "Nora supranta, kad santuokoje buvo tik graži lėlė.",
        aprasymas: "Kad išgelbėtų sergantį vyrą, Nora kadaise slapta pasiskolino pinigų, padirbusi parašą. Kai paslaptis iškyla, vyras Torvaldas rūpinasi tik savo reputacija. Nora išeina iš namų, trenkdama durimis – ši pabaiga sukrėtė to meto Europą."
      }
    ]
  },
  {
    vardas: "Lewisas Carrollis",
    gyvenimas: "1832–1898",
    salis: "Anglija",
    apie: "Oksfordo matematikas Charlesas Dodgsonas, rašęs slapyvardžiu.",
    knygos: [
      {
        pavadinimas: "Alisa Stebuklų šalyje",
        originalas: "Alice's Adventures in Wonderland",
        metai: "1865",
        zanras: "Trumpoji proza",
        spalva: "#3a6a9a",
        trumpai: "Mergaitė įkrenta į triušio olą ir patenka į nesąmonių pasaulį.",
        aprasymas: "Sekdama paskui Baltąjį Triušį, Alisa tai didėja, tai mažėja, geria arbatą su Skrybėliumi ir Kovo Kiškiu, kalbasi su Češyro katinu ir lošia kroketą su Širdžių Karaliene. Pasaka pilna logikos žaidimų ir kalbos pokštų, kuriuos mėgsta ir vaikai, ir suaugusieji."
      }
    ]
  },
  {
    vardas: "Émile'is Zola",
    gyvenimas: "1840–1902",
    salis: "Prancūzija",
    apie: "Prancūzų rašytojas, natūralizmo teoretikas ir Rugonų-Makarų ciklo autorius.",
    knygos: [
      {
        pavadinimas: "Žerminalis",
        originalas: "Germinal",
        metai: "1885",
        zanras: "Romanas",
        spalva: "#2a2a2a",
        trumpai: "Angliakasių streikas šiaurės Prancūzijos kasyklose.",
        aprasymas: "Bedarbis mašinistas Etjenas Lantjė įsidarbina kasykloje ir pamato nežmoniškas angliakasių darbo ir gyvenimo sąlygas. Jis sukelia streiką, kuris virsta badu, smurtu ir tragedija. Romanas rodo ir neviltį, ir būsimų permainų daigus."
      }
    ]
  },
  {
    vardas: "Guy de Maupassant'as",
    gyvenimas: "1850–1893",
    salis: "Prancūzija",
    apie: "Prancūzų novelės meistras, Flaubert'o mokinys.",
    knygos: [
      {
        pavadinimas: "Mielasis draugas",
        originalas: "Bel-Ami",
        metai: "1885",
        zanras: "Romanas",
        spalva: "#7a3a4a",
        trumpai: "Gražus karjeristas kopia į Paryžiaus viršūnes per moterų širdis.",
        aprasymas: "Buvęs puskarininkis Žoržas Diuru neturi nei pinigų, nei talento, bet moka patikti moterims. Naudodamasis meilužėmis ir žmonomis, jis iškyla žurnalistikoje ir politikoje. Ironiškas romanas apie spaudos, pinigų ir valdžios sąjungą."
      }
    ]
  },
  {
    vardas: "Knutas Hamsunas",
    gyvenimas: "1859–1952",
    salis: "Norvegija",
    apie: "Norvegų rašytojas, 1920 m. Nobelio premijos laureatas, psichologinės prozos novatorius.",
    knygos: [
      {
        pavadinimas: "Badas",
        originalas: "Sult",
        metai: "1890",
        zanras: "Romanas",
        spalva: "#5a5a3a",
        trumpai: "Badaujantis jaunas rašytojas klaidžioja po Kristianiją.",
        aprasymas: "Bevardis pasakotojas mėgina pragyventi iš straipsnių, bet vis giliau grimzta į skurdą. Badas keičia jo nuotaikas, sukelia kliedesius, išdidumo ir pažeminimo priepuolius. Romanas beveik be siužeto, visas sutelktas į sąmonės virpesius."
      }
    ]
  },
  {
    vardas: "Marcelis Proustas",
    gyvenimas: "1871–1922",
    salis: "Prancūzija",
    apie: "Prancūzų rašytojas, septynių tomų ciklo „Prarasto laiko beieškant“ autorius.",
    knygos: [
      {
        pavadinimas: "Svano pusėje",
        originalas: "Du côté de chez Swann",
        metai: "1913",
        zanras: "Romanas",
        spalva: "#8a7a5a",
        trumpai: "Arbatoje pamirkyto pyragaičio skonis prikelia vaikystės pasaulį.",
        aprasymas: "Pirmasis ciklo tomas pasakoja apie pasakotojo vaikystę Kombrė miestelyje ir apie Svano pavydžią meilę Odetai. Nevalingas prisiminimas čia svarbesnis už įvykius: kvapas ar garsas sugrąžina visą prarastą laiką. Ilgi, vingiuoti sakiniai tapo Prousto stiliaus ženklu."
      }
    ]
  },
  {
    vardas: "Jamesas Joyce'as",
    gyvenimas: "1882–1941",
    salis: "Airija",
    apie: "Airių rašytojas, modernistinio romano novatorius.",
    knygos: [
      {
        pavadinimas: "Ulisas",
        originalas: "Ulysses",
        metai: "1922",
        zanras: "Romanas",
        spalva: "#2a5a5a",
        trumpai: "Viena Dublino diena – 1904 m. birželio 16-oji.",
        aprasymas: "Skelbimų agentas Leopoldas Blumas, jo žmona Moli ir jaunas mokytojas Stivenas Dedalas nugyvena eilinę dieną, kurios epizodai atliepia Homero „Odisėją“. Kiekvienas skyrius parašytas vis kitu stiliumi, o knyga baigiasi garsiuoju Moli vidiniu monologu."
      }
    ]
  },
  {
    vardas: "Virginia Woolf",
    gyvenimas: "1882–1941",
    salis: "Anglija",
    apie: "Anglų rašytoja ir eseistė, sąmonės srauto prozos meistrė.",
    knygos: [
      {
        pavadinimas: "Ponia Delovėj",
        originalas: "Mrs Dalloway",
        metai: "1925",
        zanras: "Romanas",
        spalva: "#7a8a6a",
        trumpai: "Viena Londono diena, kai Klarisa rengia pokylį.",
        aprasymas: "Birželio rytą Klarisa Delovėj išeina pirkti gėlių vakaro pokyliui ir mintimis grįžta į jaunystę. Tą pačią dieną po miestą klaidžioja karo traumuotas Septimas Smitas. Dvi niekada nesusitinkančios linijos susipina į romaną apie laiką, atmintį ir vienatvę."
      }
    ]
  },
  {
    vardas: "Aldousas Huxley",
    gyvenimas: "1894–1963",
    salis: "Anglija",
    apie: "Anglų rašytojas ir eseistas, satyrikas ir mąstytojas.",
    knygos: [
      {
        pavadinimas: "Puikus naujas pasaulis",
        originalas: "Brave New World",
        metai: "1932",
        zanras: "Romanas",
        spalva: "#3a7a8a",
        trumpai: "Ateities visuomenė, kurioje visi laimingi ir niekas nelaisvas.",
        aprasymas: "Žmonės čia auginami mėgintuvėliuose, suskirstyti į kastas ir nuo vaikystės mokomi mylėti savo vietą, o nerimą malšina narkotikas soma. Į šį pasaulį patenka rezervate užaugęs Laukinis, skaitęs Shakespeare'ą. Distopija apie patogumą, už kurį sumokama laisve."
      }
    ]
  },
  {
    vardas: "Williamas Faulkneris",
    gyvenimas: "1897–1962",
    salis: "JAV",
    apie: "Amerikos Pietų rašytojas, 1949 m. Nobelio premijos laureatas.",
    knygos: [
      {
        pavadinimas: "Triukšmas ir įniršis",
        originalas: "The Sound and the Fury",
        metai: "1929",
        zanras: "Romanas",
        spalva: "#5a3a2a",
        trumpai: "Senos Pietų šeimos žlugimas keturių pasakotojų akimis.",
        aprasymas: "Kompsonų šeimos istoriją pasakoja trys broliai – protiškai neįgalus Bendžis, save graužiantis Kventinas ir piktas Džeisonas, o pabaigoje – pats autorius. Visų mintys sukasi apie seserį Kedę. Sudėtingos sandaros romanas apie laiką ir praradimą."
      }
    ]
  },
  {
    vardas: "Johnas Steinbeckas",
    gyvenimas: "1902–1968",
    salis: "JAV",
    apie: "Amerikiečių rašytojas, 1962 m. Nobelio premijos laureatas, paprastų darbo žmonių vaizduotojas.",
    knygos: [
      {
        pavadinimas: "Rūstybės kekės",
        originalas: "The Grapes of Wrath",
        metai: "1939",
        zanras: "Romanas",
        spalva: "#7a4a2a",
        trumpai: "Nuskurdusi fermerių šeima keliauja į Kaliforniją.",
        aprasymas: "Didžiosios depresijos ir sausrų metais Džoudų šeima netenka žemės Oklahomoje ir senu sunkvežimiu leidžiasi į Vakarus ieškoti darbo. Vietoj pažadėtos gausos jų laukia išnaudojimas ir badas. Romanas apie orumą ir solidarumą nevilties metu."
      },
      {
        pavadinimas: "Apie peles ir žmones",
        originalas: "Of Mice and Men",
        metai: "1937",
        zanras: "Trumpoji proza",
        spalva: "#6a6a4a",
        trumpai: "Dviejų klajojančių darbininkų draugystė ir svajonė apie savo žemę.",
        aprasymas: "Sumanus Džordžas globoja stiprų, bet vaikiško proto Lenį, ir abu svajoja apie nuosavą ūkelį su triušiais. Rančoje, kur jie įsidarbina, Lenio nevaldoma jėga atneša nelaimę. Trumpa, skaudi apysaka apie draugystę ir vienatvę."
      }
    ]
  },
  {
    vardas: "Williamas Goldingas",
    gyvenimas: "1911–1993",
    salis: "Anglija",
    apie: "Anglų rašytojas, 1983 m. Nobelio premijos laureatas.",
    knygos: [
      {
        pavadinimas: "Musių valdovas",
        originalas: "Lord of the Flies",
        metai: "1954",
        zanras: "Romanas",
        spalva: "#3a5a3a",
        trumpai: "Negyvenamoje saloje atsidūrę berniukai pamažu sulaukėja.",
        aprasymas: "Po lėktuvo katastrofos be suaugusiųjų likę mokiniai iš pradžių kuria tvarką: renka vadą, kūrena signalinį laužą. Netrukus baimė ir valdžios troškimas suskaldo juos į dvi stovyklas, ir prasideda medžioklė. Romanas klausia, kiek civilizacija iš tiesų laiko žmogų."
      }
    ]
  },
  {
    vardas: "Borisas Pasternakas",
    gyvenimas: "1890–1960",
    salis: "Rusija",
    apie: "Rusų poetas ir prozininkas, 1958 m. Nobelio premijos laureatas, priverstas jos atsisakyti.",
    knygos: [
      {
        pavadinimas: "Daktaras Živaga",
        originalas: "Доктор Живаго",
        metai: "1957",
        zanras: "Romanas",
        spalva: "#5a6a7a",
        trumpai: "Gydytojo ir poeto likimas revoliucijos ir pilietinio karo sūkuryje.",
        aprasymas: "Jurijus Živaga nori tik gydyti, rašyti ir mylėti, bet istorija išblaško jo šeimą ir vis suveda bei išskiria su Lara. Romanas rodo revoliuciją ne kaip triumfą, o kaip jėgą, laužančią atskiro žmogaus gyvenimą. Pirmą kartą išleistas Italijoje, SSRS ilgai draustas."
      }
    ]
  },
  {
    vardas: "Aleksandras Solženicynas",
    gyvenimas: "1918–2008",
    salis: "Rusija",
    apie: "Rusų rašytojas, lagerių kalinys, 1970 m. Nobelio premijos laureatas.",
    knygos: [
      {
        pavadinimas: "Viena Ivano Denisovičiaus diena",
        originalas: "Один день Ивана Денисовича",
        metai: "1962",
        zanras: "Trumpoji proza",
        spalva: "#6a6a6a",
        trumpai: "Eilinė sovietinio lagerio kalinio diena nuo kėlimosi iki gulimo.",
        aprasymas: "Valstietis Ivanas Šuchovas, nuteistas už tai, kad buvo patekęs į vokiečių nelaisvę, stengiasi išgyventi dar vieną dieną: gauti papildomą dubenėlį sriubos, nesušalti, neįkliūti. Ramus, dalykiškas pasakojimas pirmą kartą atvirai parodė Gulagą sovietų skaitytojams."
      }
    ]
  },
  {
    vardas: "Kurtas Vonnegutas",
    gyvenimas: "1922–2007",
    salis: "JAV",
    apie: "Amerikiečių rašytojas, juodojo humoro ir satyrinės fantastikos meistras.",
    knygos: [
      {
        pavadinimas: "Skerdykla Nr. 5",
        originalas: "Slaughterhouse-Five",
        metai: "1969",
        zanras: "Romanas",
        spalva: "#8a4a3a",
        trumpai: "Kareivis, „atitrūkęs nuo laiko“, vis grįžta į Drezdeno bombardavimą.",
        aprasymas: "Bilis Piligrimas šokinėja per savo gyvenimo akimirkas: karo nelaisvę, Drezdeno sunaikinimą, kurį išgyveno skerdyklos rūsyje, ir pagrobimą į Tralfamadoro planetą. Autorius pats buvo Drezdeno liudininkas. Antikarinis romanas, kuriame kiekvieną mirtį palydi frazė „Tokie dalykai“."
      }
    ]
  },
  {
    vardas: "Harper Lee",
    gyvenimas: "1926–2016",
    salis: "JAV",
    apie: "Amerikiečių rašytoja iš Alabamos, išgarsėjusi vienu romanu.",
    knygos: [
      {
        pavadinimas: "Nežudyk strazdo giesmininko",
        originalas: "To Kill a Mockingbird",
        metai: "1960",
        zanras: "Romanas",
        spalva: "#4a6a5a",
        trumpai: "Mergaitės akimis – teismas, kuriame jos tėvas gina juodaodį.",
        aprasymas: "Ketvirtojo dešimtmečio Alabamos miestelyje advokatas Finčas imasi ginti nekaltai apkaltintą juodaodį. Jo smalsi duktė, pasakojanti šią istoriją, ir vyresnis sūnus pirmą kartą susiduria su rasine neapykanta ir mokosi suprasti kitą žmogų. Šiltas ir skaudus romanas apie sąžinę."
      }
    ]
  },
  {
    vardas: "Kenas Kesey",
    gyvenimas: "1935–2001",
    salis: "JAV",
    apie: "Amerikiečių rašytojas, kontrkultūros kartos balsas.",
    knygos: [
      {
        pavadinimas: "Skrydis virš gegutės lizdo",
        originalas: "One Flew Over the Cuckoo's Nest",
        metai: "1962",
        zanras: "Romanas",
        spalva: "#3a6a6a",
        trumpai: "Maištininkas Makmerfis psichiatrijos ligoninėje stoja prieš vyresniąją seserį.",
        aprasymas: "Kad išvengtų darbų kalėjime, Rendlas Makmerfis apsimeta bepročiu ir patenka į skyrių, kurį geležine tvarka valdo sesuo Rečed. Jo juokas ir nepaklusnumas pažadina įbaugintus ligonius. Istoriją pasakoja nebyliu apsimetantis indėnas Vadas Bromdenas."
      }
    ]
  }
];
