import { images } from "@/constants/theme";
import { Branch } from "@/types/ui.types";
import React, { useMemo, useState } from "react";
import { LayoutAnimation, Pressable, View } from "react-native";
import AppInput from "../ui/AppInput";
import BranchList from "./BranchList";

interface Props {
  branches: Branch[];
  onSelect: (branch: Branch) => void;
}

export default function BranchBottomSheet({ branches, onSelect }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  // On filtre les branches en fonction de la recherche (Nom ou Adresse)
  const filteredBranches = useMemo(() => {
    return branches.filter(
      (branch) =>
        branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.address.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, branches]);

  const handleInputFocus = () => {
    if (!isExpanded) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setIsExpanded(true);
    }
  };

  return (
    <View
      className="absolute bottom-0 left-0 right-0 rounded-t-[35px] bg-white px-6 pt-2"
      style={{
        height: isExpanded ? "50%" : "15%",
        maxHeight: "60%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 25,
      }}
    >
      {/* Handle bar pour l'aspect visuel "BottomSheet" */}
      <Pressable
        hitSlop={16}
        onPress={toggleExpanded}
        className="mb-6 mt-2 h-1.5 w-10 self-center rounded-full bg-neutral-5"
      />

      <View className="mb-10 gap-4">
        <AppInput
          value={searchQuery}
          placeholder="Search branch"
          icon={images.search_icon}
          hasIcon
          keyboardType="default"
          onFocus={handleInputFocus}
          onChangeText={(text) => setSearchQuery(text)}
        />

        {isExpanded && (
          <BranchList branches={filteredBranches} onSelect={onSelect} />
        )}
      </View>
    </View>
  );
}
