### Default TOP TAB Navigator

```tsx
<TopTab.Navigator
    initialRouteName="Dashboard"
    backBehavior="history"
    tabBarPosition="bottom"
    screenOptions={{
        tabBarActiveTintColor: theme === "dark" ? "white" : "black",
        tabBarInactiveTintColor: "darkgray",
        tabBarStyle: { backgroundColor: theme === "dark" ? "black" : "white" },
        tabBarLabel: () => {
            return null;
        },
    }}
>
```
