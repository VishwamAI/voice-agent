import { JovoUser } from '..';
import { TestJovo } from './TestJovo';
export declare class TestUser extends JovoUser<TestJovo> {
    get id(): string | undefined;
}
