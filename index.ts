// const puppeteer = require("puppeteer")
// const fs = require("fs")
// import { parse } from "path"
import { Browser } from "puppeteer"
const puppeteer = require("puppeteer-extra")
const StealthPlugin = require("puppeteer-extra-plugin-stealth")


puppeteer.use(StealthPlugin())
// const { executablePath }:any = require("puppeteer")

const url = "https://bot.sannysoft.com/"

const main = async () => {
    const browser: Browser = await puppeteer.launch({ headless: false })

    const page = await browser.newPage()
    await page.goto(url)
    await page.screenshot({ path: "bot.png",fullPage:true })

    /**
     * await type("#email",User_Email)
     * await type("#password",User_Password)
     * await click("[type=submit]")
     */

    await browser.close();
}

// const main = async () => {
//     const browser: Browser = await puppeteer.launch({ headless: true })
//     // console.log(123)
//     const page = await browser.newPage()
//     await page.goto(url)
//     await page.screenshot({path:"btoa.jpg"})

//     const bookData = await page.evaluate((url) => {

//         const convertPrice = (price: String) => {
//             return parseFloat(price.replace("£", ""))
//         }
//         const convertRating = (rating: String) => {
//             switch (rating) {
//                 case "One":
//                     return 1
//                 case "Two":
//                     return 2
//                 case "Three":
//                     return 3
//                 case "Four":
//                     return 4
//                 case "Five":
//                     return 5
//                 default:
//                     return 0
//             }
//         }

//         const bookPods = Array.from(document.querySelectorAll(".product_pod"))
//         const data = bookPods.map((book: any) => ({
//             title: book.querySelector("h3 a").getAttribute("title"),
//             price: convertPrice(book.querySelector(".price_color").innerText),
//             imgSrc: url + book.querySelector("img").getAttribute("src"),
//             rating: convertRating(book.querySelector(".star-rating").classList[1])
//         }))
//         return data
//     }, url)

//     // console.log(bookData)

//     await browser.close()
//     fs.writeFile("data.json", JSON.stringify(bookData), (err: any) => {
//         if (err) throw err
//         console.log("Successfully Saved Json Data")
//     })
// }

main()