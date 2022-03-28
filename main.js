const realEstate = document.querySelector(".left-section__text--real-estate")
const contentRealEstate= document.querySelector(".middle-section__content")
const retailDistribution= document.querySelector(".left-section__text--retail-distribution")
const contentRetailDistribution= document.querySelector(".middle-section__contentone")
const financeInvestment = document.querySelector(".left-section__text--finance")
const contentFinanceInvestment = document.querySelector('.middle-section__contenttwo')

class Menu{
    
    constructor(element, toggle){
        this.element = element
        this.toggle = toggle
        this.parent = this.toggle.parentNode
        this.childDivParent = this.parent.querySelectorAll('div')
        this.allSvg = this.parent.querySelectorAll('svg')
        this.subdivision = this.element.textContent.split(' ').join('-').toLowerCase()
        this.subElement = document.querySelector(`.middle-section__plus--${this.subdivision}`)
        this.svg = document.querySelector(`.middle-section__plus--${this.subdivision} > svg:nth-child(2)`)
    }
    mouseOver(){
        this.subElement.addEventListener('click', () => {
            // const test = this.subElement.querySelectorAll('svg')
            
            //Check if class active already on
           
            for (let i = 0; i < this.childDivParent.length; i++){
                for(let j = 0; j < this.allSvg.length; j++){
                    if(this.childDivParent[i].classList.contains('active') && this.allSvg[j].classList.contains('activeSvg')){
                        this.childDivParent[i].classList.remove('active')
                         this.allSvg[j].classList.remove('activeSvg')
                        this.svg.classList.add('activeSvg')
                        this.toggle.classList.add('active')
                    }else {
                    this.toggle.classList.add('active')
                    this.svg.classList.add('activeSvg')
                    }
                }
            }
        })
    }    
}


const blockOne = new Menu(realEstate, contentRealEstate)
const blockTwo = new Menu(retailDistribution, contentRetailDistribution)
const blockThree = new Menu(financeInvestment,contentFinanceInvestment)

blockOne.mouseOver()
blockTwo.mouseOver()
blockThree.mouseOver()






