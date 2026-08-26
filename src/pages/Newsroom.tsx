
import SlideUp from '../components/animations/SlideUp'
import FadeIn from '../components/animations/FadeIn'
import PageHero from '../components/ui/PageHero'

const Newsroom = () => {
  return (
    <div className="w-full bg-surface min-h-screen">
      <PageHero
        title="The Stories Behind The Stories"
        description="From film productions and creator programmes to festivals, partnerships and emerging technologies, the Newsroom offers a closer look at the ideas, people and projects shaping our journey."
        backgroundImage="/IMPACT_HERO_IMG.png"
        curveColor="#303030"
      />

      {/* Newsletter Section */}
      <section className="relative w-full py-24 bg-surface overflow-hidden">
        {/* Background SVG Wave */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] pointer-events-none z-0">
          <svg width="100%" height="100%" viewBox="0 0 1440 760" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1450.96 822.49C1450.96 822.49 1192.14 734.999 915.885 873.142C639.63 1011.29 573.699 669.151 361.467 669.151C149.235 669.151 33.72 822.49 33.72 822.49L-60 198.772C-60 198.772 17.6459 99.7697 284.911 -25.7105C552.176 -151.191 792.742 250.346 1024.04 250.346C1255.35 250.346 1500 -46.8925 1500 -46.8925L1450.96 822.49Z" fill="#44BB3D" fillOpacity="0.3"/>
          </svg>
        </div>

        <div className="relative z-10 mx-[5%] md:mx-[10%]">
          {/* Card Container */}
          <div className="w-full rounded-[2rem] p-10 md:p-16 flex flex-col overflow-hidden relative shadow-2xl" style={{ backgroundImage: 'url(/CAROUSEL_CARD_BG.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
            {/* Top Row (Illustration and Text) */}
            <div className="flex flex-col md:flex-row items-center gap-12 w-full mb-12">
              
              {/* Left Column (Illustration) */}
              <div className="flex-1 relative z-10 flex justify-center w-full">
                <FadeIn>
                  <svg width="389" height="250" viewBox="0 0 389 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[80%] md:w-[70%] lg:w-[80%] h-auto drop-shadow-xl">
                    <path d="M303.681 236.157H90.8607L90.9567 216.887C91.1996 168.129 136.772 127.952 193.859 127.123C194.476 127.114 195.094 127.109 195.712 127.109H195.713C208.558 127.101 221.302 129.056 233.341 132.882C273.735 145.729 300.848 178.369 302.651 215.147L303.681 236.157Z" fill="#44BB3D"/>
                    <path d="M388.399 236.157H0V236.907H388.399V236.157Z" fill="#052C6F"/>
                    <path d="M193.667 149.971L203.044 155.795L212.422 224.23H234.587L226.915 146.331L196.224 136.138L193.667 149.971Z" fill="#052C6F"/>
                    <path d="M154.452 128.13C154.452 128.13 151.894 152.883 162.124 153.611C172.354 154.339 211.57 146.331 211.57 146.331L230.325 203.117L258.457 190.74C258.457 190.74 241.407 126.674 231.177 123.034C220.947 119.394 186.847 112.113 186.847 112.113L162.124 115.753L154.452 128.13Z" fill="#052C6F"/>
                    <path d="M215.832 222.773C215.832 222.773 210.717 239.518 214.127 240.974C216.178 241.849 218.17 242.822 220.095 243.886V240.974C220.095 240.974 224.357 244.614 224.357 247.526C224.357 250.438 247.375 251.166 247.375 247.526C247.375 243.886 246.522 239.518 242.26 237.334C237.997 235.15 232.882 222.773 232.882 222.773H215.832Z" fill="#052C6F"/>
                    <path d="M240.555 192.925L242.26 206.758L248.227 215.494L262.72 201.661L251.637 186.373L240.555 192.925Z" fill="#052C6F"/>
                    <path d="M254.195 206.757C254.195 206.757 257.334 197.591 260.453 198.534C263.572 199.477 275.507 208.941 275.507 208.941L284.033 213.309C284.033 213.309 301.083 214.765 295.968 219.134C290.853 223.502 272.097 229.326 263.572 226.414C255.047 223.502 253.342 222.774 253.342 222.774L250.785 224.23L240.555 222.046L242.26 206.757C242.26 206.757 244.817 213.309 254.195 206.757Z" fill="#052C6F"/>
                    <path d="M183.437 37.1269C194.266 37.1269 203.045 29.6301 203.045 20.3823C203.045 11.1345 194.266 3.6377 183.437 3.6377C172.608 3.6377 163.829 11.1345 163.829 20.3823C163.829 29.6301 172.608 37.1269 183.437 37.1269Z" fill="#9F616A"/>
                    <path d="M171.076 30.2106C171.076 30.2106 172.781 45.4992 167.666 45.4992C162.551 45.4992 168.518 64.4279 182.158 64.4279C195.798 64.4279 200.913 41.8591 200.913 41.8591C200.913 41.8591 191.536 38.947 193.241 29.4826C194.946 20.0183 171.076 30.2106 171.076 30.2106Z" fill="#9F616A"/>
                    <path d="M169.717 44.3328L162.55 46.9551L143.101 53.9823C142.316 54.2657 141.66 54.7579 141.231 55.3855C140.801 56.0132 140.62 56.7427 140.715 57.4653L148.058 113.205C148.058 113.205 140.385 127.038 152.32 127.766L154.025 132.862L167.666 119.03L218.816 117.574L219.668 46.955L196.264 39.0571C196.264 39.0571 193.081 54.0869 169.717 44.3328Z" fill="#FF0A0E"/>
                    <path d="M145.927 56.0557L142.776 55.287C142.423 55.2008 142.052 55.1796 141.689 55.2248C141.325 55.2699 140.977 55.3804 140.667 55.549C140.357 55.7176 140.093 55.9403 139.891 56.2026C139.69 56.4649 139.556 56.7607 139.498 57.0705L131.138 101.854C130.486 105.17 131.11 108.578 132.917 111.566C135.5 115.742 140.865 119.53 151.894 115.026L159.567 67.7041L145.927 56.0557Z" fill="#FF0A0E"/>
                    <path d="M209.865 45.8633L220.095 47.3193L248.227 80.8085L250.785 86.6327L266.982 82.2646C266.982 82.2646 266.13 88.8168 274.655 88.0888C274.655 88.0888 264.425 112.114 243.112 104.833C221.8 97.5531 214.98 75.7123 214.98 75.7123L209.865 45.8633Z" fill="#FF0A0E"/>
                    <path d="M221.8 60.4241L183.437 47.3193L181.732 51.6876L199.634 64.792L221.8 60.4241Z" fill="#CCCCCC"/>
                    <path d="M171.632 21.4496C172.356 21.2845 172.462 20.4634 172.486 19.8237C172.616 16.3977 175.032 12.8822 178.872 11.8849C180.346 11.5398 181.889 11.4673 183.398 11.6722C185.552 11.9172 187.631 12.5098 189.526 13.4183C190.526 13.8985 191.508 14.4768 192.642 14.6235C193.391 14.7204 196.635 15.5259 197.381 15.6392C199.022 15.8885 200.546 17.1418 202.12 16.6754C203.626 16.2292 203.959 14.5641 203.996 13.2033C204.079 10.103 201.323 5.81217 198.895 3.50582C197.053 1.75561 194.28 0.947693 191.568 0.527591C188.401 0.0929789 185.191 -0.0737719 181.986 0.0297609C177.646 0.0958488 173.187 0.381863 169.274 1.98522C165.362 3.58858 162.075 6.77965 161.887 10.4824C161.848 11.2537 161.942 12.0282 161.866 12.7975C161.68 14.6742 160.513 16.3693 159.966 18.1937C159.575 19.5323 159.516 20.9262 159.794 22.2853C160.072 23.6444 160.681 24.9387 161.581 26.0846C163.033 27.9096 168.84 29.5663 168.756 31.7716C169.805 30.843 167.33 29.9083 168.38 28.9797C168.85 28.673 169.183 28.2379 169.323 27.7469C169.463 27.256 169.401 26.7389 169.149 26.2819L168.034 22.5696C167.83 21.8898 167.63 21.154 167.938 20.5035C169.133 17.9823 170.424 21.7249 171.632 21.4496Z" fill="#052C6F"/>
                    <path d="M181.732 51.6878L165.534 105.562L228.62 124.491L265.278 98.2814L288.295 39.3115L250.785 62.6083L181.732 51.6878Z" fill="#F2F2F2"/>
                    <path d="M184.824 57.5242L184.607 58.228L245.987 72.0605L246.205 71.3567L184.824 57.5242Z" fill="#E4E4E4"/>
                    <path d="M183.119 61.1634L182.902 61.8672L244.282 75.6997L244.5 74.9959L183.119 61.1634Z" fill="#E4E4E4"/>
                    <path d="M182.267 64.804L182.049 65.5078L243.43 79.3403L243.647 78.6365L182.267 64.804Z" fill="#E4E4E4"/>
                    <path d="M181.414 68.4441L181.197 69.1479L242.577 82.9805L242.795 82.2767L181.414 68.4441Z" fill="#E4E4E4"/>
                    <path d="M180.562 72.0843L180.344 72.7881L241.725 86.6206L241.942 85.9168L180.562 72.0843Z" fill="#E4E4E4"/>
                    <path d="M179.709 75.7244L179.492 76.4282L240.872 90.2607L241.09 89.5569L179.709 75.7244Z" fill="#E4E4E4"/>
                    <path d="M178.857 79.365L178.639 80.0688L240.02 93.9014L240.237 93.1975L178.857 79.365Z" fill="#E4E4E4"/>
                    <path d="M178.004 83.0052L177.787 83.709L239.167 97.5415L239.385 96.8377L178.004 83.0052Z" fill="#E4E4E4"/>
                    <path d="M177.152 86.6443L176.934 87.3481L238.315 101.181L238.532 100.477L177.152 86.6443Z" fill="#E4E4E4"/>
                    <path d="M155.738 91.3163C155.738 91.3163 174.912 81.5363 183.437 88.0885C191.962 94.6408 158.714 104.105 158.714 104.105L155.738 91.3163Z" fill="#9F616A"/>
                    <path d="M134.844 96.0967L159.567 88.0884C159.567 88.0884 155.304 101.921 163.829 102.649L151.894 115.025C151.894 115.025 128.024 115.025 134.844 96.0967Z" fill="#FF0A0E"/>
                    <path d="M199.901 95.7988L232.707 105.241L224.943 119.693L192.137 110.251L199.901 95.7988Z" fill="#E4E4E4"/>
                    <path d="M258.031 65.1555L282.754 49.1387L275.934 68.7957L250.359 84.8121L258.031 65.1555Z" fill="#CCCCCC"/>
                    <path d="M270.561 75.7867L245.838 91.8027L246.353 92.3829L271.077 76.3669L270.561 75.7867Z" fill="#E4E4E4"/>
                    <path d="M268.856 83.795L244.133 99.811L244.648 100.391L269.372 84.3751L268.856 83.795Z" fill="#E4E4E4"/>
                    <path d="M272.098 88.8163C272.098 88.8163 293.41 77.8959 279.77 73.5277C266.13 69.1596 266.13 85.9042 266.13 85.9042C266.13 85.9042 265.277 89.5443 272.098 88.8163Z" fill="#9F616A"/>
                    <path opacity="0.1" d="M147.206 64.4282L146.353 92.8214L159.567 89.6009L148.91 89.9089L147.206 64.4282Z" fill="black"/>
                    <path d="M54.1804 223.316C56.8454 231.729 65.9734 236.939 65.9734 236.939C65.9734 236.939 70.7807 228.509 68.1157 220.097C65.4508 211.684 56.3228 206.474 56.3228 206.474C56.3228 206.474 51.5155 214.903 54.1804 223.316Z" fill="#8985A8"/>
                    <path d="M58.0963 221.508C65.409 227.587 66.3021 236.932 66.3021 236.932C66.3021 236.932 55.3392 236.421 48.0266 230.342C40.714 224.263 39.8208 214.918 39.8208 214.918C39.8208 214.918 50.7837 215.429 58.0963 221.508Z" fill="#FF0A0E"/>
                    <path d="M306.753 142.099H293.589V153.341H306.753V142.099Z" fill="#F2F2F2"/>
                    <path d="M254.096 14.6895H240.932V25.9314H254.096V14.6895Z" fill="#F2F2F2"/>
                    <path d="M88.6667 128.608C92.3019 128.608 95.2488 126.092 95.2488 122.987C95.2488 119.883 92.3019 117.366 88.6667 117.366C85.0316 117.366 82.0847 119.883 82.0847 122.987C82.0847 126.092 85.0316 128.608 88.6667 128.608Z" fill="#F2F2F2"/>
                  </svg>
                </FadeIn>
              </div>

              {/* Right Column (Text) */}
              <div className="flex-1 relative z-10 w-full text-white">
                <SlideUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
                    Stay Connected To The Future
                  </h2>
                </SlideUp>
                <SlideUp delay={0.2}>
                  <p className="text-white/90 leading-relaxed max-w-lg mb-6">
                    Be the first to hear about new Story Worlds, experiences, creator opportunities, platform launches and innovation initiatives. Join our growing community of creators, innovators, storytellers and changemakers.
                  </p>
                </SlideUp>
              </div>
            </div>

            {/* Bottom Row (Form) */}
            <div className="relative z-10 w-full flex flex-col items-center">
              <SlideUp delay={0.3} className="w-full">
                <div className="flex flex-col sm:flex-row gap-6 w-full max-w-7xl mx-auto mb-8">
                  <div className="flex-1">
                    <label className="text-white text-xs mb-2 block font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-transparent border border-white/30 rounded-md py-2.5 px-4 text-white placeholder-white/30 outline-none focus:border-white/60 text-sm transition-colors" 
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-white text-xs mb-2 block font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="..........." 
                      className="w-full bg-transparent border border-white/30 rounded-md py-2.5 px-4 text-white placeholder-white/30 outline-none focus:border-white/60 text-sm transition-colors" 
                    />
                  </div>
                </div>
              </SlideUp>
              
              <SlideUp delay={0.4}>
                <button className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors shadow-lg text-sm">
                  Subscribe For Updates
                </button>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsroom
