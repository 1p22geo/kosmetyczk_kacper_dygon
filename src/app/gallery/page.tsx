"use client"

import Masonry from "react-masonry-css"
import GeneralLayout from "@/app/generalLayout";
import Image from "next/image"
import "./gallery.css"

export default function Gallery(){

    const placeholderImageLinks = [
        "https://live.staticflickr.com/5197/14065251827_bb91ba6640_b.jpg",
        "https://i.pinimg.com/originals/06/2b/83/062b836d2115803e009c293f563fc83d.jpg",
        "https://media.graphassets.com/resize=height:360,width:1280/output=format:webp/aknBu4XzRBKfiOwUS6jQ?width=1280",
    "https://www.catster.com/wp-content/uploads/2023/11/cat-claws-when-kneading.jpg",
            "https://cdn11.bigcommerce.com/s-97ow4iz9xg/product_images/uploaded_images/cat-showing-claws-purrdy-paws.jpg",
                "https://media.istockphoto.com/id/673788488/photo/bear.jpg?s=612x612&w=0&k=20&c=0O0StXn5gk_AjU9_JCq52uRc386sTuJKMVe4ampWlVY=",
                    "https://blog.feliway.com/hubfs/Google%20Drive%20Integration/March%202021%20%7C%20FELIWAY%20%7C%20Controlling%20Kitty%20Claws!%20Tips%20to%20Cut%20Your%20Cats%20Nails-3.jpeg",
                        "https://www.phidirect.com/hubfs/PHI-Blog%20Images/PHI-Blog-Compressed/PHI-Blog-How%20to%20Safely%20Trim%20Your%20Cats%20Claws-Featured.jpg",
                            "https://i.pinimg.com/originals/45/66/e7/4566e75322411686a28734f7f4d33c3b.jpg",
                                "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1024,h_512/https://lifeandcats.com/wp-content/uploads/2023/12/Everything-you-need-to-know-about-claws-1024x512.jpg",
                                    "https://www.shutterstock.com/image-photo/macro-photo-eagles-claws-powerful-600nw-2196181935.jpg",
                                        "https://icatcare.org/app/uploads/2019/03/trimming-your-cats-claws.png",
                                            "https://live.staticflickr.com/2831/11922681124_862d27f850_c.jpg",
                                                "https://www.whiskas.co.uk/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf5651/files/2022-11/Chaton-agressif-controler-lagressivite-de-votre-Chaton.jpg",
                                                        "https://clawguard.com/cdn/shop/articles/How_To_Trim_A_Cat_s_Claws.jpg?v=1658158003&width=5760"
    ]

    const galleryImages = placeholderImageLinks.map((imageUrl, index) => {
        return (
            <div key={index} className="gallery-item">
                <Image src={imageUrl} alt="nails image" layout="responsive" width={1} height={1} unoptimized/>
            </div>
        )

    })

    return (
    <GeneralLayout>

        <Masonry
        breakpointCols={{
            default: 3
        }}
        className="gallery-grid"
        columnClassName="gallery-column"
        >
            {galleryImages}
        </Masonry>

    </GeneralLayout>
    )
}