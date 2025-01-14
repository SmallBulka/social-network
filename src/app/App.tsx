import 'modern-normalize/modern-normalize.css';
import './App.css';
import { Box, Grid } from '@chakra-ui/react';
import { Logo } from '@/app/ui/Logo.tsx';
import { CurrencySwitch } from '@/widgets/CurrencySwitch';
import { Toaster } from '@/shared/ui/toaster.tsx';
import { FilterTransfers } from '@/widgets/FilterTransfers/FilterTransfers';
import { TicketList } from '@/widgets/TicketList';

function App() {
  return (
    <>
      <Box
        backgroundColor='#F3F7FA'
        display='flex'
        justifyContent='flex-start'
        alignItems='center'
        flexDirection='column'
        padding={['5px', '5px', '10px', '20px']}
        minHeight='100vh'
        width='100%'
      >
        <Box
          paddingBottom='20px'
          width='100%'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Logo />
          <div className='logo'>
            <h1 className="h1">Pilot_Drinkins</h1>
            <p className="p-small">Крутое пике</p>
          </div>
        </Box>
        <Grid
          gap='4'
          templateColumns={['1fr', '1fr', '1fr', '233px 1fr']}
          width={['100%', '100%', '100%', '1024px']}
          margin='0 auto'
        >
          <Box width='100%'>
            <Box
              backgroundColor='white'
              shadow='sm'
              borderRadius='md'
              display='flex'
              justifyContent='flex-start'
              alignItems='flex-start'
              flexDirection='column'
              gap={8}
              width='223px'
              margin='0 auto'
            >
              <CurrencySwitch />
              <FilterTransfers />
            </Box>
          </Box>
          <Box
            display='flex'
            justifyContent='flex-start'
            alignItems='center'
            flexDirection='column'
            gap={4}
          >
            <TicketList />
          </Box>
        </Grid>
      </Box>
      <Toaster />
    </>
  );
}

export default App;
