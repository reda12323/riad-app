// import ResButton from '../reservebutton/ResButton';
import './MainPage.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animations for all 8 image boxes
      gsap.utils.toArray(".image-box-1").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
        });
      });

      gsap.utils.toArray(".image-box-2").forEach((el) => {
        gsap.from(el, {
          scale: 1.2,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none reverse" },
        });
      });

      gsap.utils.toArray(".image-box-3").forEach((el) => {
        gsap.from(el, {
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
        });
      });

      gsap.utils.toArray(".image-box-4").forEach((el) => {
        gsap.from(el, {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
        });
      });

      gsap.utils.toArray(".image-box-5").forEach((el) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 1.4,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
        });
      });

      gsap.utils.toArray(".image-box-6").forEach((el) => {
        gsap.from(el, {
          rotation: 10,
          scale: 0.9,
          opacity: 0,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
        });
      });

      gsap.utils.toArray(".image-box-7").forEach((el) => {
        gsap.from(el, {
          y: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
        });
      });

      gsap.utils.toArray(".image-box-8").forEach((el) => {
        gsap.from(el, {
          scale: 1.2,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none reverse" },
        });
        // gsap.from(el, {
        //   scale: 0.8,
        //   opacity: 0,
        //   duration: 1.5,
        //   ease: "elastic.out(1, 0.5)",
        //   scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
        // });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='complete-page-main' ref={mainRef}>
      <div className="gl-big-part">
        <div className='gl-medu-part'>
          Explorez notre galerie photo et laissez-vous transporter dans l’univers enchanteur de Riad Romana...
        </div>

        <div id='gl-galerie-ph'>
          <h2 style={{ marginBottom: '3%' }}>Galerie photos</h2>
        </div>

        <div className="image-container">
          <div className='image-box-1'>
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_110841-scaled-pqmwttopdjkxjruyqcea1i6o9412fzn8tbqkvo54eg.jpg" style={{ width: '46.8%' }} alt="" />
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_100511-scaled-prcxkqk5xdpgm9g3lrbsg58jdu2zoq9ua8ysowuc94.jpg" style={{ width: '46.8%' }} alt="" />
          </div>

          <div className='image-box-2'>
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_111207-scaled-prd0bo2ksxlgi8s1xds0haed2q5zp3jbm1dstximws.jpg" style={{ width: '22.7%' }} alt="" />
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_112010-scaled-prcxq0fhu7dxoytjted8jf7y9lsdqsq52hb4eedsvw.jpg" style={{ width: '22.7%' }} alt="" />
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_111710v2-scaled-pqwjg6co5f220n72doh5rpoo18vpk9wkg3f6oe85o4.jpg" style={{ width: '46.8%' }} alt="" />
          </div>

          <div className='image-box-3'>
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_105858-scaled-prd01o2iyszzhx3wrp692s483cta3be172sm44uf90.jpg" style={{ width: '46.8%' }} alt="" />
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/IMG_4118-scaled-prcz74b7z835ntofpcsef0rijc0yn5k6dc8qj7n1bw.jpg" style={{ width: '22.7%' }} alt="" />
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/IMG_4008-scaled-prcyun0d8f03i7t2kykqb656l5jifu0hbken4y57y4.jpg" style={{ width: '22.7%' }} alt="" />
          </div>

          <div className='image-box-4'>
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_111250-scaled-prcxpb24giltyhpue9jrkbsb984seyu2yposezrxxk.jpg" style={{ width: '94.8%' }} alt="" />
          </div>

          <div className='image-box-5'>
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_110549-scaled-prd067mfzz7vm2ic8nvc4mufgef5anfbtkb3ma3x6c.jpg" style={{ width: '46.8%' }} alt="" />
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/IMG_4025-scaled-prcz077zo4m675q93v49k9md484ozd3b33d2cvwd4s.jpg" style={{ width: '22.7%' }} alt="" />
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_111200-scaled-prcxnk2nzs0zdmdw5c6b11imfdvvn8zdebzhae0t4s.jpg" style={{ width: '22.7%' }} alt="" />
          </div>

          <div className='image-box-6'>
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/IMG_4102-scaled-prcz3zil73sqym8a00163t8793gwzh4dxtygy0aa2k.jpg" style={{ width: '22.7%' }} alt="" />
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/IMG_4009-scaled-prcyxn3t2d42ldg21ratrwv6wgqq10xm2ffhbroy2k.jpg" style={{ width: '22.7%' }} alt="" />
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_105038-scaled-prcy4qkls6n03d8f9wj686bbu4k9mdqnpwir5n1rjo.jpg" style={{ width: '46.8%' }} alt="" />
          </div>

          <div className='image-box-7'>
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_100504-scaled-pqmwb2sl2hx1zr3a78o5b8hpqgfixb7ywjbyazxsi0.jpg" style={{ width: '46.8%' }} alt="" />
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_094749-scaled-pqqnq4uix7i4wtsraied915rh7w8o0uyhtuiynn5ag.jpg" style={{ width: '46.8%' }} alt="" />
          </div>

          <div className='image-box-8'>
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_102448-scaled-prcztac75kflgrh99fqnpxduvgrl66kaf23yz4rsl8.jpg" style={{ width: '22.7%' }} alt="" />
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_094839-scaled-prcxsio02atgnj6h6hdf6sg7alfm9qodevxqgyo0ak.jpg" style={{ width: '22.7%' }} alt="" />
            <img src="https://darchadia.com/wp-content/uploads/elementor/thumbs/20220618_100438-scaled-prd0njra1yy9r5br05nm49chw8yv9o93jdhia0eies.jpg" style={{ width: '46.8%' }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
