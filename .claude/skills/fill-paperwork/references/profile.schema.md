# Profile schema & field-naming conventions

The profile (`paperwork/profile/profile.yaml`) is the single source of truth for
the user's reusable info. It is grouped into namespaces so the same value isn't
duplicated and so mapping to form fields stays predictable.

## Namespaces

| Namespace          | Holds                                                        |
|--------------------|-------------------------------------------------------------|
| `personal`         | Name parts, DOB, SSN, contact info                          |
| `address_home`     | Home/residential address                                    |
| `provider`         | Clinical identifiers: NPI, license, DEA, taxonomy, CAQH     |
| `practice`         | Employer/clinic: legal name, EIN, group NPI, address        |
| `insurance`        | The user's own insurance (carrier, member id, group)        |
| `emergency_contact`| Emergency contact name/relationship/phone                   |
| `banking`          | Bank details — only when a form truly requires them         |
| `custom`           | Anything the fixed schema doesn't cover (free key/value)    |

## Rules

- Keys are `lowercase_snake_case`. Add new keys rather than cramming multiple
  values into one.
- Store names **split** (`first_name`, `last_name`) — most forms want parts, and
  a full name is easy to compose. Compose `"{first} {last}"` when a form wants
  one box.
- Dates as ISO `YYYY-MM-DD` in the profile; reformat per-form as needed (many
  forms want `MM/DD/YYYY`).
- Mark sensitive values mentally (ssn, dea_number, tax_id_ein, account_number).
  They stay in the gitignored profile only.
- When extracting from a document, only write a value you're confident about.
  If unsure, leave blank and ask the user.

## Extending

If a recurring form needs a value with no home, add it under the most fitting
namespace, or under `custom:` with a descriptive key, e.g.:

```yaml
custom:
  board_certification: "ABIM Internal Medicine"
  malpractice_carrier: "The Doctors Company"
  malpractice_policy_no: "XXXXXX"
```
