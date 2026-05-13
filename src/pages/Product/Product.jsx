import FAQSection from "../Home/sections/FAQ/FAQSection";
import ProductClient from "./sections/ProductClient/ProductClient";
import ProductSection from "./sections/ProductPage/ProductSection";

export default function Product(){
    return(
        <>
            <ProductSection/>
            <ProductClient/>
            <FAQSection/>
        </>
    )
}