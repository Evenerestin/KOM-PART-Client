const nonProfitData = [
  {
    img: "/documents/nonProfit/skany-01.jpg",
    alt: "Podizękowania od Grupy Misiaków Przedszkola nr 5 w Żorach",
  },
  {
    img: "/documents/nonProfit/skany-02.jpg",
    alt: 'Dyplom uhonorowania tytułem Ambasadora Fundacji "Dr Clown" 2017',
  },
  {
    img: "/documents/nonProfit/skany-03.jpg",
    alt: "Podziękowania Stowarzyszenia PRO MUNDI za wsparcie",
  },
  {
    img: "/documents/nonProfit/skany-04.jpg",
    alt: "Wsparcie Biblioteki Miejskiej w Żorach",
  },
  {
    img: "/documents/nonProfit/skany-05.jpg",
    alt: "Podziękowanie od Zespołu Szkół Nr 8 w Żorach za wsparcie w organizacji Żorskiego Konkursu Plastycznego - Anioł 2015",
  },
  {
    img: "/documents/nonProfit/skany-06.jpg",
    alt: "Podziękowanie od Zespołu Szkół Nr 8 w Żorach za wsparcie w organizacji Żorskiego Konkursu Plastycznego - Anioł 2019",
  },
  {
    img: "/documents/nonProfit/skany-08.jpg",
    alt: "Podziękowanie od Szkoły Podstawowej Nr 16 z Oddziałami Integracyjnymi w Żorach za wsparcie w organizacji Żorskiego Konkursu Plastycznego - Anioł 2020",
  },
  {
    img: "/documents/nonProfit/skany-09.jpg",
    alt: "Podziękowanie od Szkoły Podstawowej Nr 3 w Żorach za pomoc w organizacji Szkolnego Konkursu Informatycznego 2018",
  },
  {
    img: "/documents/nonProfit/skany-10.jpg",
    alt: 'Podziękowanie za wsparcie IV Charytatywnego Biegu Nadziei na rzecz "Hospicjum im. Jana Pawła II" w Żorach 2022',
  },
  {
    img: "/documents/nonProfit/skany-11.jpg",
    alt: "Podziękowanie od Szkoły Podstawowej Nr 16 z Oddziałami Integracyjnymi w Żorach za wsparcie w organizacji Żorskiego Konkursu Plastycznego - Anioł 2017",
  },
  {
    img: "/documents/nonProfit/skany-12.jpg",
    alt: "Życzenia świąteczne od Zabytkowej Straży Pożarnej Baranowice oraz Ochotniczej Straży Pożarnej Rój",
  },
  {
    img: "/documents/nonProfit/skany-13.jpg",
    alt: "Podziękowania za wsparcie Charytatywnego Turnieju Strażackiego w Piłce Siatkowej 2018",
  },
  {
    img: "/documents/nonProfit/skany-14.jpg",
    alt: "Uhonorowanie tytułem Ambasadora Fundacji Dr Clown 2015",
  },
  {
    img: "/documents/nonProfit/skany-15.jpg",
    alt: "Uhonorowanie tytułem Ambasadora Fundacji Dr Clown 2016",
  },
  {
    img: "/documents/nonProfit/skany-16.jpg",
    alt: "Podziękowanie od Zespołu Szkół Nr 8 w Żorach za wsparcie w organizacji Żorskiego Konkursu Plastycznego - Anioł 2016",
  },
  {
    img: "/documents/nonProfit/skany-17.jpg",
    alt: "Podziękowanie od Zespołu Szkół Nr 8 w Żorach za wsparcie w organizacji Żorskiego Konkursu Plastycznego - Anioł 2013",
  },
  {
    img: "/documents/nonProfit/skany-18.jpg",
    alt: "Podziękowanie za wsparcie w zorganizowaniu festynu dla dzieci w przedszkolu z okazji Dnia Dziecka 2019",
  },
  {
    img: "/documents/nonProfit/skany-19.jpg",
    alt: "Podziękowanie od Zespołu Szkół Nr 8 w Żorach za wsparcie w organizacji Żorskiego Konkursu Plastycznego - Anioł 2014",
  },
  {
    img: "/documents/nonProfit/skany-20.jpg",
    alt: "Podziękowanie od Centrum Kształcenia Zawodowego w Jastrzębiu-Zdroju za organizację praktyk zawodowych dla uczniów 2020",
  },
  {
    img: "/documents/nonProfit/skany-21.jpg",
    alt: "Podziękowanie za wsparcie Charytatywnego Turnieju Strażackiego 2019",
  },
  {
    img: "/documents/nonProfit/skany-22.jpg",
    alt: "Podziękowanie od Szkoły Podstawowej Nr 3 za pomoc finansową w zakupie nagród dla wyróżnionych uczniów w roku szkolnym 2012/2013",
  },
  {
    img: "/documents/nonProfit/skany-23.jpg",
    alt: 'Podziękowanie od Miejskiej Biblioteki Publicznej w Żorach za pomoc w organizacji Gry Miejskiej pod hasłem "W poszukiwaniu zaginionej receptury" 2016',
  },
  {
    img: "/documents/nonProfit/skany-24.jpg",
    alt: "Zdjęcie młodzieżowej drużyny piłkarskiej w koszulkach z logo Kom-Part 2006",
  },
  {
    img: "/documents/nonProfit/skany-25.jpg",
    alt: "Podziękowanie od Organizatorów III Konkursu Piosenki Poetycko-Aktorskiej za pomoc finansową w zakupie nagród 2008",
  },
  {
    img: "/documents/nonProfit/skany-26.jpg",
    alt: "Podziękowanie od Przedszkola Nr 4 za pomoc finansową w organizacji festynu rodzinnego 2010",
  },
  {
    img: "/documents/nonProfit/skany-27.jpg",
    alt: 'Podizękowanie od Miejskiego Ośrodka Pomocy Społecznej w orgnizacji Pikniku Integracyjnego "Piknik piracki" 2008',
  },
  {
    img: "/documents/nonProfit/skany-28.jpg",
    alt: "Podziękowanie od Stowarzyszenia Pomocy Dzieciom za pomoc w kompletowaniu sprzętu komputerowego dla chorej dziewczynki i rodzeństwa z ubogiej rodziny.",
  },
  {
    img: "/documents/nonProfit/skany-29.jpg",
    alt: 'Dyplom dla KS Żory za zajęcie 1 miejsca w VIII Ogólnopolskim Turnieju Piłki Nożnej dzieci do lat 13-stu "Pilarskie Talenty 2006" im. Wojciecha Pędziaka',
  },
  {
    img: "/documents/nonProfit/skany-30.jpg",
    alt: "Podziękowanie za wsparcie finansowe rodziny zastępczej pełniącej funkcję pogotowia rodzinnego Miasta Żory 2011",
  },
  {
    img: "/documents/nonProfit/skany-31.jpg",
    alt: "Podziękowanie za wsparcie i pomoc w organizacji II Miejskiego Konkursu Plastycznego Anioł 2012",
  },
  {
    img: "/documents/nonProfit/skany-32.jpg",
    alt: "Dyplom dla KS Żory za zajęcie IV miejsca w Halowym Turnieju Piłki Nożnej o Puchar Prezesa Szkółki Piłkarskiej MOSiR Jastrzębie 2007",
  },
  {
    img: "/documents/nonProfit/skany-33.jpg",
    alt: "Podizękowanie za wsparcie i pomoc w organizacji Żorskiego Konkursu Plastycznego Anioł 2011",
  },
  {
    img: "/documents/nonProfit/skany-34.jpg",
    alt: "Uhonorowanie tytułem Ambasadora Fundacji Dr Clown 2012",
  },
  {
    img: "/documents/nonProfit/skany-35.jpg",
    alt: 'Podziękowanie za wsparcie oraz pomoc w organizacji Akcji Charytatywnej "Dzieci Dzieciom" 2012',
  },
  {
    img: "/documents/nonProfit/skany-36.jpg",
    alt: 'Podziękowanie za zakup kalendarzy Żorskiego Bractwa Motocyklowego "Feniks", z których dochód przeznaczony zostanie na rzecz Hospicjum im. Jana Pawła II w Żorach.',
  },
  {
    img: "/documents/nonProfit/skany-37.jpg",
    alt: "Podziękowania od Placówki Opiekuńczo-Wychowawczej Wsparcia Dziennego w Orzeszu za okazaną dobroć i zasponsorowanie lektur szkolnych dla podopiecznych 2010",
  },
  {
    img: "/documents/nonProfit/skany-38.jpg",
    alt: "Podziękowanie od Zespołu Szkolno-Przedszkolnego Nr 5 w Żorach za przekazane wsparcie przy zakupie pomocy naukowych, bezinteresowną pomoc, życzliwość i ofiarność 2007",
  },
  {
    img: "/documents/nonProfit/skany-39.jpg",
    alt: "Podziękowanie od Przedszkola Nr 5 w Żorach za dofinansowanie do paczek na Mikołaja 2007",
  },
  {
    img: "/documents/nonProfit/skany-40.jpg",
    alt: "Podziękowania od Organizatorów festiwalu młodzieżowego Gimpel Czad 15 za udzieloną pomoc w organizacji GIMPEL CZADu",
  },
  {
    img: "/documents/nonProfit/skany-41.jpg",
    alt: "Podziękowanie za udział w akcji na rzecz Zgromadzenia Sióstr Miłosierdzia św. Karola Boromeusza w Żorach 2010",
  },
  {
    img: "/documents/nonProfit/skany-42.jpg",
    alt: "Dyplom za ogromne zaangażowanie w działalność charytatywną",
  },
  {
    img: "/documents/nonProfit/skany-53.jpg",
    alt: "Podziękowanie od Szkoły Podstawowej Nr 16 w Żorach za pomoc w organizacji Żorskiego Konkursu Plastycznego Anioł 2017",
  },
  {
    img: "/documents/nonProfit/skany-54.jpg",
    alt: "Uhonorowanie tytułem Ambasadora Fundacji Dr Clown 2025",
  },
];

export default nonProfitData;
