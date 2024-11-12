function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const texts = [
    "Quran Memorization",
    "Learning Tajweed - Tafseer",
    "Learning Aqidah - Hadith - Fiqh",
    "Learning Reading - Speaking",
  ];
  let textIndex = 0;
  let charIndex = 0;
  const speed = 100; // سرعة الكتابة بالمللي ثانية
  const delayBetweenTexts = 2000; // التأخير بين الجمل بالمللي ثانية

  function typeWriter() {
    if (charIndex < texts[textIndex].length) {
      document.getElementById("typewriter-text").innerHTML +=
        texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(() => {
        document.getElementById("typewriter-text").innerHTML = "";
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length;
        typeWriter();
      }, delayBetweenTexts);
    }
  }

  typeWriter();
});

document.addEventListener("DOMContentLoaded", function () {
  const cardsSer = document.querySelector(".cards-ser");

  function checkVisibility() {
    const rect = cardsSer.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      cardsSer.classList.add("visible");
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Check visibility on load
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 1000; // السرعة التي يتم بها العد

  const animateCounters = () => {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  };

  const section = document.querySelector(".counter-section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(section);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(section);
});

const faqToggles = document.querySelectorAll(".faq-toggle");

faqToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const faqAnswer = toggle.parentNode.nextElementSibling;
    faqAnswer.classList.toggle("active");
  });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const faqAnswer = item.querySelector(".faq-answer");
    faqAnswer.classList.toggle("active");
  });
});


 const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentCard = 0;

    testimonialCards[currentCard].classList.add('active');
    testimonialCards[1].classList.add('active');
    testimonialCards[2].classList.add('active');

    prevBtn.addEventListener('click', () => {
        testimonialCards[currentCard].classList.remove('active');
        currentCard = (currentCard - 1 + testimonialCards.length) % testimonialCards.length;
        testimonialCards[currentCard].classList.add('active');
    });

    nextBtn.addEventListener('click', () => {
        testimonialCards[currentCard].classList.remove('active');
        currentCard = (currentCard + 1) % testimonialCards.length;
        testimonialCards[currentCard].classList.add('active');
    });



// اول باقه حصتين ف الاسبوع 10 دولار ف الاسبوع الحصة ساعة فري تريال✅
// ثاني باقه تلت حصص ف الاسبوع 15 دولار ف الاسبوع الحصة ساعة فري تريال✅
// ثالث باقه اربع حصص ف الاسبوع 20 دولار ف الاسبوع الحصة ساعة فري تريال✅
// رابع باقه خمس حصص ف الاسبوع 25 دولار ف الاسبوع الحصة ساعة فري تريال✅
// خامس باقه حصة ف الاسبوع 6 دولار ف الاسبوع الحصة ساعة فري تريال✅
// تكبير الخط ف الموبايل ✅✅
// كتابه enroll now بدل Signup ✅
// كتابه الدول بتاع رمز البلد ف خانه الارقام✅

//  القواعد 1
// 3
// 5
// 11
// 8
// 6



