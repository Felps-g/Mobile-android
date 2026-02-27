/**
 * Componente de lista vazia
 * Exibe quando não há tarefas
 */
import { View, Text, StyleSheet} from 'react-native';
import { MESSAGES } from '../utils/constants';
import type { ListEmptyProps } from '../types';
import {colors, spacing, typography} from '../styles/theme';

export const ListEmpty = ({title, description} : ListEmptyProps) =>(
    //Container Centralizado para estado vazio
    <View style = {styles.emptyState}>
        {/*Usa titulo customizado ou padrão*/}
        <Text style = {styles.emptyTitle}>
            {title || MESSAGES.EMPTY_TITLE}
        </Text>
        {/*Usa descriçao customizada ou padrão*/}
        <Text style = {styles.emptyDescription}>
            {title || MESSAGES.EMPTY_DESCRIPTION}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    emptyState: {
        alignItems: 'center',
        padding: spacing.xxxl,
    },
    emptyTitle: {
        fontSize: typography.sizes.xl,
        fontWeight: typography.weights.bold,
        marginBottom: spacing.sm,
        color: colors.text,
    },
    emptyDescription: {
        fontSize: typography.sizes.sm,
        color: colors.textSecondary,
        textAlign: 'center',
    }
});