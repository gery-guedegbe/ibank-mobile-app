import ExchangeCurrencyModal from "@/components/exchange/ExchangeCurrencyModal";
import ExchangeInput from "@/components/exchange/ExchangeInput";
import AppButton from "@/components/ui/AppButton";
import { images } from "@/constants/theme";
import { getExchangeRate } from "@/services/exchange.service";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ExchangeScreen = () => {
  const router = useRouter();
  const [amount, setAmount] = useState("1000");
  const [result, setResult] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("KRW");
  const [rate, setRate] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalMode, setModalMode] = useState<"from" | "to" | null>(null);

  // Récupération du taux réel
  const fetchRate = async () => {
    setLoading(true);
    const newRate = await getExchangeRate(fromCurrency, toCurrency);
    if (newRate) {
      setRate(newRate);
      setResult((parseFloat(amount) * newRate).toFixed(2));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRate();
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (val: string) => {
    setAmount(val);
    const num = parseFloat(val);
    setResult(isNaN(num) ? "" : (num * rate).toFixed(2));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6 py-8">
        {/* Header */}
        <View className="mb-8 flex-row items-center gap-3">
          <Pressable onPress={() => router.back()} hitSlop={16}>
            <Image source={images.arrow_left_black} className="h-4 w-4" />
          </Pressable>
          <Text className="font-poppins-semibold text-xl text-neutral-1">
            Exchange
          </Text>
        </View>

        {/* Image Responsive */}
        <View className="mb-8 items-center">
          <Image
            source={images.exchange_image}
            className="h-[200px] w-full max-w-[320px]"
            resizeMode="contain"
          />
        </View>

        {/* Inputs Section */}
        <View className="items-center gap-4">
          <ExchangeInput
            label="From"
            value={amount}
            currency={fromCurrency}
            onChangeText={handleAmountChange}
            onCurrencyPress={() => setModalMode("from")}
          />

          <View className="rounded-full border border-neutral-5 bg-neutral-6 p-2">
            <Image
              source={images.exchange_arrows_icon}
              className="h-6 w-12"
              resizeMode="contain"
            />
          </View>

          <ExchangeInput
            label="To"
            value={result}
            currency={toCurrency}
            editable={false}
            onCurrencyPress={() => setModalMode("to")}
          />

          {/* Rate Info */}
          <View className="w-full flex-row justify-between py-2">
            <Text className="font-poppins-medium text-primary-1">
              Currency rate
            </Text>

            {loading ? (
              <ActivityIndicator size="small" />
            ) : (
              <Text className="font-poppins-regular text-neutral-1">
                1 {fromCurrency} = {rate.toFixed(4)} {toCurrency}
              </Text>
            )}
          </View>

          <View className="mt-4 w-full">
            <AppButton
              title="Exchange"
              onPress={() => console.log("Transaction confirmée")}
            />
          </View>
        </View>
      </ScrollView>

      {modalMode && (
        <ExchangeCurrencyModal
          selectedCurrency={modalMode === "from" ? fromCurrency : toCurrency}
          onClose={() => setModalMode(null)}
          onSelect={(code) => {
            if (modalMode === "from") {
              setFromCurrency(code);
            } else {
              setToCurrency(code);
            }
            setModalMode(null);
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default ExchangeScreen;
