document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initNavbar();
  initFaq();
  initServiceButtons();
  initAuthModals();
  initBookingForm();
});


function initYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}


function initNavbar() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const menuIcon = document.getElementById('menuIcon'); 

    if (!menuToggle || !navMenu || !menuIcon) return;
    
    menuToggle.addEventListener ('click', () => {
        navMenu.classList.toggle ('navbar__menu--open');
        const isOPEN = navMenu.classList.contains('nav__menu--open');
        menuIcon.className = isOpen ? "fa-solid fa-xmark" :  'fa-solid fa-bars';
});

document.querySelectorAll('.navbar__link').forEach (link =>{ 
    link.addEventListener('click', () => {
    navMenu.classList.remove ('navbar__menu--open');
    menuIcon.className = 'fa-solid fa-bars';
});
});
}


function initFaq() { 
    document.querySelectorAll ('.faq-item__header').forEach(button => {
        button.addEventListener ('click', () => {
            const currentItem = button.parentElement;
            const isActive = currentItem.classList.contains ('faq-item--active');

            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList,remove('faq-item-active');

        });

            if (!isActive) {
                currentItem.classList.add('faq-item-acticw');
            }
        });
    });
}


const detalhesServicos = {
  'Ansiedade e Estresse': 'Através da Terapia Cognitivo-Comportamental (TCC), trabalhamos a identificação e reestruturação de pensamentos disfuncionais, exercícios práticos de regulação emocional e manejo do estresse.',
  'Depressão e Autoestima': 'Acompanhamento focado em ressignificar crenças limitantes, combater pensamentos automáticos negativos e reestabelecer o autocuidado.',
  'Relacionamentos': 'Foco no aprimoramento da comunicação assertiva, limites saudáveis e resolução construtiva de conflitos.',
  'Terapia Online': 'Sessões por videochamada com total flexibilidade e sigilo conforme diretrizes do CFP.',
  'Educação Especial e Inclusão': 'Avaliação, orientação e acompanhamento psicológico fundamentados no mestrado em Educação Especial pela UFSCar.',
  'Autoconhecimento e Luto': 'Espaço seguro para processar perdas, vivenciar o luto de forma saudável e encarar transições de vida.'
};


function initServiceButtons() {
    document.querySelectorAll ('.card-service__action').forEach(btn => {
        btn.addEventListener ('click', () => {
            const serviceTitle = btn.dataset.service;
            const descricao = detalhesServicos[serviceTitle] || 'Acompanhamento psicológico personalizado.';
           
            Swal.fire({
                title: serviceTitle,
                html: `<p style= "text-align: justify; font-size: 0.95rem; line-height: 1.6; color: #57534e; margin-bottom: 1.25rem;"> ${descricao}</p><strong>Deseja agendar uma avaliação para esta área?</strong>`,
                icon

            })
            
    )
}