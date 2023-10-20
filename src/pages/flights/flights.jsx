import {React, useState} from 'react';
import exploreWorld from '../../../public/exploreYourWorld.png';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Radio, 
    RadioGroup,
    Stack,
} from '@chakra-ui/react'

function Flights() {
    const [sliderValue, setSliderValue] = useState(50)
    const labelStyles = {
        mt: '2',
        ml: '-2.5',
        fontSize: 'sm',
    }
    const [value, setValue] = useState('1')
    return (
        <main>
            <section>
                <figure>
                    <img src={exploreWorld} alt="Image Special Offer" />
                </figure>
            </section>
            <section>
                <article>
                    <div>
                        <Accordion allowMultiple>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Price
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <RadioGroup onChange={setValue} value={value}>
                                        <Stack>
                                            <Radio value='1'>Lowest price</Radio>
                                            <Radio value='2'>Highest price</Radio>
                                        </Stack>
                                    </RadioGroup>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <Accordion allowMultiple>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Section 2 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Section 2 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    <Box pt={6} pb={2}>
                                        <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                                            <SliderMark value={25} {...labelStyles}>
                                                25%
                                            </SliderMark>
                                            <SliderMark value={50} {...labelStyles}>
                                                50%
                                            </SliderMark>
                                            <SliderMark value={75} {...labelStyles}>
                                                75%
                                            </SliderMark>
                                            <SliderMark
                                                value={sliderValue}
                                                textAlign='center'
                                                bg='blue.500'
                                                color='white'
                                                mt='-10'
                                                ml='-5'
                                                w='12'
                                            >
                                                {sliderValue}%
                                            </SliderMark>
                                            <SliderTrack>
                                                <SliderFilledTrack />
                                            </SliderTrack>
                                            <SliderThumb />
                                        </Slider>
                                    </Box>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div></div>
                </article>
                <article>
                </article>
            </section>
        </main>
    )
}

export default Flights;