<template>
  <div class="table-wrap"><table><thead><tr><th>Member</th><th>Course & year</th><th>Organization</th><th>Position</th><th>Contact</th><th aria-label="Actions" /></tr></thead><tbody>
    <tr v-for="member in members" :key="member.id"><td><div class="member-cell"><span class="avatar" :class="member.color">{{ member.initials }}</span><div><strong>{{ member.name }}</strong><span>{{ member.id }}</span></div></div></td><td><div class="course-cell"><strong>{{ member.course }}</strong><span>{{ member.year }}</span></div></td><td><span class="organization-name">{{ member.organization }}</span></td><td><span class="position-pill" :class="member.position === 'President' ? 'leader' : ''">{{ member.position }}</span></td><td><a class="contact-link" :href="`mailto:${member.email}`">{{ member.email }}</a><span class="phone">{{ member.phone }}</span></td><td><div class="row-actions"><button class="action-button edit-action" aria-label="Edit member" @click="$emit('edit', member)"><ion-icon :icon="createOutline" /></button><button class="action-button delete-action" aria-label="Delete member" @click="$emit('delete', member)"><ion-icon :icon="trashOutline" /></button></div></td></tr>
    <tr v-if="members.length === 0"><td colspan="6" class="empty-state">No members match your search.</td></tr>
  </tbody></table></div>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { createOutline, trashOutline } from 'ionicons/icons';
import type { Member } from '../types/member';

defineProps<{ members: Member[] }>();
defineEmits<{ edit: [member: Member]; delete: [member: Member] }>();
</script>

<style scoped>
.table-wrap { overflow-x: auto; } table { width: 100%; border-collapse: collapse; min-width: 700px; } th { padding: 13px 25px; color: #a0aaa5; font: 500 10px 'DM Mono', monospace; letter-spacing: .06em; text-align: left; text-transform: uppercase; } td { padding: 16px 25px; border-top: 1px solid #edf0ed; font-size: 12px; vertical-align: middle; }.member-cell, .course-cell { display: flex; align-items: center; gap: 11px; }.member-cell strong, .course-cell strong { display: block; font-weight: 600; font-size: 13px; color: #263b34; }.member-cell span:not(.avatar), .course-cell span, .phone { display: block; color: #9aa49f; font-size: 11px; margin-top: 4px; }.organization-name { display: block; max-width: 180px; color: #52766a; font-size: 12px; line-height: 1.35; }.avatar { display: grid; place-items: center; width: 33px; height: 33px; border-radius: 50%; font-size: 10px; font-weight: 700; }.lavender { background: #e6e4f4; color: #6864a2; }.peach { background: #f7e3d6; color: #a9684f; }.mint { background: #dceee6; color: #438067; }.sky { background: #dcecf2; color: #4b7c8d; }.yellow { background: #f6edc9; color: #997622; }.position-pill { display: inline-block; padding: 5px 9px; background: #f1f4f1; color: #60746b; border-radius: 4px; font-size: 11px; }.position-pill.leader { background: #f9e6df; color: #bd5d48; }.contact-link { display: block; color: #52766a; font-size: 12px; text-decoration: none; }.row-actions { display: flex; align-items: center; gap: 4px; }.action-button { display: grid; place-items: center; width: 30px; height: 30px; border: 0; border-radius: 5px; background: transparent; cursor: pointer; font-size: 16px; }.edit-action { color: #52766a; }.delete-action { color: #c86a56; }.action-button:hover { background: #f1f4f1; }.delete-action:hover { background: #f9e6df; }.empty-state { text-align: center; color: #89958f; padding: 42px; }
</style>
