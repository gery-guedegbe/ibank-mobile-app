import { useEffect, useRef } from "react";
import ClusteredMapView from "react-native-map-clustering";
import MapView from "react-native-maps";

import { Branch } from "@/types/ui.types";
import BranchMarker from "./BranchMarker";

interface Props {
  branches: Branch[];
  userLocation?: any;
  selectedBranch?: Branch | null;
  onSelectBranch: (branch: Branch) => void;
}

export default function BranchMap({
  branches,
  userLocation,
  selectedBranch,
  onSelectBranch,
}: Props) {
  const mapRef = useRef<MapView | null>(null);

  const initialBranch = branches[0];

  const initialRegion = {
    latitude: initialBranch.latitude,
    longitude: initialBranch.longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const zoomToBranch = (branch: Branch) => {
    mapRef.current?.animateToRegion({
      latitude: branch.latitude,
      longitude: branch.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  useEffect(() => {
    if (!selectedBranch) return;

    mapRef.current?.animateToRegion({
      latitude: selectedBranch.latitude,
      longitude: selectedBranch.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  }, [selectedBranch]);

  return (
    <ClusteredMapView
      ref={mapRef}
      style={{ flex: 1 }}
      initialRegion={initialRegion}
      showsUserLocation
      showsMyLocationButton
      clusterColor="#4D81E7"
    >
      {branches.map((branch) => (
        <BranchMarker
          key={branch.id}
          branch={branch}
          onPress={() => {
            zoomToBranch(branch);
            onSelectBranch(branch);
          }}
        />
      ))}
    </ClusteredMapView>
  );
}
