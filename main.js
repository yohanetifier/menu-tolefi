const realEstate = document.querySelector(".left-section__text--real-estate")
const middleSection = document.querySelector('.middle-section')
const contentRealEstate= document.querySelector(".middle-section__content")
const listContent= document.querySelectorAll(".middle-section__content > p")
const retailDistribution= document.querySelector(".left-section__text--retail-distribution")
const contentRetailDistribution= document.querySelector(".middle-section__contentone")
//  const deplierSection = document.querySelector(".deplier")
const plus = document.querySelector('.middle-section__plus > p')
const inputChecked = document.querySelector('input')
const subMiddleSection = document.querySelector('.middle-section__plus')
// const testSvg = document.querySelector('.testsvg1')


class Menu{
    
    constructor(element, toggle){
        this.element = element
        this.toggle = toggle
        this.parent = this.toggle.parentNode
        this.subdivision = this.element.textContent.split(' ').join('-').toLowerCase()
        this.test = this.parent.querySelectorAll('.toggle')
        this.subElement = document.querySelector(`.middle-section__plus--${this.subdivision}`)
        this.svg = document.querySelector(`.middle-section__plus--${this.subdivision} > svg:nth-child(2)`)

        // this.svg = document.querySelector(`${this.subElement} > svg:nth-child(2)`)
    }
    mouseOver(){
        this.element.addEventListener("mouseover", () => {
            this.toggle.style.opacity = 1;
            this.toggle.style.transition = `opacity 300ms`
            this.svg.style.transform = `rotate(180deg)`
            console.log(this.test)
         })
        //  this.subElement.addEventListener('mouseover', () => {
        //             this.toggle.style.opacity = 1
        //         })
    }
    mouseLeave(){
        this.element.addEventListener('mouseleave', () => {
            this.toggle.style.opacity = 0;
            this.toggle.style.transition = `opacity 300ms`
            this.svg.style.transform = `rotate(90deg)`

        })
    }
}


const blockOne = new Menu(realEstate, contentRealEstate)
const blockTwo = new Menu(retailDistribution, contentRetailDistribution)

blockOne.mouseOver()
blockOne.mouseLeave()
// blockOne.mouseLeave()
// blockOne.keepSectionActive()
// blockOne.closeSectionActive()
// blockOne.verifyVisible()
// blockTwo.mouseOver()
// blockTwo.mouseLeave()






