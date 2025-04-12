export default function CustomSvg ({height, width, color, name}){
    return (
        name === 'instagram' 
        ? 
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector" d="M7.9363 1.50018H18.2454C21.7961 1.50018 24.6818 4.38583 24.6818 7.93654V18.2456C24.6818 19.9527 24.0037 21.5898 22.7966 22.7968C21.5895 24.0039 19.9524 24.682 18.2454 24.682H7.9363C4.38558 24.682 1.49993 21.7963 1.49993 18.2456V7.93654C1.49993 6.22951 2.17805 4.5924 3.3851 3.38534C4.59215 2.17829 6.22927 1.50018 7.9363 1.50018ZM7.69085 2.59109C6.33824 2.59109 5.04104 3.12841 4.0846 4.08484C3.12816 5.04128 2.59084 6.33848 2.59084 7.69109V18.4911C2.59084 21.3099 4.87201 23.5911 7.69085 23.5911H18.4909C19.8435 23.5911 21.1407 23.0538 22.0971 22.0973C23.0535 21.1409 23.5909 19.8437 23.5909 18.4911V7.69109C23.5909 4.87226 21.3097 2.59109 18.4909 2.59109H7.69085ZM19.534 5.79563C19.7601 5.79563 19.9769 5.88543 20.1367 6.04526L20.6188 5.56314L20.1367 6.04526C20.2965 6.20509 20.3863 6.42187 20.3863 6.6479C20.3863 6.87394 20.2965 7.09072 20.1367 7.25055C19.9769 7.41038 19.7601 7.50018 19.534 7.50018C19.308 7.50018 19.0912 7.41038 18.9314 7.25055C18.7716 7.09072 18.6818 6.87394 18.6818 6.6479C18.6818 6.42187 18.7716 6.20509 18.9314 6.04526L18.4493 5.56314L18.9314 6.04526C19.0912 5.88543 19.308 5.79563 19.534 5.79563ZM13.0908 7.63654C14.5375 7.63654 15.9249 8.21122 16.9478 9.23414C17.9707 10.2571 18.5454 11.6445 18.5454 13.0911C18.5454 14.5377 17.9707 15.9251 16.9478 16.948C15.9249 17.971 14.5375 18.5456 13.0908 18.5456C11.6442 18.5456 10.2568 17.971 9.2339 16.948C8.21097 15.9251 7.6363 14.5377 7.6363 13.0911C7.6363 11.6445 8.21097 10.2571 9.2339 9.23414C10.2568 8.21122 11.6442 7.63654 13.0908 7.63654ZM13.0908 8.72745C11.9335 8.72745 10.8236 9.18719 10.0053 10.0055C9.18695 10.8239 8.72721 11.9338 8.72721 13.0911C8.72721 14.2484 9.18695 15.3583 10.0053 16.1766C10.8236 16.995 11.9335 17.4547 13.0908 17.4547C14.2482 17.4547 15.3581 16.995 16.1764 16.1766C16.9947 15.3583 17.4545 14.2484 17.4545 13.0911C17.4545 11.9338 16.9947 10.8239 16.1764 10.0055C15.3581 9.18719 14.2482 8.72745 13.0908 8.72745Z" stroke="white" stroke-width="1.36364"/>
            </svg>
        :
        name === 'linkedIn' ? <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="mdi:linkedin">
        <path id="Vector" d="M23.75 3.83984C24.413 3.83984 25.0489 4.10324 25.5178 4.57208C25.9866 5.04092 26.25 5.6768 26.25 6.33984V23.8398C26.25 24.5029 25.9866 25.1388 25.5178 25.6076C25.0489 26.0764 24.413 26.3398 23.75 26.3398H6.25C5.58696 26.3398 4.95107 26.0764 4.48223 25.6076C4.01339 25.1388 3.75 24.5029 3.75 23.8398V6.33984C3.75 5.6768 4.01339 5.04092 4.48223 4.57208C4.95107 4.10324 5.58696 3.83984 6.25 3.83984H23.75ZM23.125 23.2148V16.5898C23.125 15.5091 22.6957 14.4726 21.9315 13.7084C21.1672 12.9442 20.1308 12.5148 19.05 12.5148C17.9875 12.5148 16.75 13.1648 16.15 14.1398V12.7523H12.6625V23.2148H16.15V17.0523C16.15 16.0898 16.925 15.3023 17.8875 15.3023C18.3516 15.3023 18.7967 15.4867 19.1249 15.8149C19.4531 16.1431 19.6375 16.5882 19.6375 17.0523V23.2148H23.125ZM8.6 10.7898C9.15695 10.7898 9.6911 10.5686 10.0849 10.1748C10.4787 9.78094 10.7 9.2468 10.7 8.68984C10.7 7.52734 9.7625 6.57734 8.6 6.57734C8.03973 6.57734 7.50241 6.79991 7.10624 7.19608C6.71007 7.59225 6.4875 8.12957 6.4875 8.68984C6.4875 9.85234 7.4375 10.7898 8.6 10.7898ZM10.3375 23.2148V12.7523H6.875V23.2148H10.3375Z" fill="white"/>
        </g>
        </svg>
         :
        name === 'faceBook' ? <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="formkit:facebook">
        <path id="Vector" d="M14.5455 2.15723C7.94887 2.15723 2.61365 7.52654 2.61365 14.1572C2.61365 20.1402 6.97728 25.1175 12.6875 26.0209V17.6345H9.65342V14.1572H12.6875V11.5152C12.6875 8.49814 14.4773 6.84473 17.1875 6.84473C18.5 6.84473 19.8636 7.08336 19.8636 7.08336V10.0322H18.3636C16.8807 10.0322 16.4205 10.9527 16.4205 11.9072V14.1572H19.7273L19.1989 17.6345H16.4205V26.0209C22.1307 25.1175 26.4943 20.1572 26.4943 14.1572C26.4943 7.52654 21.1591 2.15723 14.5625 2.15723H14.5455Z" fill="white"/>
        </g>
        </svg>
         :
        name === 'x' ? <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" d="M27.2727 3.22727C26.2689 3.70454 25.1869 4.01818 24.0657 4.16818C25.2129 3.44545 26.0994 2.3 26.5166 0.922727C25.4346 1.60455 24.2352 2.08182 22.9706 2.35455C21.9407 1.18182 20.4937 0.5 18.851 0.5C15.7874 0.5 13.2844 3.11818 13.2844 6.35C13.2844 6.81363 13.3365 7.26364 13.4278 7.68636C8.78672 7.44091 4.65409 5.10909 1.90335 1.57727C1.421 2.43636 1.14723 3.44545 1.14723 4.50909C1.14723 6.54091 2.12498 8.34091 3.63723 9.36363C2.71163 9.36363 1.85121 9.09091 1.09508 8.68182V8.72272C1.09508 11.5591 3.02451 13.9318 5.5797 14.4636C4.75934 14.6985 3.89809 14.7311 3.06362 14.5591C3.4177 15.7216 4.11116 16.7387 5.04652 17.4676C5.98187 18.1965 7.11209 18.6005 8.27829 18.6227C6.30145 20.2597 3.85103 21.1445 1.32974 21.1318C0.886494 21.1318 0.443247 21.1045 0 21.05C2.47697 22.7136 5.42326 23.6818 8.57813 23.6818C18.851 23.6818 24.4959 14.7636 24.4959 7.03182C24.4959 6.77273 24.4959 6.52727 24.4829 6.26818C25.578 5.45 26.5166 4.41364 27.2727 3.22727Z" fill="white"/>
        </svg>
         :
        name === 'minus' ? <svg width="24" height="3" viewBox="0 0 24 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.5H23" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
         :
         name === 'plus' ? <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" d="M20.4286 13.0714H12.5714V20.9286C12.5714 21.7929 11.8643 22.5 11 22.5C10.1357 22.5 9.42857 21.7929 9.42857 20.9286V13.0714H1.57143C0.707143 13.0714 0 12.3643 0 11.5C0 10.6357 0.707143 9.92857 1.57143 9.92857H9.42857V2.07143C9.42857 1.20714 10.1357 0.5 11 0.5C11.8643 0.5 12.5714 1.20714 12.5714 2.07143V9.92857H20.4286C21.2929 9.92857 22 10.6357 22 11.5C22 12.3643 21.2929 13.0714 20.4286 13.0714Z" fill="black"/>
        </svg>
        :
        name === 'apple' ? <svg width="84" height="83" viewBox="0 0 84 83" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.620178" y="0.104401" width="82.6707" height="82.6707" rx="41.3354" fill="#F3F3F3"/>
        <g clip-path="url(#clip0_3_21)">
        <path d="M51.3505 17.8431C51.2501 17.7309 47.6332 17.8874 44.4858 21.3035C41.3385 24.7166 41.8227 28.6317 41.8935 28.732C41.9644 28.8324 46.3814 28.9889 49.201 25.0178C52.0207 21.0466 51.4509 17.9583 51.3505 17.8431ZM61.1351 52.4851C60.9934 52.2017 54.2705 48.8417 54.8965 42.3816C55.5224 35.9214 59.8419 34.147 59.9098 33.9551C59.9777 33.7631 58.1472 31.6226 56.2074 30.539C54.7828 29.7758 53.2067 29.3381 51.5926 29.2576C51.2737 29.2487 50.1665 28.9771 47.8901 29.6001C46.3902 30.0105 43.0096 31.3391 42.0795 31.3923C41.1465 31.4454 38.3712 29.851 35.3862 29.4288C33.4759 29.0598 31.4505 29.8156 30.0008 30.3973C28.554 30.976 25.8023 32.6235 23.8772 37.0021C21.9522 41.3777 22.959 48.3102 23.6794 50.4656C24.3998 52.6209 25.5247 56.1462 27.438 58.7208C29.1386 61.6261 31.3944 63.6427 32.3362 64.3277C33.2781 65.0127 35.9353 65.4674 37.7777 64.5255C39.2599 63.6161 41.9349 63.0935 42.9919 63.1319C44.0459 63.1703 46.1245 63.5866 48.2533 64.7233C49.9392 65.305 51.5335 65.0629 53.1308 64.4133C54.7282 63.7608 57.04 61.2866 59.7386 56.2702C60.7621 53.9377 61.2276 52.676 61.1351 52.4851Z" fill="black"/>
        <path d="M51.3505 17.8431C51.2501 17.7309 47.6332 17.8874 44.4858 21.3035C41.3385 24.7166 41.8227 28.6317 41.8935 28.732C41.9644 28.8324 46.3814 28.9889 49.201 25.0178C52.0207 21.0466 51.4509 17.9583 51.3505 17.8431ZM61.1351 52.4851C60.9934 52.2017 54.2705 48.8417 54.8965 42.3816C55.5224 35.9214 59.8419 34.147 59.9098 33.9551C59.9777 33.7631 58.1472 31.6226 56.2074 30.539C54.7828 29.7758 53.2067 29.3381 51.5926 29.2576C51.2737 29.2487 50.1665 28.9771 47.8901 29.6001C46.3902 30.0105 43.0096 31.3391 42.0795 31.3923C41.1465 31.4454 38.3712 29.851 35.3862 29.4288C33.4759 29.0598 31.4505 29.8156 30.0008 30.3973C28.554 30.976 25.8023 32.6235 23.8772 37.0021C21.9522 41.3777 22.959 48.3102 23.6794 50.4656C24.3998 52.6209 25.5247 56.1462 27.438 58.7208C29.1386 61.6261 31.3944 63.6427 32.3362 64.3277C33.2781 65.0127 35.9353 65.4674 37.7777 64.5255C39.2599 63.6161 41.9349 63.0935 42.9919 63.1319C44.0459 63.1703 46.1245 63.5866 48.2533 64.7233C49.9392 65.305 51.5335 65.0629 53.1308 64.4133C54.7282 63.7608 57.04 61.2866 59.7386 56.2702C60.7621 53.9377 61.2276 52.676 61.1351 52.4851Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_3_21">
        <rect width="47.2404" height="47.2404" fill="white" transform="translate(18.3354 17.8195)"/>
        </clipPath>
        </defs>
        </svg>
        : 
        name === 'cancelledEyes' ? <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Clip path group">

        <g mask="url(#mask0_5_54)">
        <g id="Group">
        <path id="Vector_2" d="M2.53721 0.827191C2.439 0.753329 2.31727 0.717422 2.19451 0.72622C2.07174 0.734915 1.95614 0.787601 1.86816 0.874763C1.78121 0.961821 1.72901 1.07732 1.7198 1.20018C1.70362 1.4429 1.90742 1.62966 2.07938 1.80172L14.5198 14.2492C14.5822 14.3119 14.661 14.3569 14.7469 14.3795C14.8329 14.4021 14.9229 14.4016 15.0088 14.3781C15.0958 14.3555 15.1745 14.31 15.237 14.2461C15.3311 14.1505 15.3832 14.022 15.3832 13.8881C15.3832 13.7541 15.3311 13.6257 15.237 13.53L2.53721 0.827191Z" fill="black"/>
        <path id="Vector_3" d="M8.67758 10.7505C8.12311 10.7772 7.57169 10.6597 7.07553 10.4096C6.58039 10.1594 6.15788 9.78504 5.84996 9.32315C5.54305 8.86116 5.35992 8.32735 5.32003 7.77369C5.30872 7.61677 5.309 7.45977 5.32064 7.30393C5.37359 6.59484 5.28763 5.82817 4.7855 5.3247C4.17752 4.71507 3.20294 4.65842 2.56681 5.23861C1.90369 5.84341 1.27313 6.48364 0.678608 7.15661C0.583467 7.26065 0.531281 7.3964 0.531281 7.53717C0.531281 7.67793 0.583467 7.81369 0.678608 7.91773C2.99677 10.4753 5.03972 12.683 8.52617 12.683C9.05309 12.6789 9.57591 12.6143 10.0849 12.4915C10.7831 12.3231 10.934 11.4669 10.4252 10.9599C10.1138 10.6495 9.6436 10.5844 9.21418 10.6788C9.038 10.7175 8.85853 10.7416 8.67758 10.7505Z" fill="black"/>
        <path id="Vector_4" d="M16.3787 7.89634C16.4707 7.79618 16.524 7.66585 16.527 7.52979C16.5301 7.39373 16.483 7.26104 16.3961 7.15669C14.528 4.88866 11.9378 2.39557 8.51884 2.39557C7.99474 2.39599 7.47419 2.45805 6.9676 2.57934C6.26882 2.74664 6.11893 3.60283 6.62701 4.11091C6.941 4.4249 7.41658 4.48909 7.85068 4.39563C8.02404 4.35831 8.20063 4.33562 8.37866 4.32805C8.93314 4.30155 9.48455 4.4191 9.97969 4.66933C10.4759 4.91956 10.8973 5.29398 11.2053 5.75588C11.5122 6.21777 11.6953 6.75158 11.7352 7.30513C11.7464 7.46035 11.7462 7.61565 11.735 7.76983C11.6829 8.48159 11.7698 9.25126 12.2747 9.75562C12.8838 10.3641 13.8582 10.4204 14.4925 9.83827C15.1576 9.22783 15.7873 8.5795 16.3787 7.89634Z" fill="black"/>
        <path id="Vector_5" d="M6.24896 7.71406C6.29295 8.25769 6.52827 8.76797 6.91395 9.15365C7.29963 9.53922 7.81009 9.77493 8.35332 9.8184C8.73641 9.84852 8.86262 9.39879 8.59089 9.12707L6.9389 7.47508C6.66814 7.20432 6.21995 7.33224 6.24896 7.71406Z" fill="black"/>
        <path id="Vector_6" d="M10.8137 7.53916C10.8137 7.47383 10.7461 7.42992 10.6844 7.45137C10.5173 7.50943 10.3417 7.53924 10.1641 7.53916C10.1232 7.53916 10.1027 7.58853 10.1315 7.61752L10.4448 7.93272C10.568 8.05669 10.7758 8.00244 10.7969 7.82894C10.8086 7.73292 10.8141 7.63613 10.8137 7.53916Z" fill="black"/>
        <path id="Vector_7" d="M8.52711 5.86035C8.52627 5.69097 8.55165 5.5227 8.60155 5.3612C8.61729 5.31027 8.58041 5.25677 8.52711 5.25677C8.4255 5.25729 8.3241 5.26466 8.22368 5.27878C8.05855 5.302 8.00766 5.50049 8.12557 5.61841L8.41622 5.90907C8.45773 5.95058 8.52711 5.91906 8.52711 5.86035Z" fill="black"/>
        </g>
        </g>
        </g>
        </svg>
        :
        name === 'email' ?
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.7515 4.93274H5.06667C3.71334 4.93274 2.61837 6.04001 2.61837 7.39335L2.60606 22.157C2.60606 23.5103 3.71334 24.6176 5.06667 24.6176H24.7515C26.1049 24.6176 27.2121 23.5103 27.2121 22.157V7.39335C27.2121 6.04001 26.1049 4.93274 24.7515 4.93274ZM24.7515 9.85395L14.9091 16.0055L5.06667 9.85395V7.39335L14.9091 13.5449L24.7515 7.39335V9.85395Z" fill="#D3D3D3"/>
        </svg>

        :   
        name === 'google'  ? <svg width="84" height="83" viewBox="0 0 84 83" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.709106" y="0.104431" width="82.6707" height="82.6707" rx="41.3354" fill="#F3F3F3"/>
        <path d="M61.3451 37.5848H59.7596V37.5031H42.0444V45.3765H53.1685C51.5456 49.9598 47.1848 53.2499 42.0444 53.2499C35.5223 53.2499 30.2343 47.9619 30.2343 41.4398C30.2343 34.9177 35.5223 29.6297 42.0444 29.6297C45.055 29.6297 47.794 30.7654 49.8794 32.6206L55.4469 27.0531C51.9314 23.7768 47.2291 21.7563 42.0444 21.7563C31.1742 21.7563 22.3609 30.5696 22.3609 41.4398C22.3609 52.31 31.1742 61.1233 42.0444 61.1233C52.9146 61.1233 61.7279 52.31 61.7279 41.4398C61.7279 40.12 61.5921 38.8317 61.3451 37.5848Z" fill="#FFC107"/>
        <path d="M24.6304 32.2781L31.0974 37.0208C32.8473 32.6885 37.0852 29.6297 42.0444 29.6297C45.055 29.6297 47.794 30.7654 49.8794 32.6206L55.4469 27.0531C51.9314 23.7768 47.2291 21.7563 42.0444 21.7563C34.484 21.7563 27.9274 26.0247 24.6304 32.2781Z" fill="#FF3D00"/>
        <path d="M42.0444 61.1232C47.1287 61.1232 51.7484 59.1775 55.2412 56.0134L49.1492 50.8583C47.1066 52.4117 44.6106 53.2519 42.0444 53.2498C36.9248 53.2498 32.5777 49.9853 30.94 45.4296L24.5212 50.375C27.7788 56.7495 34.3944 61.1232 42.0444 61.1232Z" fill="#4CAF50"/>
        <path d="M61.3451 37.5847H59.7596V37.5031H42.0444V45.3765H53.1686C52.3922 47.5578 50.9939 49.4639 49.1462 50.8593L49.1492 50.8573L55.2412 56.0124C54.8102 56.4041 61.7279 51.2815 61.7279 41.4398C61.7279 40.12 61.5921 38.8317 61.3451 37.5847Z" fill="#1976D2"/>
        </svg>
        :  
        name === 'logoName' ?
        <svg width="274" height="73" viewBox="0 0 274 73" fill="#A04D07" xmlns="http://www.w3.org/2000/svg">
        <path d="M218.072 27.1939C221.388 21.2043 224.702 18.6901 230.264 17.8068C249.393 14.7712 246.124 43.0234 236.796 51.7202C225.11 64.4046 207.28 57.5243 206.621 40.3199C205.562 28.9622 206.614 16.2278 209.488 5.19854C211.134 1.03289 219.972 2.02559 219.946 5.10947C220.007 12.4239 218.74 19.6623 218.074 27.1958L218.072 27.1939ZM221.727 43.8361C221.827 48.2337 226.999 46.6787 228.904 44.3259C231.858 39.676 232.211 29.7156 226.494 31.315C221.406 32.5935 221.291 40.5166 221.727 43.8361Z" fill="#F5B129"/>
        <path d="M202.983 39.4014C202.363 44.3222 201.361 49.1577 199.439 53.7557C199.036 54.7169 198.572 55.6836 197.963 56.5242C196.626 58.3778 194.455 59.0978 192.401 58.5188C190.4 57.9529 188.723 56.1159 188.697 53.9134C188.669 51.8371 188.89 49.7181 189.322 47.6863C189.931 44.8362 190.872 42.0585 191.595 39.2307C192.005 37.6386 192.31 36.0132 192.579 34.3896C192.926 32.3226 192.245 30.5301 190.853 29.0179C189.871 27.9528 188.959 27.8619 187.951 28.9103C187.025 29.8696 186.188 30.9699 185.559 32.1444C183.06 36.8018 181.366 41.7505 180.609 46.9942C180.208 49.77 179.501 52.4104 177.898 54.7707C176.81 56.3701 175.421 57.5874 173.675 58.3722C172.227 59.0217 170.828 59.0291 169.615 58.4372C168.908 58.0921 168.264 57.5428 167.709 56.8006C167.011 55.8636 166.509 54.8505 166.176 53.7835C165.846 52.7278 165.685 51.6219 165.662 50.4844C165.616 47.9349 165.705 45.3836 165.776 42.8341C165.904 38.2287 166.091 33.6084 165.293 29.0587C164.421 29.9827 163.636 31.0311 163.039 32.1463C160.539 36.8036 158.845 41.7523 158.088 46.996C157.687 49.7719 156.98 52.4123 155.377 54.7725C154.29 56.372 152.9 57.5892 151.154 58.3741C148.864 59.4002 146.699 58.8269 145.189 56.8025C143.799 54.9377 143.185 52.7741 143.142 50.4863C143.096 47.9368 143.185 45.3854 143.255 42.836C143.389 38.032 143.585 33.2132 142.667 28.4761C142.522 27.7376 142.368 26.9991 142.19 26.2624C142.125 26.1066 142.068 25.947 142.014 25.7818C141.442 24.0005 140.964 22.1784 140.24 20.4621C136.854 12.4499 127.539 8.61455 119.137 9.05616C115.704 9.23615 112.687 9.25284 110.043 10.6185C104.445 13.515 100.881 17.9738 98.1419 24.5034C96.0433 29.5114 95.084 34.8257 94.3548 40.1918C93.6515 45.3502 91.3785 49.5808 86.6989 52.2546C82.0545 54.908 77.0928 53.8596 74.009 49.4917C73.2797 48.4582 72.7583 47.2781 72.1237 46.174C71.7248 45.4782 71.2943 44.8028 70.9325 44.2053C69.32 44.2777 68.7968 45.3261 68.3181 46.3318C67.3179 48.4285 66.5163 50.6291 65.3956 52.6535C64.6126 54.0637 63.6236 55.4925 62.3897 56.4945C58.8382 59.3761 54.294 58.658 51.5256 54.9934C50.1785 53.2102 49.44 51.1877 49.2451 48.974C48.605 41.7041 48.3044 34.4267 49.709 27.2199C50.2174 24.6017 50.1748 21.9947 51.2602 19.5547C52.5758 16.5952 55.9937 15.8771 58.7046 17.6862C59.727 18.3672 60.2855 19.3135 60.1779 20.5326C59.996 22.6163 59.5674 24.7038 59.252 26.769C58.8475 29.4335 58.7324 30.8548 58.9811 34.7347C59.0516 35.8128 58.8419 36.8185 60.0109 37.7537C60.3764 36.9039 60.6993 36.1765 61.0017 35.4436C62.0575 32.8811 62.9909 30.2574 64.1988 27.7691C64.9726 26.1734 66.0024 24.6351 67.1899 23.3177C68.7151 21.6292 70.5614 21.6032 72.1015 23.2658C73.4616 24.7335 74.6695 26.3997 75.6567 28.1439C77.0576 30.6173 78.195 33.2392 79.4493 35.798C79.7128 36.3361 79.9206 36.9168 80.2676 37.3937C80.982 38.366 82.1009 38.2454 82.5054 37.1061C82.9266 35.9111 83.1901 34.6531 83.4721 33.4136C83.9861 31.148 84.424 28.8676 84.9565 26.6057C87.2648 16.7807 93.2433 9.63508 101.493 4.20582C105.26 1.72685 111.593 0.188625 116.178 0.0383273C130.795 -0.445964 142.73 3.60835 149.23 15.1033C150.032 16.5228 152.275 22.4735 152.765 24.0117C153.032 24.8541 153.388 25.6668 153.798 26.7411C156.034 25.4219 160.07 18.4692 164.193 16.7343C167.147 15.415 169.778 14.0902 172.942 14.8046C177.202 15.5282 179.891 18.202 180.824 22.4011C180.948 22.2619 181.074 22.1265 181.204 21.9929C182.973 20.1707 184.726 18.3004 186.713 16.7343C189.252 14.7285 192.291 14.2665 195.462 14.8046C200.223 15.6136 203.02 18.8552 203.601 23.9356C204.198 29.1348 203.628 34.269 202.983 39.4069V39.4014Z" fill="#F5B129"/>
        <path d="M126.78 39.8041C121.332 44.4707 119.156 51.3769 112.763 55.0787C93.8909 65.1505 96.8653 31.0794 104.812 22.7258C111.364 11.6335 129.881 11.3904 134.577 24.0581C138.765 31.2612 144.985 67.0209 130.532 57.6783C126.806 53.2863 129.205 45.4059 126.78 39.8022V39.8041ZM108.214 41.1029C110.615 48.7291 122.577 30.7565 118.612 27.9268C113.122 27.1141 109.017 36.466 108.214 41.1029Z" fill="#F5B129"/>
        <path d="M28.1441 39.804C27.0345 40.7856 26.2237 41.3126 25.6633 42.0362C24.6112 43.3963 23.6909 44.8622 22.7371 46.2965C20.427 49.7737 17.5658 52.7185 14.1275 55.0787C12.439 56.2384 10.6076 57.0623 8.49971 57.1253C5.95765 57.2014 4.00378 56.2273 2.64925 54.0415C1.23534 51.761 0.476434 49.2431 0.214806 46.6231C-0.649868 37.9615 1.09061 29.8863 6.17845 22.7258C8.83742 18.9832 12.2163 15.9364 16.8459 14.9345C25.2161 13.1216 32.6846 16.2241 35.9447 24.0581C37.739 28.3684 38.8097 32.8718 39.9137 37.3826C40.8563 41.2328 41.8119 45.096 43.0904 48.8404C44.547 53.1081 47.0371 56.7078 50.9392 59.2351C54.2458 61.3763 57.8195 62.0666 61.6697 61.6825C62.7886 61.5712 63.9093 61.4747 65.0264 61.3467C66.238 61.2075 67.0062 61.8105 67.6 62.781C68.91 64.9222 68.6094 68.0154 66.9116 69.8913C65.301 71.6726 63.1783 72.4872 60.9052 72.6078C51.0023 73.1329 42.2981 70.6206 36.1823 62.1816C33.2394 58.1217 31.5768 53.4514 30.3503 48.6326C29.8141 46.5303 29.4578 44.3816 28.9828 42.2626C28.8418 41.6317 28.5709 41.0305 28.1516 39.804H28.1441ZM9.57777 41.1029C9.64086 42.1104 9.96372 42.5261 10.5742 42.9269C11.0678 43.2497 12.118 43.0122 12.8324 42.6801C13.0847 42.5632 13.3593 42.3943 13.5838 42.2014C17.2077 39.0767 19.6662 35.2265 20.7462 30.5468C20.9707 29.5727 20.9595 28.5132 19.9761 27.9287C19.0521 27.3813 18.0928 27.6429 17.2522 28.2831C16.716 28.6913 16.1445 29.0643 15.662 29.5281C12.7266 32.3541 10.9082 35.8351 9.78002 39.7075C9.69652 39.9914 9.639 40.537 9.57591 41.1047L9.57777 41.1029Z" fill="#F5B129"/>
        <path d="M247.239 37.3158C247.485 27.4722 251.579 14.9011 262.567 12.5612C264.163 12.1809 265.931 12.1419 267.558 12.3757C273.049 13.3628 274.686 20.2357 273.749 24.9821C272.624 32.3393 267.887 38.9857 260.91 41.8098C259.244 42.6133 259.092 42.8434 259.435 44.0402C259.903 45.6675 260.689 46.367 262.194 46.0942C264.595 45.66 266.911 44.7045 269.288 44.1701C272.025 43.7674 274.136 45.6749 273.975 48.4415C273.78 51.7499 271.772 53.9079 269.091 55.4554C266.087 57.1884 262.818 57.2422 259.481 56.5909C250.501 54.9618 247.146 45.5988 247.239 37.3158ZM258.387 32.2762C261.526 30.8938 264.167 28.335 264.233 25.2085C264.111 24.3587 263.808 23.5589 262.868 23.2806C261.923 23.0023 261.42 23.6369 260.734 24.1972C258.93 25.6724 258.93 26.7987 258.207 28.58C257.296 30.8289 257.578 31.9774 258.385 32.2762H258.387Z" fill="#A04D07"/>
        <path d="M269.386 66.0337C269.383 69.292 267.223 71.565 264.167 71.526C260.712 71.4815 258.149 69.086 258.153 65.9019C258.157 62.6863 260.547 60.0088 263.395 60.0292C266.672 60.0533 269.39 62.7791 269.386 66.0337Z" fill="#A04D07"/>
        </svg>
        : 
        name === 'password' ? <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_5_49)">
        <path d="M21.6533 22.4284H19.6848V20.46H21.6533V22.4284ZM15.7479 22.4284H17.7164V20.46H15.7479V22.4284ZM25.5903 22.4284H23.6218V20.46H25.5903V22.4284Z" fill="#D3D3D3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.90545 12.5861V7.66484C5.90545 6.76008 6.08366 5.86417 6.4299 5.02827C6.77614 4.19237 7.28363 3.43286 7.9234 2.79309C8.56317 2.15332 9.32268 1.64583 10.1586 1.29959C10.9945 0.953354 11.8904 0.775146 12.7952 0.775146C13.6999 0.775146 14.5958 0.953354 15.4317 1.29959C16.2676 1.64583 17.0271 2.15332 17.6669 2.79309C18.3067 3.43286 18.8142 4.19237 19.1604 5.02827C19.5066 5.86417 19.6849 6.76008 19.6848 7.66484V12.5861H22.6376C23.4207 12.5861 24.1717 12.8971 24.7255 13.4509C25.2792 14.0046 25.5903 14.7557 25.5903 15.5388V16.6215C26.7028 16.8473 27.703 17.4509 28.4214 18.3298C29.1398 19.2088 29.5322 20.3091 29.5322 21.4442C29.5322 22.5794 29.1398 23.6797 28.4214 24.5586C27.703 25.4376 26.7028 26.0411 25.5903 26.267V27.3497C25.5903 28.1328 25.2792 28.8838 24.7255 29.4376C24.1717 29.9913 23.4207 30.3024 22.6376 30.3024H2.95273C2.16962 30.3024 1.41858 29.9913 0.864834 29.4376C0.31109 28.8838 0 28.1328 0 27.3497L0 15.5388C0 14.7557 0.31109 14.0046 0.864834 13.4509C1.41858 12.8971 2.16962 12.5861 2.95273 12.5861H5.90545ZM7.87394 7.66484C7.87394 6.35966 8.39242 5.10793 9.31533 4.18502C10.2382 3.26212 11.49 2.74363 12.7952 2.74363C14.1003 2.74363 15.3521 3.26212 16.275 4.18502C17.1979 5.10793 17.7164 6.35966 17.7164 7.66484V12.5861H7.87394V7.66484ZM16.7321 18.4915C15.949 18.4915 15.198 18.8026 14.6442 19.3563C14.0905 19.9101 13.7794 20.6611 13.7794 21.4442C13.7794 22.2274 14.0905 22.9784 14.6442 23.5321C15.198 24.0859 15.949 24.397 16.7321 24.397H24.6061C25.3892 24.397 26.1402 24.0859 26.694 23.5321C27.2477 22.9784 27.5588 22.2274 27.5588 21.4442C27.5588 20.6611 27.2477 19.9101 26.694 19.3563C26.1402 18.8026 25.3892 18.4915 24.6061 18.4915H16.7321Z" fill="#D3D3D3"/>
        </g>
        <defs>
        <clipPath id="clip0_5_49">
        <rect width="29.5273" height="29.5273" fill="white" transform="translate(0 0.775146)"/>
        </clipPath>
        </defs>
        </svg>        
        :
        name === 'profile' ?
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="iconamoon:profile-circle-fill">
        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M14.9105 4.93178C13.1889 4.93147 11.4972 5.38271 10.0045 6.24049C8.51173 7.09826 7.27007 8.33255 6.40342 9.82017C5.53678 11.3078 5.07546 12.9967 5.06553 14.7183C5.05559 16.4399 5.49738 18.134 6.3468 19.6316C6.92093 18.8854 7.65896 18.2813 8.50383 17.8659C9.3487 17.4505 10.2778 17.235 11.2193 17.2359H18.6018C19.5432 17.235 20.4723 17.4505 21.3172 17.8659C22.1621 18.2813 22.9001 18.8854 23.4742 19.6316C24.3236 18.134 24.7654 16.4399 24.7555 14.7183C24.7455 12.9967 24.2842 11.3078 23.4176 9.82017C22.5509 8.33255 21.3093 7.09826 19.8165 6.24049C18.3238 5.38271 16.6322 4.93147 14.9105 4.93178ZM24.6837 22.2511C24.8379 22.0502 24.9856 21.8443 25.1267 21.6335C26.4907 19.6066 27.2179 17.2183 27.2147 14.7751C27.2147 7.97952 21.7061 2.47095 14.9105 2.47095C8.11491 2.47095 2.60634 7.97952 2.60634 14.7751C2.60246 17.478 3.49228 20.1064 5.1373 22.2511L5.13115 22.2733L5.56795 22.7814C6.72194 24.1306 8.15476 25.2135 9.76765 25.9555C11.3805 26.6974 13.1351 27.0809 14.9105 27.0793C15.1763 27.0793 15.4404 27.0711 15.7029 27.0547C17.923 26.9147 20.0631 26.1724 21.8931 24.9076C22.7683 24.3038 23.5616 23.5891 24.2531 22.7814L24.6899 22.2733L24.6837 22.2511ZM14.9105 7.39261C13.9315 7.39261 12.9926 7.78151 12.3004 8.47376C11.6082 9.166 11.2193 10.1049 11.2193 11.0839C11.2193 12.0628 11.6082 13.0017 12.3004 13.694C12.9926 14.3862 13.9315 14.7751 14.9105 14.7751C15.8895 14.7751 16.8284 14.3862 17.5206 13.694C18.2129 13.0017 18.6018 12.0628 18.6018 11.0839C18.6018 10.1049 18.2129 9.166 17.5206 8.47376C16.8284 7.78151 15.8895 7.39261 14.9105 7.39261Z" fill="#D3D3D3"/>
        </g>
        </svg>
        :               
        <></>
    )
}