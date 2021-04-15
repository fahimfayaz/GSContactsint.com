import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTilesHowItWorks = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title:
      "The Process",
   
  };
  
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16">
                    <Image
                      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618461011/icons8-quality-50_dxocnk.png"
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="c3f51b5 mt-0 mb-8">
                 Check Elligibility
                  </h4>
                  
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16">
                    <Image
                      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618461211/icons8-school-50_ksgnbn.png"
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="c3f51b5 mt-0 mb-8">
                  Apply to Schools
                  </h4>
                  
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16">
                    <Image
                      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618461011/icons8-approval-50_lsbr3l.png"
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="c3f51b5 mt-0 mb-8">
               Get Accepted
                  </h4>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16">
                    <Image
                      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618301369/icons8-passport-50_olt35v.png"
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="c3f51b5 mt-0 mb-8">
                  Apply for Visa
                  </h4>
               
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16">
                    <Image
                      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618301369/icons8-airplane-departure-50_dz8p1y.png"
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className=" c3f51b5 mt-0 mb-8">
                 Start Your Journey
                  </h4>
                  
                </div>
              </div>
            </div>

          

         
           

           
          </div>
         
        </div>
        
      </div>
      
    </section>
   
    
  );
};

FeaturesTilesHowItWorks.propTypes = propTypes;
FeaturesTilesHowItWorks.defaultProps = defaultProps;

export default FeaturesTilesHowItWorks;
