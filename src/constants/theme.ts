export const colors = {
    background: '#050b1d', // dark blue
    primary: '#bfc9d5', // light gray
    bold: '#60a5fa', // light blue
    accent: '#1e283b', // gray
};

export const GlobalStyles = {
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center" as const,
        justifyContent: "center" as const,
        padding: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: '500' as const,
        color: colors.primary,
        letterSpacing: -0.5, // Tighter tracking = Modern look
        marginBottom: 8,
    },
    titleBold: {
        fontSize: 32,
        fontWeight: '700' as const,
        color: colors.bold,
        letterSpacing: -0.4,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: colors.primary,
        lineHeight: 24,
    },
    subtitleBold: {
        fontSize: 16,
        color: colors.bold,
        lineHeight: 24,
    },
    background: {
        backgroundColor: colors.background,
    }
};