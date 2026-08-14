import React from 'react'
import PageHero from '../components/ui/PageHero'
import FAQSection from '../components/ui/FAQSection'

const Contact = () => {
  return (
    <div className="w-full bg-surface min-h-screen">
      <PageHero
        title="Let's Build Something Meaningful Together"
        description="Whether you're interested in developing a story, creating an experience, exploring a partnership, supporting an initiative or building something entirely new, we'd love to hear from you."
        backgroundImage="/CONTACT_HERO_PAGE.png"
        curveColor="#303030"
      />

      <section className="relative w-full py-24 overflow-hidden ">
        {/* Background SVG */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center mix-blend-screen opacity-50">
          <svg width="100%" height="100%" viewBox="0 0 1440 1415" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-[1440px] w-full h-auto opacity-70">
            <path fillRule="evenodd" clipRule="evenodd" d="M1450.96 1424.84C1450.96 1424.84 1192.14 1276.94 915.885 1510.46C639.63 1743.97 573.699 1165.64 361.467 1165.64C149.235 1165.64 33.72 1424.84 33.72 1424.84L-60 370.519C-60 370.519 17.6459 203.167 284.911 -8.94165C552.176 -221.051 792.742 457.698 1024.04 457.698C1255.35 457.698 1500 -44.7472 1500 -44.7472L1450.96 1424.84Z" fill="#44BB3D" fillOpacity="0.3" />
          </svg>
        </div>

        <div className="relative z-10 mx-[5%] md:mx-[10%]  flex flex-col gap-16 lg:gap-24">

          {/* Top Row: Form & Location */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form Section */}
            <div>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">How Can We Help?</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Select Your Area Of Interest</h2>
              <p className="text-white/80 mb-8 text-lg">
                Choose the option that best describes your enquiry so we can connect you with the right team.
              </p>

              {/* Form Container */}
              <div className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-sm font-semibold">Full Name</label>
                      <input type="text" placeholder="Your Name" className="bg-white/40 border border-transparent rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30 transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-white text-sm font-semibold">Email Address</label>
                      <input type="email" placeholder="Email Address" className="bg-white/40 border border-transparent rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30 transition-colors" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <select className="bg-white/40 border border-transparent rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-white/50 focus:bg-white/30 transition-colors">
                      <option className="text-black">Story Worlds</option>
                      <option className="text-black">Experiences</option>
                      <option className="text-black">Platforms</option>
                      <option className="text-black">AI Creative Lab</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.5L6 6L10.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <select className="bg-white/40 border border-transparent rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-white/50 focus:bg-white/30 transition-colors">
                      <option className="text-black">Film Productions</option>
                      <option className="text-black">Partnerships</option>
                      <option className="text-black">General Enquiry</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.5L6 6L10.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white text-sm font-semibold">Your Message</label>
                    <textarea rows={5} placeholder="Please provide details for our team to evaluate..." className="bg-white/40 border border-transparent rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30 transition-colors resize-none"></textarea>
                  </div>

                  <button type="submit" className="bg-[#44BB3D] hover:bg-[#3ca336] text-white font-medium py-4 rounded-lg transition-colors mt-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Location Section */}
            <div>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">Visit Us</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Location</h2>

              <div className="relative">
                {/* Green shadow offset */}
                <div className="absolute inset-0 bg-[#44BB3D] rounded-3xl -translate-x-3 -z-10"></div>
                {/* White Card */}
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm relative z-10 flex gap-4 items-start overflow-hidden">
                  <div className="mt-[6px] text-[#44BB3D] shrink-0">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6" cy="6" r="6" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-[#1A237E] text-[22px] font-bold mb-6">Rise Interactive Studios</h3>
                    <p className="text-[#4A5568] leading-[2.2] text-[17px] font-light">
                      10a Olaniji Street Juli Estate,<br />
                      Off Kudirat Abiola Way,<br />
                      Oregun,<br />
                      Lagos, Nigeria.
                    </p>
                  </div>
                  {/* Pin Icon watermark */}
                  <div className="absolute right-6 top-8 text-[#F4F4F4] pointer-events-none z-0">
                    <svg width="100" height="120" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.372 0 0 5.373 0 12C0 21 12 30 12 30C12 30 24 21 24 12C24 5.373 18.628 0 12 0ZM12 16.5C9.515 16.5 7.5 14.485 7.5 12C7.5 9.515 9.515 7.5 12 7.5C14.485 7.5 16.5 9.515 16.5 12C16.5 14.485 14.485 16.5 12 16.5Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Connect Text & Socials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end pb-12 lg:pb-0">
            {/* Connect Section */}
            <div>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">Connect With Us</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Follow The Journey</h2>
              <p className="text-white/80 text-lg">
                Stay connected to our latest productions, experiences, creator initiatives and innovation programmes.
              </p>
            </div>

            {/* Social Links Card */}
            <div>
              <div className="relative">
                {/* Green shadow offset */}
                <div className="absolute inset-0 bg-[#44BB3D] rounded-3xl -translate-x-3 -z-10"></div>
                {/* White Card */}
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl relative z-10">
                  <ul className="flex flex-col gap-6">
                    <li className="flex items-center gap-4 text-gray-800 text-[15px] font-semibold hover:text-primary transition-colors cursor-pointer">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_60_291)">
                            <path d="M12.25 0H3.75C1.67893 0 0 1.67893 0 3.75V12.25C0 14.3211 1.67893 16 3.75 16H12.25C14.3211 16 16 14.3211 16 12.25V3.75C16 1.67893 14.3211 0 12.25 0Z" fill="url(#paint0_radial_60_291)" />
                            <path d="M12.25 0H3.75C1.67893 0 0 1.67893 0 3.75V12.25C0 14.3211 1.67893 16 3.75 16H12.25C14.3211 16 16 14.3211 16 12.25V3.75C16 1.67893 14.3211 0 12.25 0Z" fill="url(#paint1_radial_60_291)" />
                            <path d="M8.00056 1.75C6.30319 1.75 6.09013 1.75744 5.4235 1.78775C4.75813 1.81825 4.30394 1.92356 3.90656 2.07812C3.49544 2.23775 3.14675 2.45131 2.79938 2.79881C2.45169 3.14625 2.23813 3.49494 2.078 3.90587C1.923 4.30338 1.81756 4.75775 1.78762 5.42281C1.75781 6.0895 1.75 6.30263 1.75 8.00006C1.75 9.6975 1.7575 9.90987 1.78775 10.5765C1.81838 11.2419 1.92369 11.6961 2.07812 12.0934C2.23787 12.5046 2.45144 12.8533 2.79894 13.2006C3.14625 13.5483 3.49494 13.7624 3.90575 13.922C4.30344 14.0766 4.75769 14.1819 5.42294 14.2124C6.08962 14.2427 6.3025 14.2501 7.99981 14.2501C9.69738 14.2501 9.90975 14.2427 10.5764 14.2124C11.2417 14.1819 11.6964 14.0766 12.0941 13.922C12.5051 13.7624 12.8532 13.5483 13.2005 13.2006C13.5482 12.8533 13.7617 12.5046 13.9219 12.0936C14.0755 11.6961 14.181 11.2417 14.2122 10.5766C14.2422 9.91 14.25 9.6975 14.25 8.00006C14.25 6.30263 14.2422 6.08962 14.2122 5.42294C14.181 4.75756 14.0755 4.30344 13.9219 3.90606C13.7617 3.49494 13.5482 3.14625 13.2005 2.79881C12.8529 2.45119 12.5052 2.23762 12.0938 2.07819C11.6953 1.92356 11.2409 1.81819 10.5755 1.78775C9.90881 1.75744 9.69656 1.75 7.99862 1.75H8.00056ZM7.43988 2.87631C7.60631 2.87606 7.792 2.87631 8.00056 2.87631C9.66938 2.87631 9.86712 2.88231 10.5261 2.91225C11.1355 2.94012 11.4663 3.04194 11.6866 3.1275C11.9783 3.24075 12.1862 3.37619 12.4048 3.595C12.6236 3.81375 12.7589 4.02206 12.8725 4.31375C12.9581 4.53375 13.06 4.8645 13.0878 5.47388C13.1177 6.13275 13.1242 6.33062 13.1242 7.99862C13.1242 9.66663 13.1177 9.86456 13.0878 10.5234C13.0599 11.1327 12.9581 11.4635 12.8725 11.6836C12.7593 11.9753 12.6236 12.1829 12.4048 12.4016C12.1861 12.6203 11.9784 12.7557 11.6866 12.869C11.4665 12.9549 11.1355 13.0565 10.5261 13.0844C9.86725 13.1143 9.66938 13.1208 8.00056 13.1208C6.33169 13.1208 6.13387 13.1143 5.47506 13.0844C4.86569 13.0563 4.53494 12.9544 4.31444 12.8689C4.02281 12.7556 3.81444 12.6202 3.59569 12.4014C3.37694 12.1827 3.24156 11.9749 3.128 11.6831C3.04244 11.463 2.9405 11.1322 2.91275 10.5229C2.88281 9.864 2.87681 9.66613 2.87681 7.99706C2.87681 6.328 2.88281 6.13119 2.91275 5.47231C2.94062 4.86294 3.04244 4.53219 3.128 4.31187C3.24131 4.02019 3.37694 3.81188 3.59575 3.59313C3.81456 3.37438 4.02281 3.23894 4.3145 3.12544C4.53481 3.0395 4.86569 2.93794 5.47506 2.90994C6.05162 2.88387 6.27506 2.87606 7.43988 2.87475V2.87631ZM11.3368 3.91406C10.9228 3.91406 10.5868 4.24969 10.5868 4.66381C10.5868 5.07788 10.9228 5.41381 11.3368 5.41381C11.7509 5.41381 12.0868 5.07788 12.0868 4.66381C12.0868 4.24975 11.7509 3.91381 11.3368 3.91381V3.91406ZM8.00056 4.79038C6.22806 4.79038 4.79094 6.2275 4.79094 8.00006C4.79094 9.77262 6.22806 11.2091 8.00056 11.2091C9.77312 11.2091 11.2098 9.77262 11.2098 8.00006C11.2098 6.22756 9.773 4.79038 8.00044 4.79038H8.00056ZM8.00056 5.91669C9.15112 5.91669 10.0839 6.84938 10.0839 8.00006C10.0839 9.15063 9.15112 10.0834 8.00056 10.0834C6.85 10.0834 5.91725 9.15063 5.91725 8.00006C5.91725 6.84938 6.84994 5.91669 8.00056 5.91669Z" fill="white" />
                          </g>
                          <defs>
                            <radialGradient id="paint0_radial_60_291" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.25 17.2323) rotate(-90) scale(15.8572 14.7484)">
                              <stop stopColor="#FFDD55" />
                              <stop offset="0.1" stopColor="#FFDD55" />
                              <stop offset="0.5" stopColor="#FF543E" />
                              <stop offset="1" stopColor="#C837AB" />
                            </radialGradient>
                            <radialGradient id="paint1_radial_60_291" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-2.68005 1.1526) rotate(78.68) scale(7.08825 29.218)">
                              <stop stopColor="#3771C8" />
                              <stop offset="0.128" stopColor="#3771C8" />
                              <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
                            </radialGradient>
                            <clipPath id="clip0_60_291">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span>riseinteractivestudios</span>
                    </li>

                    <li className="flex items-center gap-4 text-gray-800 text-[15px] font-semibold hover:text-primary transition-colors cursor-pointer">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_60_300)">
                            <path d="M12.25 0H3.75C1.67893 0 0 1.67893 0 3.75V12.25C0 14.3211 1.67893 16 3.75 16H12.25C14.3211 16 16 14.3211 16 12.25V3.75C16 1.67893 14.3211 0 12.25 0Z" fill="#0A66C2" />
                            <path d="M11.5447 13.6053H13.3741C13.4404 13.6053 13.5039 13.579 13.5508 13.5321C13.5977 13.4852 13.624 13.4217 13.6241 13.3554L13.625 9.49025C13.625 7.47006 13.1897 5.91725 10.8289 5.91725C9.93144 5.88388 9.08512 6.3465 8.62844 7.119C8.6262 7.12275 8.62281 7.12567 8.61876 7.12731C8.61471 7.12895 8.61024 7.12922 8.60603 7.12808C8.60181 7.12694 8.59808 7.12445 8.59542 7.12099C8.59275 7.11754 8.59129 7.1133 8.59125 7.10894V6.35375C8.59125 6.28745 8.56491 6.22386 8.51803 6.17697C8.47114 6.13009 8.40755 6.10375 8.34125 6.10375H6.60519C6.53888 6.10375 6.4753 6.13009 6.42841 6.17697C6.38153 6.22386 6.35519 6.28745 6.35519 6.35375V13.355C6.35519 13.4213 6.38153 13.4849 6.42841 13.5318C6.4753 13.5787 6.53888 13.605 6.60519 13.605H8.43444C8.50074 13.605 8.56433 13.5787 8.61121 13.5318C8.6581 13.4849 8.68444 13.4213 8.68444 13.355V9.89419C8.68444 8.91563 8.87006 7.96794 10.0833 7.96794C11.2792 7.96794 11.2947 9.08769 11.2947 9.95756V13.3553C11.2947 13.4216 11.321 13.4852 11.3679 13.5321C11.4148 13.579 11.4784 13.6053 11.5447 13.6053ZM2.375 3.72675C2.375 4.46825 2.98544 5.07837 3.727 5.07837C4.46837 5.07831 5.07844 4.46781 5.07844 3.72644C5.07831 2.98506 4.46819 2.375 3.72675 2.375C2.98512 2.375 2.375 2.98525 2.375 3.72675ZM2.80994 13.6053H4.64162C4.70793 13.6053 4.77152 13.579 4.8184 13.5321C4.86529 13.4852 4.89162 13.4216 4.89162 13.3553V6.35375C4.89162 6.28745 4.86529 6.22386 4.8184 6.17697C4.77152 6.13009 4.70793 6.10375 4.64162 6.10375H2.80994C2.74363 6.10375 2.68004 6.13009 2.63316 6.17697C2.58628 6.22386 2.55994 6.28745 2.55994 6.35375V13.3553C2.55994 13.4216 2.58628 13.4852 2.63316 13.5321C2.68004 13.579 2.74363 13.6053 2.80994 13.6053Z" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="clip0_60_300">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span>riseinteractivestudios</span>
                    </li>

                    <li className="flex items-center gap-4 text-gray-800 text-[15px] font-semibold hover:text-primary transition-colors cursor-pointer">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_60_308)">
                            <mask id="mask0_60_308" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                              <path d="M0 0H16V16H0V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_60_308)">
                              <path d="M12.6 0.749756H15.0537L9.69372 6.89147L16 15.2503H11.0629L7.19314 10.1818L2.77029 15.2503H0.314286L6.04686 8.6789L0 0.750899H5.06286L8.55543 5.3829L12.6 0.749756ZM11.7371 13.7783H13.0971L4.32 2.14518H2.86171L11.7371 13.7783Z" fill="black" />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_60_308">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span>riseinteractivestudios</span>
                    </li>

                    <li className="flex items-center gap-4 text-gray-800 text-[15px] font-semibold hover:text-primary transition-colors cursor-pointer">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_60_319)">
                            <path d="M16 8C16 3.58175 12.4183 0 8 0C3.58175 0 0 3.58175 0 8C0 11.993 2.9255 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77175 3.125C10.647 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.55994 5.25 9.25 5.86669 9.25 6.49937V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.9931 16 8Z" fill="#1877F2" />
                            <path d="M11.1141 10.3125L11.4688 8H9.25V6.49937C9.25 5.86662 9.55994 5.25 10.5538 5.25H11.5625V3.28125C11.5625 3.28125 10.647 3.125 9.77169 3.125C7.94438 3.125 6.75 4.2325 6.75 6.2375V8H4.71875V10.3125H6.75V15.9028C7.16351 15.9676 7.58144 16.0001 8 16C8.41856 16.0001 8.83649 15.9676 9.25 15.9028V10.3125H11.1141Z" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="clip0_60_319">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span>riseinteractivestudios</span>
                    </li>

                    <li className="flex items-center gap-4 text-gray-800 text-[15px] font-semibold hover:text-primary transition-colors cursor-pointer">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_60_326)">
                            <path d="M18.5804 2.18361C18.4714 1.76155 18.2588 1.37678 17.9638 1.0676C17.6688 0.75842 17.3016 0.535625 16.8989 0.4214C15.4245 0 9.49037 0 9.49037 0C9.49037 0 3.55598 0.0127555 2.08155 0.434156C1.67881 0.548388 1.31164 0.771195 1.01662 1.08039C0.721602 1.38958 0.509023 1.77437 0.400053 2.19644C-0.0459271 4.94184 -0.218931 9.1252 0.412299 11.7608C0.52128 12.1828 0.733864 12.5676 1.02888 12.8768C1.3239 13.186 1.69106 13.4088 2.0938 13.523C3.56823 13.9444 9.50246 13.9444 9.50246 13.9444C9.50246 13.9444 15.4366 13.9444 16.911 13.523C17.3137 13.4088 17.6809 13.186 17.9759 12.8768C18.271 12.5676 18.4836 12.1828 18.5926 11.7608C19.063 9.01149 19.2079 4.8307 18.5804 2.18361Z" fill="#FF0000" />
                            <path d="M7.60156 9.96026L12.5243 6.9722L7.60156 3.98413V9.96026Z" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="clip0_60_326">
                              <rect width="19" height="14" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span>riseinteractivestudios</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <FAQSection />
     <div className="lg:col-span-7 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-tight">The Future Is Built Through Collaboration</h2>
              
              <p className="text-white/90 leading-relaxed text-[15px] md:text-base lg:text-lg mb-10 max-w-2xl">
            Every story, experience, platform and innovation initiative begins with a conversation.  Whether you're a creator, institution, investor, partner or innovator, we welcome opportunities to explore what we can build  together.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary hover:bg-primary-hover text-white font-medium rounded-lg px-6 py-3 transition-colors text-[15px] cursor-pointer">
                 Start A Conversation
                </button>
                <button className="border border-white/50 hover:border-white text-white font-medium rounded-lg px-6 py-3 transition-colors text-[15px] cursor-pointer bg-transparent">
                Explore Our Ecosystem
                </button>
              </div>
            </div>
    </div>
  )
}

export default Contact

