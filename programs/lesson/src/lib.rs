use anchor_lang::prelude::*;
use std::time::{SystemTime, UNIX_EPOCH};
pub mod constants;
pub mod states;
use crate::{constants::*, states::*};
declare_id!("2MH7qg3Ga1YxjDHX916qRnKzwpX1sxqVpTbKB1h7jmfQ");

#[program]
pub mod let_it_go {
    use super::*;

    pub fn init_user(ctx: Context<InitUser>,name: String, avatar: String) -> Result<()> {
        let user_account : &mut Account<UserAccount> = &mut ctx.accounts.user_account ;
        let authority: &mut Signer = &mut ctx.accounts.authority;
        user_account.name = name;
        user_account.avatar = avatar;
        user_account.last_message_id = 0;
        user_account.message_count = 0;
        user_account.authority = authority.key();
        
        Ok(())
    }
    
    pub fn new_message(ctx: Context<CreateMessage>, content: String) -> Result<()>{
  
        // pub id: u8, // 1
        // pub content: String, // 4 + 2048
        // pub creator: Pubkey, //32
        // pub date: u32, // 4
        // pub authority: Pubkey //32
            let message_account:&mut Account<MessageAccount> = &mut ctx.accounts.message_account;
            let user_account : &mut Account<UserAccount> = &mut ctx.accounts.user_account ;
            let authority: &mut Signer = &mut ctx.accounts.authority;

            message_account.id =  user_account.last_message_id;
            message_account.content = content;
            message_account.creator = user_account.key();

            message_account.authority = authority.key();

            user_account.last_message_id = user_account.last_message_id.checked_add(1).unwrap();

            user_account.message_count = user_account.message_count.checked_add(1).unwrap();

        Ok(())
    }
}


#[derive(Accounts)]
#[instruction()]
pub struct InitUser<'info>{
    #[account(
        init,
        seeds = [USER_SEED, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 2348 + 8
    )]
    pub user_account: Account<'info, UserAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>
}



#[derive(Accounts)]
#[instruction()]
pub struct CreateMessage<'info> {
    #[account(
        init,
        seeds = [MESSAGE_SEED, authority.key().as_ref(), &[user_account.last_message_id as u8].as_ref()],
        bump,
        payer = authority,
        space = 2117 + 8
    )]
    pub message_account: Account<'info, MessageAccount>,

    #[account(
        mut,
        seeds = [USER_SEED, authority.key().as_ref()],
        bump,
        has_one = authority
    )]
    pub user_account: Account<'info, UserAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>
}