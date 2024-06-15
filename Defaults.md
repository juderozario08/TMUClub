# Default TSX Functions

### Default InputBox Component

```tsx
<View style={Styles.InputBox}>
    <Text style={Styles.InputBoxText}>ENTER TEXT</Text>
    <TextInput
        style={Styles.Input}
        onChangeText={"SET FUNCTIONS FOR USESTATE"}
        value={"VALUE OF BEING SET"}
        autoCapitalize="none" {/*GENERALLY NEVER EXCEPT FOR USERNAME*/}
        autoComplete={"password" as TextInputProps["autoComplete"]} {/*GENERALLY NEVER EXCEPT FOR PASSWORD*/}
        keyboardType={"default" as KeyboardTypeOptions} {/*GENERALLY NEVER EXCEPT FOR PASSWORD*/}
        secureTextEntry={!passwordShow}
    />
    {/*THIS PART IS ONLY FOR ANY PART THAT HAS A PASSWORD AS WELL*/}
    <TouchableOpacity
        style={Styles.Feather}
        onPress={() => setPasswordShow(!passwordShow)}
    >
        {password.length < 1
            ? null
            : determineEye(passwordValidity, passwordShow)}
    </TouchableOpacity>
</View>
```

### Default Button Component

```tsx
   <View style={{ width: "100%", paddingHorizontal: 40, marginBottom: 40 }}>
    <TouchableOpacity
     style={Styles.SubmitButton}
     onPress={}
    >
     <Text style={Styles.SubmitButtonText}>Sign Up</Text>
    </TouchableOpacity>
    {error.length > 1 ? (
     <Text style={Styles.SubmitButtonErrorText}>{error}</Text>
    ) : null}
   </View>
```

### Default Modal Component

```tsx
   <Modal visible={isVisible} transparent={true} animationType="slide">
    <View style={styles.modalContainer}>
     <View style={styles.modalContent}>
      <Text style={{ color: "black", fontSize: 24 }}>Modal</Text>
      <TouchableOpacity style={Styles.SubmitButton} onPress={addClass}>
       <Text style={Styles.SubmitButtonText}>Add Class</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={Styles.SubmitButton}
       onPress={() => setIsVisible(false)}
      >
       <Text style={Styles.SubmitButtonText}>Close</Text>
      </TouchableOpacity>
     </View>
    </View>
   </Modal>
```