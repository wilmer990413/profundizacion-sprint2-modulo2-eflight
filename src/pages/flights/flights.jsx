import {React, useEffect, useState} from 'react';
import exploreWorld from '../../../public/exploreYourWorld.png';
import iconFilter from '../../../public/icon-filter.png';
import {listFlights} from '../../services/flights.js';
import {FindAirlinesById} from '../../services/airlines.js';
import Flight from './flight';
import './flights.scss';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Radio, 
    RadioGroup,
    Stack,
    Card,
    CardBody,
    Checkbox,
    CheckboxGroup,
    Progress,Text 
} from '@chakra-ui/react';
import { useApi } from "../../context/AppListaContext";

function Flights() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ascendingOrder, setAscendingOrder] = useState();
    const [range, setRange] = useState([0, 22]);
    const { selectionFlight } = useApi();
    const handleUpdate = (flight) => {
        selectionFlight(flight);
    };
    const handleSliderChange = (newRange) => {
        setRange(newRange);
    };
    const handleRadioButtonClick = () => {
        setAscendingOrder(!ascendingOrder);
        const sortedData = data.sort((a, b) => {
            if (ascendingOrder) {
                return a.detalles_precio.precio - b.detalles_precio.precio;
            } else {
                return b.detalles_precio.precio - a.detalles_precio.precio;
            }
        });
        console.log("ORDENADO SEGUN CORRESPONDA",sortedData);
        setData(sortedData);
    };
    const flightsData = async () => {
        try {
            const response = await listFlights();
            const loadingInfoEmpre = response.map( async (element, index)=>{
                const empresa = await FindAirlinesById(element.empresa);
                response[index].nombre_empresa = empresa.nombre;
                response[index].imagen_empresa = empresa.image;
            });
            await Promise.all(loadingInfoEmpre);
            setData(response);
            if(response){
                setLoading(false);
            }
            setAscendingOrder('');
        } catch (error) {
            console.error('Error al hacer la solicitud a la API:', error);
            setLoading(false);
        }
    };
    useEffect(() => {
        flightsData();
    }, []);
    return (
        <main className='flights__main'>
            <section className='flights__banner'>
                <figure className='flights__banner--figure'>
                    <img src={exploreWorld} alt="Image Special Offer" />
                </figure>
            </section>
            <section className='flights__container'>
                <article className='flights__filters'>
                    <Card className='flights__filters--card'>
                        <CardBody>
                            <div className='flights__filters--title'>
                                <img src={iconFilter}/>
                                <p>Sort by</p>
                                <label onClick={flightsData}>Reset</label>
                            </div>
                            <Accordion allowMultiple>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' fontWeight={700} >
                                                Price
                                            </Box>
                                            <AccordionIcon color='#11D396' />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <RadioGroup value={ascendingOrder} onChange={handleRadioButtonClick}>
                                            <Stack>
                                                <Radio value={false}>Lowest price</Radio>
                                                <Radio value={true}>Highest price</Radio>
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
                                <img src={iconFilter} />
                                <p>Filters</p>
                                <label>Reset</label>
                            </div>
                            <Accordion allowMultiple>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' fontWeight={700}>
                                                No. of transit
                                            </Box>
                                            <AccordionIcon color='#11D396' />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel  pb={4}>
                                        <CheckboxGroup>
                                            <Checkbox className='flights__filters--checkbox'>
                                                <div>
                                                    <p>Direct</p> <span>30 USD</span>
                                                </div>
                                            </Checkbox><br/>
                                            <Checkbox className='flights__filters--checkbox'>
                                                <div>
                                                    <p>1 transit</p> <span>45 USD</span>
                                                </div>
                                            </Checkbox><br/>
                                            <Checkbox className='flights__filters--checkbox'>
                                                <div>
                                                    <p>2 transit</p> <span>60 USD</span>
                                                </div>
                                            </Checkbox><br/>
                                        </CheckboxGroup>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' fontWeight={700}>
                                                Transit point
                                            </Box>
                                            <AccordionIcon color='#11D396' />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <CheckboxGroup>
                                            <Checkbox>
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
                                            <Box as="span" flex='1' textAlign='left' fontWeight={700}>
                                                Transit duration
                                            </Box>
                                            <AccordionIcon color='#11D396' />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        <Box pt={6} pb={2}>
                                            <RangeSlider
                                                min={0}
                                                max={22}
                                                aria-label={['min', 'max']}
                                                defaultValue={range}
                                                step={1}
                                                colorScheme='purple'
                                                onChange={handleSliderChange}
                                            >
                                                <RangeSliderTrack>
                                                    <RangeSliderFilledTrack />
                                                </RangeSliderTrack>
                                                <RangeSliderThumb index={0} />
                                                <RangeSliderThumb index={1} />
                                            </RangeSlider>
                                            <div className='flights__filters--slider'>
                                                <Text>
                                                    0h
                                                </Text>
                                                <Text color='#6C6CFE' fontWeight={700}>
                                                    {range[0]==0? '' : `${range[0]} h`}
                                                </Text>
                                                <Text color='#6C6CFE' fontWeight={700}>
                                                    {range[1]==22? '' : `${range[1]} h`}
                                                </Text>
                                                <Text>
                                                    22h
                                                </Text>
                                            </div>
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </CardBody>
                    </Card>
                </article>
                <article className='flights__content'>
                    {
                        loading == true || data.length == 0? 
                        <Progress colorScheme='whatsapp' isIndeterminate /> : 
                        !ascendingOrder?
                            data.map((element, index)=>{
                                return  <Flight key={index} flight={element} action={handleUpdate}/>
                            })
                            : data.map((element, index)=>{
                                return  <Flight key={index} flight={element} action={handleUpdate}/>
                            })
                    }
                </article>
            </section>
        </main>
    )
}

export default Flights;