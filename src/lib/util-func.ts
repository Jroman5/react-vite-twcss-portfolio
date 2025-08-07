
export function scrollToSection(section: string){

    let element = document.getElementById(section);
    if(element){
        element.scrollIntoView({behavior: 'smooth'});
    }
}