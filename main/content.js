const negativeWords = [  
    "unfortunately", "we regret", "not selected", "we're sorry", "rejected",
    "declined", "no longer", "did not proceed", "after careful consideration",
    "we decided to move forward with other candidates",
    
    "niestety", "z przykrością", "nie został wybrany", "nie została wybrana", 
    "nie zakwalifikował", "nie przeszła", "nie przechodzi",
    "nie kontynuujemy", "nie jesteśmy zainteresowani", "zakończyliśmy proces",
    "brak pozytywnego wyniku", "nie spełnia wymagań", "nie udało się"
];
const positiveWords = [
    "congratulations", "accepted", "we're excited", "you're hired", "offer",
    "successful", "we are pleased", "thrilled to inform", "invited to interview", 
    "we would like to offer", "positive outcome", "job offer", "next step", " short phone call",

    "gratulacje", "z przyjemnością informujemy", "zostałeś wybrany", "zostałaś wybrana",
    "przeszedł do kolejnego etapu", "zapraszamy na rozmowę", "zaproszenie na rozmowę",
    "udało się", "otrzymujesz ofertę", "zostałeś zatrudniony", 
    "chcielibyśmy Cię zaprosić", "pozytywny wynik", "została podjęta pozytywna decyzja"
];

const observer = new MutationObserver(() => {
    highlightListMessages();
    highlightOpenedMessages();
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});
setTimeout(() => {
    highlightListMessages(); 
  }, 1000);
  
  
function clearClasses(el) {
    el.classList.remove("recruitment-positive", "recruitment-negative", "recruitment-neutral");
}
  
function highlightListMessages() {
    const rows = document.querySelectorAll("tr.zA");
  
    rows.forEach(row => {
      const snippet = row.querySelector(".y2, .y6")?.innerText?.toLowerCase() || "";
      const subject = row.querySelector(".bog")?.innerText?.toLowerCase() || "";
      const ariaLabel = row.getAttribute("aria-label")?.toLowerCase() || "";
      const combinedText = `${snippet} ${subject} ${ariaLabel}`;
  
      if (combinedText.length < 10) return;
  
      clearClasses(row);
  
      if (positiveWords.some(word => combinedText.includes(word))) {
        row.classList.add("recruitment-positive");
      } else if (negativeWords.some(word => combinedText.includes(word))) {
        row.classList.add("recruitment-negative");
      } else {
        row.classList.add("recruitment-neutral");
      }
    });
  }
  
  
function highlightOpenedMessages() {
    const containers = document.querySelectorAll("div.a3s");
  
    containers.forEach(container => {
      const text = container.innerText?.toLowerCase();
      if (!text || text.length < 30) return;
  
      clearClasses(container);
  
      if (positiveWords.some(word => text.includes(word))) {
        container.classList.add("recruitment-positive");
      } else if (negativeWords.some(word => text.includes(word))) {
        container.classList.add("recruitment-negative");
      } else {
        container.classList.add("recruitment-neutral");
      }
    });
  }
  