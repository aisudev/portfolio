import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>

            <Title title={'My Skills'} span={'my skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={'PYTHON'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <ProgressBar
                        title={'C'}
                        width={'20%'}
                        text={'20%'}
                    />
                    <ProgressBar
                        title={'C++'}
                        width={'20%'}
                        text={'20%'}
                    />
                    <ProgressBar
                        title={'Machine Learning / Deep Learning'}
                        width={'15%'}
                        text={'15%'}
                    />
                    <ProgressBar
                        title={'EDA & Data Preprocessing'}
                        width={'35%'}
                        text={'35%'}
                    />
                    <ProgressBar
                        title={'HTML5'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'JAVASCRIPT'}
                        width={'55%'}
                        text={'55%'}
                    />
                    <ProgressBar
                        title={'Golang'}
                        width={'75%'}
                        text={'75%'}
                    />
                    <ProgressBar
                        title={'Node.js'}
                        width={'75%'}
                        text={'75%'}
                    />
                    <ProgressBar
                        title={'React.js'}
                        width={'75%'}
                        text={'75%'}
                    />
                    <ProgressBar
                        title={'Git'}
                        width={'75%'}
                        text={'75%'}
                    />
                    <ProgressBar
                        title={'Docker'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'GCP'}
                        width={'25%'}
                        text={'25%'}
                    />
                    <ProgressBar
                        title={'Algorithms/Data structures'}
                        width={'55%'}
                        text={'55%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
