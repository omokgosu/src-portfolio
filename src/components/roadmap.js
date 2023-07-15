import {useState , useEffect , useRef} from 'react';
import '../styles/roadmap.css';

export default function RoadMap() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollPosition2, setScrollPosition2] = useState(0);
    const [scrollPosition3, setScrollPosition3] = useState(0);
    const [scrollPosition4, setScrollPosition4] = useState(0);
    const svg1Ref = useRef(null);
    const path1Ref = useRef(null);
    const svg2Ref = useRef(null);
    const path2Ref = useRef(null);
    const svg3Ref = useRef(null);
    const path3Ref = useRef(null);
    const svg4Ref = useRef(null);
    const path4Ref = useRef(null);
    
    const calcDashOffset = (scrollY , element , length) => {
        const ratio = (scrollY - element.current.offsetTop) / element.current.offsetHeight;
        const value = length - (length * ratio);
        return value < 0 ? 0 : value > length ? length : value
    }
    const handleScroll = () => {
        const scrollY = window.innerWidth > 756 ?  window.scrollY + (window.innerHeight * 0.6) : window.scrollY + (window.innerHeight * 0.3);
        const position = calcDashOffset(scrollY , svg1Ref, path1Ref.current.getTotalLength());
        setScrollPosition(position);
        const position2  = calcDashOffset(scrollY , svg2Ref, path2Ref.current.getTotalLength());
        setScrollPosition2(position2);
        const position3  = calcDashOffset(scrollY , svg3Ref, path3Ref.current.getTotalLength());
        setScrollPosition3(position3);
        const position4  = calcDashOffset(scrollY , svg4Ref, path4Ref.current.getTotalLength());
        setScrollPosition4(position4);
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    })
    
    return (
        <section id="RoadMap">
            <div className="RoadMapInner">
                <h3 className="hidden">ROAD MAP</h3>
                <ul className="RoadMapList">
                    <li ref={svg1Ref}>
                        <div className="RoadMapIcon">
                            <img src={`/assets/icons/roadmap/2023_Q2.svg`} alt="로드맵 아이콘"/>
                        </div>
                        <h4>2023 Q2</h4>
                        <ul className="RoadMapContent">
                           <li>App feature demonstration - Driver GPS tracking and enable rewarding.</li>
                           <li>Tester app release for iOS Testflight and Android Closed Testing.</li>
                           <li>Internal and closed group testing</li>
                           <li>Enhancement of game design and economy</li>
                        </ul>
                        <svg width="622" height="564" viewBox="0 0 622 564" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path ref={path1Ref} strokeDasharray={path1Ref.current ? path1Ref.current.getTotalLength() : 0} strokeDashoffset={`${scrollPosition}`} d="M495.5 563C466.7 535.4 489.5 519.5 504.5 515C527.7 536.2 578.167 514.167 600.5 500.5C644.1 431.7 605.333 406.833 580.5 403C528.5 452.2 512.167 413.167 510.5 387.5L490 382L505 336.5C501.8 341.7 489.333 349.333 483.5 352.5C477.9 350.1 451.833 381.5 439.5 397.5L406 430C394 449.2 383.333 456.667 379.5 458C384.3 425.2 367.167 382 358 364.5C376.8 370.1 384.167 423.5 385.5 449.5C387.9 449.5 400.167 433.5 406 425.5L434 398.5C438.8 387.7 463.667 363.333 475.5 352.5C466.3 352.1 461.333 337.333 460 330C466 344.4 475.167 348 479 348C492.6 348 502 336 505 330L511.5 312L530 314.5L510.5 382L513.5 383C519 363.333 530 323.6 530 322C530 320.4 533 319.333 534.5 319L533.5 314.5L538.5 316.5C536.9 314.9 544.5 310.167 548.5 308C552.83 308 557.971 301.333 560 298V286C584 276.399 574.667 261.666 567 255.5C584.6 235.9 572.667 224.667 564.5 221.5C585.3 207.5 569.5 195.667 559 191.5L568.5 164.5L555 161.5L570.5 160L606.5 66L600 60.5C602.4 62.9 607 62.1667 609 61.5C624.2 53.1 612.667 46.3333 605 44C599.8 41.2 594.833 49.5 593 54C549.4 16.4 506.5 18 490.5 23.5C440.5 38.7 400 15.5 386 2C366 18.8 365 53 367 68C372.6 101.2 360 126.167 353 134.5C354.2 138.5 389.167 148.5 406.5 153C428.1 156.999 446.833 154.666 453.5 153C480.7 137.8 519.167 151.333 535 160C540.6 162.8 547 162.833 549.5 162.5L539.5 193.5H550L556 198L559 194.5C575.4 200.5 572.5 211 569 215.5C573 209.429 567.333 203.637 564 201.5C561.6 200.3 560 204.333 559.5 206.5C564.232 209.301 566.472 214.333 567 216.5C552.6 223.3 552.333 208.666 554 200.5C549.2 205.7 551.333 213.333 553 216.5L549.5 217V221C552.7 219.8 559.5 221.166 562.5 222C583.7 236.8 569.667 249.833 560 254.5C589 226 548.5 218 549.5 224C550.3 228.8 546.167 235.333 544 238H550C545.2 243.2 542.667 240.833 542 239C542 241.4 530.667 249 525 252.5C526.833 252.166 529.4 251.8 525 253C520.6 254.2 519.167 259.833 519 262.5C521.4 274.1 533.667 270.333 539.5 267C530.3 271.4 523.667 265.833 521.5 262.5V259C518.7 257.8 531 255.166 537.5 254C541.1 255.2 542 261.833 542 265L554.5 257.5C566.9 256.3 570 264 570 268C572 278.8 557.5 284.5 550 286C574.4 276.8 568.833 265.166 563 260.5H557.5C549.1 268.5 534 271.5 527.5 272C520.3 272.4 513.167 277.166 510.5 279.5L523.5 277C533.046 282.6 527.477 290.333 523.5 293.5L514 294C509.6 294 511.5 291.333 513 290L522 289.5C528 287.5 526.5 282.333 525 280L509 281C502.6 285 506.333 290 509 292C505.8 292 503.667 297 503 299.5C502.6 304.3 510.167 306.5 514 307C521.6 307 524.167 300.666 524.5 297.5C519 305.5 513 305 508 302.5C504 300.5 506 297.333 507.5 296H521.5L530 291H549.5L557.5 287V295.5C556.5 303.5 535.5 311.5 535.5 311C535.5 310.6 512.5 309.833 501 309.5C497.8 306.3 499.667 294.833 501 289.5L505 277.5L494.5 293.5L501 275.5C499 271.1 502.833 257 505 250.5C501.8 250.9 501 246 501 243.5C501.4 246.699 504.833 246.166 506.5 245.5L513.5 238.5C516.3 236.9 515.667 230.166 515 227C518.6 231.8 524.167 229 526.5 227L513.5 261C511.5 265 511.333 272.333 511.5 275.5L531.5 227C539.1 226.2 544.333 212.332 546 205.499C550 202.832 555.8 199.099 547 205.499C536 213.498 525.5 217.5 524 214.5C522.8 212.099 524.5 208.833 525.5 207.5L526.5 212C528.9 213.6 538.5 208.332 543 205.499C551.8 195.099 546 195.165 542 196.499L521 206.5C509.4 206.1 499.5 213.667 496 217.5L468.5 239.5L467.5 247L455.5 263.499C455.5 259.499 455.5 253.999 455.5 263.999C455.5 273.999 448.167 285.832 444.5 290.499L387.5 337.999C361.9 363.599 337.5 363.333 328.5 359.999C284.5 339.999 270 368.999 261.5 377.499C253 385.999 241.5 386.499 238 386.499C234.5 386.499 220 379.999 218 374.499C216.4 370.099 184 359.999 184 359.999C144.167 350 62.9 335.3 56.5 356.5C39.3333 364 4.2 373.7 1 352.5" stroke="url(#paint0_linear_308_3795)" strokeWidth="2"/>
                            <defs>
                            <linearGradient id="paint0_linear_308_3795" x1="1" y1="2" x2="527.5" y2="563" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A214D8"/>
                            <stop offset="0.255208" stop-color="#B51FDB"/>
                            <stop offset="0.510417" stop-color="#CF2DDF"/>
                            <stop offset="0.75" stop-color="#6BA1F1"/>
                            <stop offset="1" stop-color="#2AEBFC"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </li>
                    <li ref={svg2Ref}>
                        <div className="RoadMapIcon">
                            <img src={`/assets/icons/roadmap/2023_Q3.svg`} alt="로드맵 아이콘"/>
                        </div>
                        <h4>2023 Q3</h4>
                        <ul className="RoadMapContent">
                           <li>Start community building: Telegram, Discord, and Twitter.</li>
                           <li>Open home page.</li>
                           <li>Development of Open beta app</li>
                        </ul>
                        <svg width="591" height="394" viewBox="0 0 591 394" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path ref={path2Ref} strokeDasharray={path2Ref.current ? path2Ref.current.getTotalLength() : 0} strokeDashoffset={`${scrollPosition2}`} d="M590.5 324.499C513.5 328.666 329.2 326.399 208 283.999C180.666 271.333 124.1 233.499 116.5 183.499C108.9 133.499 114.666 162.666 118.5 183.499C112.333 169.499 104.1 130.299 120.5 85.4991C130.167 64.3324 160.1 19.4991 202.5 9.49906C255.833 -7.50094 368.2 -6.50095 391 133.499C390.667 134.333 388.5 134.3 382.5 127.5C368.833 90.5 323.1 17.1 249.5 19.5C222 20.6667 161.7 36 140.5 88C138.5 95 138.7 109.5 155.5 111.5C193 105.167 278.7 96.3 321.5 111.5C324.667 112.667 333.6 113.7 344 108.5C351.5 106.833 367.3 109.498 370.5 133.499C371.167 147.999 369 181 355 197C351.5 197 343.2 196.2 338 193C314.5 180.833 279.4 153.1 327 139.5C343.5 136 378.6 133.1 387 149.5C386.667 173.667 375.2 228.201 332 253C317.667 264.167 277.3 284.9 230.5 278.5C212.833 274.5 176.2 261.4 171 241C169.333 229.333 177.5 204.7 223.5 199.5C248.667 196 304.6 195.9 327 223.5C328.667 230.833 319.3 248.8 268.5 262H232C202.833 254.833 141.4 224.6 129 161C127 154.5 126.5 140.4 140.5 136C154.5 131.6 147.333 134.167 142 136C156 135.833 186.7 139.6 197.5 156C208.3 172.4 202 163.833 197.5 157.5V167C188 177.833 158.1 201 114.5 207C78.5 212.667 5.7 231.6 2.5 262C4 286.833 39.8 338.6 171 347C197.167 351.667 244.3 367.2 223.5 392" stroke="url(#paint0_linear_308_3798)" strokeWidth="4"/>
                            <defs>
                            <linearGradient id="paint0_linear_308_3798" x1="590" y1="1.99999" x2="2.00003" y2="443" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#D47273"/>
                            <stop offset="0.229167" stopColor="#AF6A81"/>
                            <stop offset="0.484375" stopColor="#8A618F"/>
                            <stop offset="0.744792" stopColor="#65589D"/>
                            <stop offset="1" stopColor="#3C4EAC"/>
                            </linearGradient>
                            </defs>
                        </svg>

                    </li>
                    <li ref={svg3Ref}>
                        <div className="RoadMapIcon">
                            <img src={`/assets/icons/roadmap/2023_Q4.svg`} alt="로드맵 아이콘"/>
                        </div>
                        <h4>2023 Q4</h4>
                        <ul className="RoadMapContent">
                           <li>Release SRC App.</li>
                           <li>SMT listing on CEX</li>
                           <li>Business affiliates to SRC app and SRC communities</li>
                        </ul>
                        <svg width="596" height="355" viewBox="0 0 596 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path ref={path3Ref} strokeDasharray={path3Ref.current ? path3Ref.current.getTotalLength() : 0} strokeDashoffset={`${scrollPosition3}`} d="M0.5 185.499C5.83333 186.499 22.7 187.099 47.5 181.499C54.6667 179.999 72 180.699 84 195.499C90.3333 200.832 110.3 208.998 139.5 198.998L341 197.498C348.833 200.665 366.4 207.298 374 208.498C380 209.998 395.6 209.098 410 193.498C424.5 167.331 441.9 110.398 395.5 91.9981C381.167 92.6648 353.3 109.498 356.5 171.498C357.333 180.165 363.8 197.498 383 197.498C397.5 195.165 427.4 190.898 431 192.498L526 187.998C532 190.998 545.4 196.898 551 196.498C558.5 198.498 574.8 191.998 580 149.998C581.333 135.998 580.5 107.398 566.5 104.998C559.5 105.998 545.9 118.498 547.5 160.498C550.167 173.665 560.9 193.698 582.5 168.498C588.667 153.665 596.8 118.898 580 98.4981C575.667 92.4981 567.5 79.4981 569.5 75.4981C567.833 70.9981 561.2 61.7981 548 60.9981C542.667 58.3314 529.9 50.3981 521.5 39.9981C511.667 27.4981 480.3 2.49808 433.5 2.49808C394.5 0.998083 313.1 -0.00191689 299.5 7.99808C292.167 8.99872 268.9 18.4 234.5 48C227.833 53.3333 214.2 59.9 213 43.5C216.167 38.6667 224 30 230 34C230.5 33.5 239 47 209.5 55C174.833 55.5 106.6 57.3 111 60.5C98.8333 63.1667 73.9 74.6 71.5 99C71.8333 109.5 75.5 124.7 87.5 101.5C87.6667 88.1667 84.1 71.4 68.5 111C60 135.5 55.2 182.8 104 176L244 179C265 184.833 310.4 192.5 324 176.5C331.833 156.333 332.1 121.2 270.5 142C214 153.333 99.1 165.6 91.5 124C87.6667 113 88.7 92.6 123.5 99C166.167 97.8333 251.7 97.9 252.5 107.5L254 119C254.667 121.667 259.6 126.2 274 123C298.667 123 349.2 114.3 354 79.5C352 73.6667 333.6 69.4 276 99C271.833 106.167 270 118.8 296 112C305.667 113.5 332.3 106.1 361.5 64.5C368.667 58.6667 385 47.8 393 51H440C441.667 50.6667 445.4 48.7 447 43.5V23.5C447.333 18.6667 443.9 9.4 427.5 11C391.667 9.5 315.9 7.8 299.5 13C285.667 17.6667 256.9 30.3 252.5 43.5C250.167 47.6667 247.1 56 253.5 56L513.5 57.5C520.5 56.5 528.8 50.5 506 34.5C491.833 23.3333 462.5 5.9 458.5 25.5V142.5C458.833 149.167 463.1 161.5 477.5 157.5C495.833 159.834 532.9 155.602 534.5 120C538.5 104 542.8 71.1 528 67.5C522.5 66.3321 511.1 66.2966 509.5 75.4981C510.333 78.6654 515.7 83.9 530.5 79.5C537.167 76.5 549.9 75.1 547.5 93.5C542.167 120.333 532.7 174.3 537.5 175.5C539.5 188.167 553.6 208.6 594 189C592 241.333 571.6 339.9 506 315.5C476.5 313.333 416 318.1 410 354.5" stroke="url(#paint0_linear_308_3800)" strokeWidth="2"/>
                            <defs>
                            <linearGradient id="paint0_linear_308_3800" x1="-1.50113e-05" y1="1.00002" x2="592.586" y2="316.943" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#9C11D7"/>
                            <stop offset="0.229167" stopColor="#B61FDB"/>
                            <stop offset="0.484375" stopColor="#CE2DDF"/>
                            <stop offset="0.744792" stopColor="#62ACF2"/>
                            <stop offset="1" stopColor="#2BEAFC"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </li>
                    <li ref={svg4Ref}>
                        <div className="RoadMapIcon">
                            <img src={`/assets/icons/roadmap/2024_Q1.svg`} alt="로드맵 아이콘"/>
                        </div>
                        <h4>2024 Q1</h4>
                        <ul className="RoadMapContent">
                           <li>NFT sales for OG, WL and public rounds</li>
                           <li>Release SRC App.</li>
                           <li>Implement in app marketplace.</li>
                        </ul>
                        <svg width="622" height="264" viewBox="0 0 622 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path ref={path4Ref} strokeDasharray={path4Ref.current ? path4Ref.current.getTotalLength() : 0} strokeDashoffset={`${scrollPosition4}`} d="M621.5 171.5C585.833 172.334 514.5 173.1 514.5 169.5C512.833 165.334 508.5 156.3 504.5 153.5C497.833 149 490.2 135.2 513 116C525.333 110.5 551.2 93.1003 556 67.5003C558.833 51.667 555.4 17.1003 519 5.50032C502.5 -0.666348 464.2 -1.69968 443 43.5003C442 48.3335 441.3 58.5 446.5 60.5C450.166 63 459.4 65.7 467 56.5C474.333 45.8333 493.1 27.7 509.5 40.5C516.833 44.3333 527.1 57.9 509.5 81.5C498.5 88.8333 476.5 105.1 476.5 111.5C473 120.167 471.2 138.8 492 144C500 145.167 516.2 150.9 517 164.5C518.5 170 517 182.9 499 190.5C493.833 192.167 482.5 192.1 478.5 178.5C476.833 171.5 478 157.1 496 155.5C506.166 156.833 522.9 165.4 508.5 189C504.666 191 495.6 194.8 490 194H425.5C407.5 195.5 370.4 189.501 366 153.5C360.5 108.5 365 49.5 372.5 53H398C400 52.8332 403.9 51.5997 403.5 48C404.5 43.5 404.8 35.1 398 37.5H317C314.5 38.0002 309.9 39.9006 311.5 43.5003C311 47.3335 311.4 54.6 317 53H345C346.333 52.6667 348.9 53.3 348.5 58.5V157.5C334.666 154.834 306.8 150.301 306 153.5C292.333 136 265.7 100 268.5 96C280.166 76.1666 304 37.1997 306 40C304.166 39.1667 297.3 37.5 284.5 37.5C276 54.3333 258.3 87.3 255.5 84.5C245.333 70.5 225.4 41.5 227 37.5C219.333 37.1666 204.6 37.1997 207 40C220.666 58.1667 247 95.1 243 97.5C232 118.167 209 158.301 205 153.5C209.166 155.5 219.4 158.301 227 153.5C235.5 137.834 253.1 107.2 255.5 110C265.666 123.167 285.3 150.301 282.5 153.5C252.166 157.167 192 162.6 194 155C194.833 150.667 195.4 141.9 191 141.5L140 140.5C139.167 140.667 137.4 140 137 136V106.5C137.167 105.167 138.5 102.7 142.5 103.5H187.5C188 103.833 189.1 103.7 189.5 100.5V92C189.5 91.1667 188.7 89.6 185.5 90H139C138.333 89.8333 137 88.6 137 85V53.5C137.5 52.5 138.8 50.7 140 51.5H191C191.667 51.3333 193 50.4 193 48V39.5C192.833 38.8333 191.6 37.6 188 38H124C122.667 38.1667 120.4 39 122 41V157.5L95.5 155L94 38H79.5V129L17.5 38H2V155H15.5L17.5 66L79.5 155C94.8333 177 131.5 216.3 155.5 197.5C159.833 194.833 165.9 186.3 155.5 173.5C145.333 170.5 127.4 169.7 137 190.5C146.667 201.667 173.3 219.8 202.5 203C208.333 202.5 217.4 198.7 207 187.5C199.667 184.667 185.9 183.3 189.5 200.5C190.667 206.167 201.2 215.8 234 209C239.667 207.833 248.3 203.2 237.5 194C225.833 195.167 209.5 201.2 237.5 216C250.167 222.167 275.3 235.9 274.5 241.5H260L282.5 261L304 241.5H288.5C277 230 251.7 206.8 242.5 206" stroke="url(#paint0_linear_314_110)" strokeWidth="3"/>
                            <defs>
                            <linearGradient id="paint0_linear_314_110" x1="311.75" y1="2.42969" x2="311.75" y2="261" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#DE9494"/>
                            <stop offset="0.265625" stopColor="#B16A81"/>
                            <stop offset="0.546875" stopColor="#886090"/>
                            <stop offset="0.786458" stopColor="#5D56A0"/>
                            <stop offset="1" stopColor="#4651A9"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </li>
                </ul>
            </div>
        </section>
    );
  }