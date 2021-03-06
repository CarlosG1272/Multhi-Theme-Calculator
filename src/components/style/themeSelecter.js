const neonTheme = {
    bodyBG: "black",
    contactBarBG: "purple",
    contactColor: "#00FFAB",

	heavyBorderSection: "#333" ,
	sectionBorder: "#00FFAB",
	sectionColor: "#00FFC6",
	
	displayColor: "greenyellow",
	displayBG: "#000",
	displayBorder: "#000",

	buttonsContainerBG: "#000",

	buttonNumberBG: "#db3eb1",
	buttonNumberColor: "#db3eb1",
	buttonNumberBorder: "#db3eb1",

	equalsButtonBG: "yellow",
	equalsButtonColor: "yellow",
	equalsButtonBorder: "yellow",

    clearColor: "red",
	clearBorder: "red",
	clearBG: "red",

	operationColor: "blue",
	operationBorder: "blue",
	operationBG: "blue",

	inputBG: "black",
	inputColor: "yellow",
	inputBorder: "orange",

    tagColor: "white"
}





const pastelTheme = {
	bodyBG: "#bde0fe",
    contactBarBG: "#789395",
    contactColor: "black",

	heavyBorderSection: "#AAAAAA" ,
	sectionBorder: "black",
	sectionColor: "#FF87CA",
	
	displayColor: "black",
	displayBG: "#F6C6EA",
	displayBorder: "#000",

	buttonsContainerBG: "#DED9C4",

	buttonNumberBG: "#D0CAB2",
	buttonNumberColor: "Black",
	buttonNumberBorder: "#B983FF",

	equalsButtonBG: "yellow",
	equalsButtonColor: "black",
	equalsButtonBorder: "yellow",

    clearColor: "black",
	clearBorder: "#FF06B7",
	clearBG: "#FF06B7",
    

	operationColor: "black",
	operationBorder: "#006E7F",
	operationBG: "#006E7F",

	inputBG: "#F6C6EA",
	inputBorder: "black",
    inputColor: "black",

    tagColor: "black"
}


const galaxTheme = {
	bodyURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Center_of_the_Milky_Way_Galaxy_IV_%E2%80%93_Composite.jpg/2560px-Center_of_the_Milky_Way_Galaxy_IV_%E2%80%93_Composite.jpg",
    contactBarBG: "#44008b",
    contactColor: "white",

	heavyBorderSection: "#800080" ,
	sectionBorder: "#000",
	sectionColor: "#6A5ACD",
	
	displayColor: "#fffdd0",
	displayBG: "#6A5ACD",
	displayBorder: "#800080",

	buttonsContainerBG: "transparent",
	buttonIMG: "url(https://img.freepik.com/vector-gratis/fondo-galaxia-acuarela-pintada-mano_52683-63441.jpg?w=2000)",

	buttonNumberBG: "#D0CAB2",
	buttonNumberColor: "white",
	buttonNumberBorder: "#B983FF",

	equalsButtonBG: "yellow",
	equalsButtonColor: "black",
	equalsButtonBorder: "yellow",

    clearColor: "black",
	clearBorder: "#FF06B7",
	clearBG: "#FF06B7",
    

	operationColor: "black",
	operationBorder: "#006E7F",
	operationBG: "#006E7F",

	inputBG: "#F6C6EA",
	inputBorder: "black",
    inputColor: "black",

    tagColor: "white"
}


const formalTheme = {
	bodyURL: "https://static.vecteezy.com/system/resources/previews/001/987/871/original/abstract-black-stripes-diagonal-background-free-vector.jpg",
    contactBarBG: "#c6c6c6",
    contactColor: "white",

	heavyBorderSection: "#000" ,
	sectionBorder: "gray",
	sectionColor: "white",
	
	displayColor: "black",
	displayBG: "#c6c6c6",
	displayBorder: "#000",

	buttonsContainerBG: "#515151",

	buttonNumberBG: "gray",
	buttonNumberColor: "gray",
	buttonNumberBorder: "Black",

	equalsButtonBG: "#018031",
	equalsButtonColor: "black",
	equalsButtonBorder: "#018031",

    clearColor: "black",
	clearBorder: "#e00000",
	clearBG: "#e00000",
    

	operationColor: "black",
	operationBorder: "#ffc340",
	operationBG: "#ffc340",

	inputBG: "#c6c6c6",
	inputBorder: "black",
    inputColor: "black",

    tagColor: "black"
}




export default function selectTheme(state) {
    switch(state){
        case "theme_neon":
            return neonTheme
        case "theme_pastel":
            return pastelTheme
        case "theme_galax":
            return galaxTheme
        case "theme_formal":
            return formalTheme
        default: 
            return neonTheme
    }
}