use anchor_lang::{prelude::*, accounts::signer};

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod lesson {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        

        Ok(())
    }
}





#[account]
pub struct UserAccount {
    pub message_count:u16,
    pub authority:Pubkey,
}

#[account]
pub struct MessageAccount {
    pub content:String,
    pub authority:Pubkey,
    pub idx:u16,
    pub time:u16
}


//
#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub authority:Signer<'info>,

    #[account(
        init,
        seeds = [b"msg_account".as_ref()],
        bump,
        payer = authority,
        space = 2 + std::mem::size_of::<UserAccount>()
    )]
    pub user_profile:Box<Account<'info, UserAccount>>,
    pub system_program:Program<'info, System>

}
