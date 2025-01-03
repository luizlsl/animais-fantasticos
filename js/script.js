function initTabNav() { 
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo')

    function activeTab(index){
    
        tabContent.forEach((content) =>{
            content.classList.remove('ativo')
        })
        
        tabContent[index].classList.add('ativo')
    }
    
    tabMenu.forEach((item, index) =>{
        item.addEventListener('click', () =>{
            activeTab(index)
        })
    })
}
}

initTabNav()

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const ativoClass = 'ativo'

    if(accordionList.length){

        accordionList[0].classList.add(ativoClass)
        accordionList[0].nextElementSibling.classList.add(ativoClass)

        function accordionShow(){
            this.classList.toggle(ativoClass)
            this.nextElementSibling.classList.toggle(ativoClass)
        }
        
        accordionList.forEach((item) =>{
            item.addEventListener('click', accordionShow)
        })
        }
    }

initAccordion()

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    if(linksInternos.length){
        function scrollToSection(event){
            event.preventDefault()
            const href = event.currentTarget.getAttribute('href')
            const section = document.querySelector(href)
            
            // Modelo antigo direto com a seção
            section.scrollIntoView({
                behavior: 'smooth',
                block:  'start'
            })
            
            // Modelo de scroll suave novo
            // const topo = section.offsetTop
        
            // window.scrollTo({
            //     top: topo,
            //     behavior: 'smooth',
            // })
        }
        
        linksInternos.forEach((link) =>{
            link.addEventListener('click', scrollToSection)
        })
    }
        
}

initScrollSuave()

function scrollAnimado() {
    const sections = document.querySelectorAll('.js-scroll')
    if(sections.length){
        const windowMetade = window.innerHeight * 0.6

        function scrollAnimation() {
            sections.forEach((section) =>{
                const sectionTop = section.getBoundingClientRect().top
                const isSectionViseble = (sectionTop - windowMetade) < 0
        
                if(isSectionViseble)
                    section.classList.add('ativo')
            })
            
        }
        scrollAnimation()
        window.addEventListener('scroll', scrollAnimation)
    }
}

scrollAnimado()