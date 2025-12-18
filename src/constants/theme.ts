//COLOR SCHEMES

export const colors = {
    //background: '#050b1d', // dark blue
    background: 'green', // dark blue
    backgroundAccent: '#0c1425', // darker background blue
    primary: '#bfc9d5', // light gray
    bold: '#60a5fa', // light blue
    accent: '#1e283b', // gray
    border: '#1e293c', // darker gray
};

// TEXT STYLES

export const GlobalStyles = {
    container: {
        flex: 1,
        backgroundColor: colors.background,
        flexDirection: "column" as const,
        alignItems: "center" as const,
        padding: 24
    },
    background: {
        backgroundColor: colors.background,
    },

    title: {
        fontSize: 32,
        fontWeight: '500' as const,
        color: colors.primary,
        letterSpacing: -0.5,
        marginBottom: 8,
    },
    titleBold: {
        fontSize: 32,
        fontWeight: '700' as const,
        color: colors.bold,
        letterSpacing: -0.4,
        marginBottom: 8,
    },

    subTitle: {
        fontSize: 22,
        fontWeight: '400' as const,
        color: colors.primary,
        marginBottom: 8,
    },

    text: {
        fontSize: 16,
        color: colors.primary,
        lineHeight: 24,
    },
    textBold: {
        fontSize: 16,
        color: colors.bold,
        lineHeight: 24,
    },

};

//ToDo: Convert this to a full button component
// BUTTON COMPONENTS

export const button = {
    buttonContainer: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 100,
      borderWidth: '1.5px',
      borderColor: 'white',
      minWidth: '100px',
      width: 'auto',
      maxWidth: '200px',
    },
  
    buttonText: {
      color: colors.primary,
      fontSize: 18,
      alignSelf: 'center'
    },
};

//ToDo: Convert this to a full session component
// SESSION COMPONENTS

export const session = {
    sessionContainer: {
        backgroundColor: colors.backgroundAccent,
        padding: 6,
        borderRadius: 12,
        Height: 5,
        margin: 10,
    },
    sessionType: {
        fontSize: 10,
        alignSelf: 'center' as const,
        padding: 6,
        marginLeft: 10,
        fontWeight: '500' as const,
        backgroundColor: '#101e3a',
        borderRadius: 100,
        color: colors.bold,
        justifyContent: 'center' as const,
    },
    sessionTitle: {
        fontSize: 16,
        fontWeight: '500' as const,
        color: colors.primary,
        marginLeft: 10,
        marginRight: 10,
    },
    sessionDescription: {
        width: '95%',
        backgroundColor: 'white',
        fontSize: 12,
        color: colors.primary,
        marginLeft: 10,
        marginRight: 10,
        numberOfLines: 1,
        marginBottom: 10,
    },
}

// Session Filter

export const filter = {
    filterContainer: {
        backgroundColor: colors.backgroundAccent,
        padding: 6,
        borderRadius: 12,
        marginVertical: 8,
        Height: 5,
        margin: 10,
        justifyContent: 'center' as const,
    },
    filterText: {
        fontSize: 10,
        alignSelf: 'center' as const,
        padding: 6,
        marginRight: 10,
        fontWeight: '500' as const,
        backgroundColor: '#103630',
        borderRadius: 100,
        color: '#4ade80',
    }
}