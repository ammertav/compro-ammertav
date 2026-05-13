import FAQSection from "../Home/sections/FAQ/FAQSection";
import OurClient from "../Home/sections/OurClient/OurClient";
import ProductClient from "../Product/sections/ProductClient/ProductClient";
import ServiceSection from "./sections/ServiceSec/ServiceSection";
import ServiceWorks from "./sections/ServiceWork/ServiceWorks";



export default function Service(){
    return(
        <>
            <ServiceSection/>
            <ServiceWorks/>
            <ProductClient/>
            <FAQSection/>
        </>
    )
}