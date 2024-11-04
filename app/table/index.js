import { FlashList } from '@shopify/flash-list';
import * as React from 'react';
import { Alert, ScrollView, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '~/component/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '~/component/ui/table';
import { Text } from '~/component/ui/text';
import { cn } from '~/lib/utils';

const INVOICES = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Overdue',
    totalAmount: '$300.00',
    paymentMethod: 'Bank Transfer',
  },
];

const MIN_COLUMN_WIDTHS = [120, 120, 100, 120];

export default function Example() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const columnWidths = React.useMemo(() => {
    return MIN_COLUMN_WIDTHS.map((minWidth) => {
      const evenWidth = width / MIN_COLUMN_WIDTHS.length;
      return evenWidth > minWidth ? evenWidth : minWidth;
    });
  }, [width]);

  return (
    <ScrollView horizontal bounces={false} showsHorizontalScrollIndicator={false}>
      <Table aria-labelledby='invoice-table' style={{ backgroundColor: '#f7f7f7', borderRadius: 10, overflow: 'hidden' }}>
        <TableHeader style={{ backgroundColor: '#e0e0e0' }}>
          <TableRow>
            <TableHead style={{ width: columnWidths[0], color: 'black', fontWeight: 'bold' }}>
              <Text style={{ color: 'black' }}>Invoice</Text>
            </TableHead>
            <TableHead style={{ width: columnWidths[1], color: 'black', fontWeight: 'bold' }}>
              <Text style={{ color: 'black' }}>Status</Text>
            </TableHead>
            <TableHead style={{ width: columnWidths[2], color: 'black', fontWeight: 'bold' }}>
              <Text style={{ color: 'black' }}>Method</Text>
            </TableHead>
            <TableHead style={{ width: columnWidths[3], color: 'black', textAlign: 'right', fontWeight: 'bold' }}>
              <Text style={{ color: 'black' }}>Amount</Text>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <FlashList
            data={INVOICES}
            estimatedItemSize={45}
            contentContainerStyle={{ paddingBottom: insets.bottom }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: invoice, index }) => {
              return (
                <TableRow
                  key={invoice.invoice}
                  style={{
                    backgroundColor: index % 2 === 0 ? '#f0f4f8' : '#ffffff',
                    paddingVertical: 10,
                  }}
                >
                  <TableCell style={{ width: columnWidths[0], paddingHorizontal: 10 }}>
                    <Text style={{ color: 'black' }}>{invoice.invoice}</Text>
                  </TableCell>
                  <TableCell style={{ width: columnWidths[1], paddingHorizontal: 10 }}>
                    <Text style={{ color: 'black' }}>{invoice.paymentStatus}</Text>
                  </TableCell>
                  <TableCell style={{ width: columnWidths[2], paddingHorizontal: 10 }}>
                    <Text style={{ color: 'black' }}>{invoice.paymentMethod}</Text>
                  </TableCell>
                  <TableCell style={{ width: columnWidths[3], paddingHorizontal: 10, alignItems: 'flex-end' }}>
                    <Button
                      variant='secondary'
                      size='sm'
                      style={{
                        backgroundColor: '#f0f0f0',
                        color: 'black',
                        borderRadius: 5,
                        shadowOpacity: 0.15,
                        paddingHorizontal: 15,
                        paddingVertical: 5,
                      }}
                      onPress={() => {
                        Alert.alert(
                          invoice.totalAmount,
                          `You pressed the price button on invoice ${invoice.invoice}.`
                        );
                      }}
                    >
                      <Text style={{ color: 'black' }}>{invoice.totalAmount}</Text>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            }}
            ListFooterComponent={() => {
              return (
                <>
                  <TableFooter>
                    <TableRow style={{ backgroundColor: '#e6eaf0' }}>
                      <TableCell className='flex-1 justify-center'>
                        <Text style={{ color: 'black' }}>Total</Text>
                      </TableCell>
                      <TableCell style={{ alignItems: 'flex-end', paddingHorizontal: 15 }}>
                        <Button
                          size='sm'
                          variant='ghost'
                          style={{
                            backgroundColor: '#333',
                            color: '#fff',
                            borderRadius: 5,
                            paddingHorizontal: 15,
                            paddingVertical: 5,
                          }}
                          onPress={() => {
                            Alert.alert(
                              'Total Amount',
                              `You pressed the total amount price button.`
                            );
                          }}
                        >
                          <Text style={{ color: '#fff' }}>$2,500.00</Text>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                  <View className='items-center py-3 ios:pb-0'>
                    <Text
                      nativeID='invoice-table'
                      className='items-center text-sm text-muted-foreground'
                      style={{ color: 'black' }}
                    >
                      A list of your recent invoices.
                    </Text>
                  </View>
                </>
              );
            }}
          />
        </TableBody>
      </Table>
    </ScrollView>
  );
}
