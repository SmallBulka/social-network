import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '@/shared/ui/dialog.tsx';
import { Button } from '@/shared/ui/button.tsx';
import { useDialogStore } from '@/shared/stores/useDialogStore.ts';
import { useTicketsStore } from '@/shared/stores/useTicketStore.ts';
import { DataListItem, DataListRoot } from '@/shared/ui/data-list.tsx';
import { HStack, Image, Text } from '@chakra-ui/react';
import { transferStore } from '@/shared/libs/transferStore';
import { useCurrencyStore } from '@/shared/stores/useCurrencyStore.ts';
import { currencyStore } from '@/shared/libs/currencyStore';
import kot from './kot.jpg'


export const TicketPopap = () => {
  const { isOpen, closeDialog } = useDialogStore();
  const { currentTicket } = useTicketsStore();
  const { selectedCurrency } = useCurrencyStore();

  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={(open) => !open && closeDialog()}
      size={['xs', 'xs', 'md', 'md']}
      placement='center'
      motionPreset='slide-in-bottom'
      lazyMount
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Билет куплен!</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <DataListRoot orientation='horizontal'>
            <Image src={kot} alt="kot"
            boxShadow='sm'
            borderRadius={'lg'}
            height='340px'
            width='500px'
            />
          
            <DataListItem
              label='Откуда'
              value={
                <HStack>
                  <Text color='gray.950' fontSize='sm' fontWeight='bold'>
                    {currentTicket.origin_name}
                  </Text>
                  <Text color='blue.500' fontSize='sm'>
                    {currentTicket.departure_date}, {currentTicket.departure_time}
                  </Text>
                </HStack>
              }
            />
            <DataListItem
              label='Куда'
              value={
                <HStack>
                  <Text color='gray.950' fontSize='sm' fontWeight='bold'>
                    {currentTicket.destination_name}
                  </Text>
                  <Text color='blue.500' fontSize='sm'>
                    {currentTicket.arrival_date}, {currentTicket.arrival_time}
                  </Text>
                </HStack>
              }
            />
            <DataListItem
              label='Пересадки'
              value={
                <Text color='gray.950' fontSize='sm'>
                  {transferStore(currentTicket.stops)}
                </Text>
              }
            />
            <DataListItem
              label='Цена'
              value={
                <Text color='gray.950' fontSize='sm' fontWeight='bold'>
                  {currencyStore(currentTicket.price, selectedCurrency)}
                </Text>
              }
            />
          </DataListRoot>
        </DialogBody>
        <DialogFooter>
          <Button
            onClick={closeDialog}
            bg={'blue.500'}
            color={'white'}
            _hover={{ bg: 'blue.600', cursor: 'pointer', borderColor: 'blue.600' }}
          >
            OK
          </Button>
        </DialogFooter>
        <DialogCloseTrigger onClick={closeDialog} />
      </DialogContent>
    </DialogRoot>
  );
};
