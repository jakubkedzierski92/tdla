import { StyledContainer } from "../styled";
import Section from "../common/Section";

function Author() {
  return (
    <StyledContainer>
      <main className="container">
        <h1>O autorze</h1>
        <Section
          title="Jakub Kędzierski"
          body={
            <>
              Urodzony we Wrocławiu w 1992r., mieszkaniec Dolnośląskiej stolicy.
              Po skończonym XIII Liceum Ogólnokształcącym wybrałem Uniwesrytet
              Ekonomiczny na uczelnię wyzszą. Przed końcem 2. roku studiów
              uznałem, ze dalsza edukacja w naszym systemie oświaty to strata
              czasu. <br />
              Pierwszą firmę załozylem z kolegą w trakcie trwania studiów.
              Działalność związana była z moim ówczesnym hobby, które dopiero w
              Polsce raczkowało - <i>CrossFit'em</i>. Tak się fortunnie złozylo,
              ze miałem okazję trenować w <em>pierwszym</em> klubie w Polsce pod
              okiem jednego z 3 <em>oficjalnych</em> trenerów CF z certyfikatem
              (CrossFit level 1 trainer). Profil firmy był dziełem przypadku.
              Załozyliśmy z kolegą pierwszą Polską firmę z akcesoriami i
              sprzętem do CF pod własnym brandem. Przyoda ta trwała 3 lata i z
              perspektywy czasu mozna powiedzieć, ze osiagnelismy mały
              sukces.<br />
              W tzw. międzyczasie Załozyliśmy mobilną naprawę szyb
              samochodowych. Przy pomocy specjalnej maszyny ssąco-tłoczącej
              uzupełnialiśmy tzw. "pajączki" na szybach samochodowych z dojazdem
              do klienta. <br />
              Ta firma wyewoluowała w działalność którą prowadziliśmy ok. 6 lat.
              Finalna wersja tej działalności to była regenracja szkła
              budowlanego - w wielkim uproszczeniu usuwanie rys z szyb w oknach
              na budowach. To była nasza nisza, która na przestrzeni lat
              doczekała się sporej konkurencji i przestała mieć sens
              ekonomiczny.
            </>
          }
        />
      </main>
    </StyledContainer>
  );
}

export default Author;
