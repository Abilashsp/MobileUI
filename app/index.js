import React from "react";
import { View, Text, FlatList, StyleSheet, Dimensions, Pressable } from "react-native";
import { Link } from "expo-router";

const data = [
  { id: "1", title: "AccordianUI", route: "/Accordian" },
  { id: "2", title: "alertdialog", route: "/alertdialog" },
  { id: "3", title: "aspect-ratio", route: "/aspect-ratio" },
  { id: "4", title: "avatar", route: "/avatar" },
  { id: "5", title: "badge", route: "/badge" },
  { id: "6", title: "button", route: "/button" },
  { id: "7", title: "card", route: "/card" },
  { id: "8", title: "checkbox", route: "/checkbox" },
  { id: "9", title: "collapsible", route: "/collapsible" },
  { id: "10", title: "context-menu", route: "/context-menu" },
  { id: "11", title: "dialog", route: "/dialog" },
  { id: "12", title: "dropdown-menu", route: "/dropdown-menu" },
  { id: "13", title: "hover-card", route: "/hover-card" },
  { id: "14", title: "input", route: "/input" },
  { id: "15", title: "label", route: "/label" },
  { id: "16", title: "menubar", route: "/menubar" },
  { id: "17", title: "navigation-menu", route: "/navigation-menu" },
  { id: "18", title: "popover", route: "/popover" },
  { id: "19", title: "separator", route: "/separator" },
  { id: "20", title: "select", route: "/select" },
  { id: "21", title: "Radiobutton", route: "/Radiobutton" },
  { id: "22", title: "progress", route: "/progress" },
  { id: "23", title: "switch", route: "/switch" },
  { id: "24", title: "skeleton", route: "/skeleton" },
  { id: "25", title: "tabs", route: "/tabs" },
  { id: "26", title: "Textarea", route: "/Textarea" },
  { id: "27", title: "toggle", route: "/toggle" },
  { id: "28", title: "toggle-group", route: "/toggle-group" },
  { id: "29", title: "tooltip", route: "/tooltip" },
];
const numColumns = 2;
const tileSize = Dimensions.get("window").width / numColumns - 24;

const GridList = () => {
  const renderItem = ({ item }) => (
    <Link href={item.route} style={styles.gridItem}>
      <Pressable style={({ pressed }) => [
          styles.boxBackground,
          pressed && styles.pressedBackground
        ]}>
        <Text style={styles.itemText}>{item.title}</Text>
      </Pressable>
    </Link>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.gridContainer}
    />
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    padding: 12,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  gridItem: {
    width: tileSize,
    height: tileSize,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 12,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  boxBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#f0f4f7",
  },
  pressedBackground: {
    backgroundColor: "#d9e3f0", // Slightly darker shade for pressed effect
  },
  itemText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});

export default GridList;
