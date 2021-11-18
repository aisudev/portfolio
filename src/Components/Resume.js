import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'Aug 2021 - Present'} 
                        title={'FullStack Web Developer'}
                        subTitle={'Freelance'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'Jul 2021 - Aug 2021'} 
                        title={'BackEnd Web Developer'}
                        subTitle={'Wolves Corporation'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'May 2021 - Jun 2021'} 
                        title={'FrontEnd Web Developer'}
                        subTitle={'DevHeros'}
                        text={''} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2019 - Present'} 
                        title={'Software Engineering Degree'}
                        subTitle={'ChiangMai University'}
                        text={'239 Huay Kaew Rd, Suthep, Mueang Chiang Mai District, Chiang Mai 50200'} 
                    />
                    <ResumeItem 
                        year={'2013 - 2019'} 
                        title={'High School Graduation'}
                        subTitle={'Montfort College'}
                        text={'19/1 Montfort Rd, Tambon Tha Sala, Mueang Chiang Mai District, Chiang Mai 50000'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
