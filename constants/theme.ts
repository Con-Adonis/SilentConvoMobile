
export const colors = {
    background: '#09090b', // Zinc-950 (Dark mode bg)
    surface: '#18181b',    // Zinc-900 (Card bg)
    primary: 'green',    // Zinc-50 (Text/Icon)
    secondary: '#a1a1aa',  // Zinc-400 (Subtext)
    accent: '#2563eb',     // Blue-600 (Action)
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
    subtitle: {
        fontSize: 16,
        color: colors.secondary,
        lineHeight: 24,
    },
    background: {
        backgroundColor: colors.background,
    }
};