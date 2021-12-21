import React from 'react'
import FuelPump from '../../src/components/FuelPump'
import { MaterialScrollView, MaterialWrapper } from './MaterialStyle'
import HeaderComponent from '../../src/components/Header/HeaderComponent';
import NavigationStrings from '../../src/Constants/NavigationStrings';


const Materials = (props) => {
    return (
        <MaterialWrapper>
            <HeaderComponent
                goBack={() => props.navigation.goBack()}
                text="Materials"
             />
        <MaterialScrollView>
            <FuelPump
                IconName={'keyboard-arrow-right'}
                ScreenName={NavigationStrings.FUEL_PUMP}
                JobName={'Fuel Pump'}
                toCollect={'To Collect'}
                RequestedDate={'2 Oct 2021'}
                CollectionDate={'10 Oct 2021'}
             />
            <FuelPump
                IconName={'keyboard-arrow-right'}
                ScreenName={NavigationStrings.FUEL_PUMP}
                JobName={'Fuel Pump'}
                toCollect={'To Collect'}
                RequestedDate={'2 Oct 2021'}
                CollectionDate={'10 Oct 2021'}
             />
            <FuelPump
                IconName={'keyboard-arrow-right'}
                ScreenName={NavigationStrings.FUEL_PUMP}
                JobName={'Fuel Pump'}
                toCollect={'To Collect'}
                RequestedDate={'2 Oct 2021'}
                CollectionDate={'10 Oct 2021'}
             />
            <FuelPump
                IconName={'keyboard-arrow-right'}
                ScreenName={NavigationStrings.FUEL_PUMP}
                JobName={'Fuel Pump'}
                toCollect={'To Collect'}
                RequestedDate={'2 Oct 2021'}
                CollectionDate={'10 Oct 2021'}
             />
            <FuelPump
                IconName={'keyboard-arrow-right'}
                ScreenName={NavigationStrings.FUEL_PUMP}
                JobName={'Fuel Pump'}
                toCollect={'To Collect'}
                RequestedDate={'2 Oct 2021'}
                CollectionDate={'10 Oct 2021'}
             />
         
             </MaterialScrollView>
        </MaterialWrapper>
    )
}

export default Materials
