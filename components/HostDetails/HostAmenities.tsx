import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,

} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/constants/theme";
import { HostType } from "@/constants/types";
import { useTranslation } from "react-i18next";
import { SvgXml } from "react-native-svg";


const HostAmenities = ({host}:{host:HostType}) => {
    const { t, i18n } = useTranslation();


    const renderAmenity = (amenity: any, index: number) => {
        const amenityName = amenity || t("Unknown Amenity");
        const amenityIcon = "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M7.5 2a4.5 4.5 0 0 1 4.47 4H14v2H8V6h1.95A2.5 2.5 0 0 0 5 6.34V16h26v2h-2v5a5 5 0 0 1-3 4.58V30h-2v-2H8v2H6v-2.42a5 5 0 0 1-3-4.34V18H1v-2h2V6.5A4.5 4.5 0 0 1 7.5 2zM27 18H5v5a3 3 0 0 0 2.65 2.98l.17.01L8 26h16a3 3 0 0 0 3-2.82V23z\"\u003E\u003C/path\u003E\u003C/svg\u003E"
    
        // Modify the SVG string to remove 'fill: currentcolor;'
        const svgXmlData = amenityIcon?.replace("fill: currentcolor;", "");
    
        return (
          <View key={amenity} style={styles.amenity}>
            <SvgXml xml={svgXmlData} width={24} height={24} />
            <Text style={styles.amenityText}>{amenityName}</Text>
          </View>
        );
      };
    



  
  return (
    
    <>
           <View style={{ margin: 25, marginLeft: 20 }}>
          <Text style={styles.amenitiesTitle}>{t("Amenities")} :</Text>
          <Text style={styles.amenitiesDescreption}>
            {t("About the property's amenities and services")}
          </Text>
        </View>
        <View style={styles.amenitiesContainer}>
          {host.amenities && host.amenities.length > 0 ? (
            host.amenities.map(renderAmenity)
          ) : (
            <Text style={styles.noAmenities}>{t("No amenities listed")}</Text>
          )}
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.about}>{host.About}</Text>
        </View>

        </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  calendarTextStyle:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  selectedItemColor:{
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 10,
  },
  carousel: {
    width: "100%",
    height: 450,
  },
  celenderPicker: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  dotStyle: {
    width: 7,
    height: 7,
    backgroundColor: "silver",
    marginHorizontal: 3,
    borderRadius: 8,
  },
  images: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    elevation: 2,
  },
  roundButtons: {
    width: 80,
    position: "absolute",
    top: 40,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  roundButton: {
    borderRadius: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.primary,
    padding: 8,
    elevation: 2,
  },
  contentContainer: {
    paddingTop: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginVertical: 10,
    marginBottom: 15,
    marginLeft: 20,
  },
  address: {
    fontSize: 18,
    fontWeight: "400",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderColor: "silver",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    fontSize: 17,
    marginLeft: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  amenitiesTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  amenitiesDescreption: {
    fontSize: 16,
    fontWeight: "400",
  },
  amenitiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingBottom: 15,
    marginLeft: 20,
  },
  amenity: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.4,
    padding: 8,
    borderRadius: 16,
    marginBottom: 12,
  },
  amenityText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 8,
  },
  noAmenities: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
  },
  aboutContainer: {
    padding: 15,
    borderColor: "silver",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    margin: 20,
    marginTop: 0,
  },
  about: {
    fontSize: 14,
    color: "#666",
  },
  hostContainer: {
    padding: 8,
    borderBottomWidth: 0.5,
    margin: 20,
    marginTop: 0,
  },
  hostCardTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  hostCardContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.4,
    margin: 25,
    marginLeft: 40,
    padding: 15,
    width: "75%",
    height: 170,
    borderRadius: 16,
    elevation: 8,
    backgroundColor: "#fff",
  },
  hostImage: {
    width: 90,
    height: 90,
    borderWidth: 2.5,
    borderColor: "#6495ed",
    borderRadius: 50,
  },
  hostName: {
    fontSize: 20,
    fontWeight: "800",
    color: "#333",
  },
  reviewsContainer: {
    flexDirection: "row",
    padding: 8,
  },
  reviewContainer: {
    borderWidth: 0.5,
    margin: 15,
    marginBottom: 25,
    padding: 15,
    width: 300,
    height: 175,
    borderRadius: 16,
    backgroundColor: "#f3f3f3",
  },
  reviewProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  reviewerImage: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "#6495ed",
    borderRadius: 30,
  },
  reviewerName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  reviewMessage: {
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 0.5,
    margin: 20,
    marginTop: 0,
    paddingTop: 30,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    padding: 10,
    borderRadius: 12,
  },
  addButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    margin: 20,
  },
});

export default HostAmenities;
