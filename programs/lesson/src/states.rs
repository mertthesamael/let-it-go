use anchor_lang::prelude::*;

#[account]
#[derive(Default)]
pub struct UserAccount{
    pub name: String, // 4 + 256
    pub avatar: String, // 4 + 2048 (largest url)
    pub authority: Pubkey, // 32
    pub last_message_id: u16, // 2 
    pub message_count: u16 // 2
}

#[account]
#[derive(Default)]
pub struct MessageAccount {
    pub id: u16, // 1
    pub content: String, // 4 + 2048
    pub creator: Pubkey, //32
    pub authority: Pubkey //32
}