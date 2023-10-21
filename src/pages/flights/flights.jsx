import {React, useState} from 'react';
import exploreWorld from '../../../public/exploreYourWorld.png';
import iconFilter from '../../../public/icon-filter.png';
import './flights.scss';
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
    Card,
    CardBody,
    Checkbox,
    CheckboxGroup
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
        <main className='flights__main'>
            <section className='flights__banner'>
                <figure className='flights__banner--figure'>
                    <img src={exploreWorld} alt="Image Special Offer" />
                </figure>
            </section>
            <section className='flights__container'>
                <article className='flights__filters'>
                    <Card>
                        <CardBody>
                            <div className='flights__filters--title'>
                                <img src={iconFilter} alt="" />
                                <p>Sort by</p>
                                <label>Reset</label>
                            </div>
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
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <div className='flights__filters--title'>
                                <img src={iconFilter} alt="" />
                                <p>Filters</p>
                                <label>Reset</label>
                            </div>
                            <Accordion allowMultiple>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                No. of transit
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <CheckboxGroup>
                                            <Checkbox defaultChecked>
                                                <p>Direct</p>
                                                <p>30 USD</p>
                                            </Checkbox>
                                            <Checkbox>
                                                <p>1 transit</p>
                                                <p>45 USD</p>
                                            </Checkbox>
                                        </CheckboxGroup>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Transit point
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <CheckboxGroup>
                                            <Checkbox defaultChecked>
                                                <p>Osaka (ITM)</p>
                                            </Checkbox>
                                            <Checkbox>
                                                <p>Kuala Lumpur (KUL)</p>
                                            </Checkbox>
                                        </CheckboxGroup>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Transit duration
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <Box pt={6} pb={2}>
                                            <Slider min={0} max={22} aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                                                <SliderMark value={0} {...labelStyles}>
                                                    0h
                                                </SliderMark>
                                                <SliderMark value={22} {...labelStyles}>
                                                    22h
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
                                                    {sliderValue}h
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
                        </CardBody>
                    </Card>
                </article>
                <article>
                </article>
            </section>
        </main>
    )
}

export default Flights;