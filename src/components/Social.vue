<template>
<div class="outer-social-container">
    <svg-main-gradient/>
    <div class="social-container">
        <div class="vertical-line1 show-vertical-line"/>
        <div class="github">
            <svg  width="24" height="24" fill="#cee8f5"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg>
        </div>
        <div class="linkedin">
            <svg  width="24" height="24" fill="#cee8f5"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg>
        </div>
        <div class="email">
            <svg  width="24" height="24" fill="#cee8f5"><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4ZM5,6H19a1,1,0,0,1,1,1l-8,4.88L4,7A1,1,0,0,1,5,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9.28l7.48,4.57a1,1,0,0,0,1,0L20,9.28Z"></path></svg>
        </div>
        <div class="vertical-line2 show-vertical-line"/>

    </div>
    </div>
</template>
<script>
import SvgLinearGradient from './SvgLinearGradient';
export default {
    components:{
        'svg-main-gradient': SvgLinearGradient
    }
}
</script>
<style lang="scss" scoped>
.outer-social-container{
    position: absolute;
    bottom: 65%;
    left: 26px;
}
@media screen and (max-width: 768px){
    .social-container{
        display: none;
    }
}
@media (min-width: 769px){
        .social-container{
            position:absolute;
            display: flex;
            flex-direction: column;
            position: fixed;
            align-items: center;
            height: 50%;
            justify-content: flex-start;
        }
        svg{
            transition: all 0.3s ease;
            opacity: 0.8;
        }
        svg:hover{
            fill: url(#main-gradient);
        }
        .vertical-line1{
            background: linear-gradient(45deg, rgb(62, 110, 173) 0%,rgb(106, 228, 230) 50%, transparent 100%);
            height: 100%;
            width: 1.5px;
            transition: opacity 0.3s ease;
            opacity: 0;
        }
        .vertical-line2{
            background: linear-gradient(135deg, rgb(62, 110, 173) 0%,rgb(106, 228, 230) 50%, transparent 100%);
            height: 100%;
            width: 1.5px;
            transition: opacity 0.3s ease;
            opacity: 0;
        }
        .show-vertical-line{
             animation: 0.3s ease 0.3s 1 normal forwards running showLine;
        }
        @keyframes showLine {
                0%{
                    opacity: 0;
                }
                100%{
                    opacity: 1;
                }
            }
        
        .github{
            margin-top: 5px;
            margin-bottom: 8px;
            transform: translateX(-50px);
            animation: 0.3s ease 0.3s 1 normal forwards running show-social-icon;
        }
        .linkedin{
            margin-bottom: 8px;
             transform: translateX(-50px);
            animation: 0.3s ease 0.44s 1 normal forwards running show-social-icon;
        }
        .email{
             transform: translateX(-50px);
            animation: 0.3s ease 0.58s 1 normal forwards running show-social-icon;
        }
        @keyframes show-social-icon {
            0%{
                transform: translateX(-50px);
            }
            100%{
                transform: translateX(0px);    
            }
        }
    }
</style>